using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;
using System.IO;

namespace TeamGuenonWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/DocumentSet")]
    public class DocumentSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public DocumentSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/DocumentSet
        [HttpGet]
        public IEnumerable<Documents> GetDocuments()
        {
            return _context.Documents;
        }

        // GET: api/DocumentSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocuments([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var documents = await _context.Documents.SingleOrDefaultAsync(m => m.DocumentId == id);

            if (documents == null)
            {
                return NotFound();
            }

            return Ok(documents);
        }

        // PUT: api/DocumentSet/5
        [HttpPut("{id}")]
        public IActionResult PutDocuments([FromRoute] int id, [FromBody] Documents documents)
        {
            return BadRequest("Not implemented");
        }

        // POST: api/DocumentSet
        [HttpPost]
        public async Task<IActionResult> PostDocuments([FromBody] Documents documents)
        {

            if (!ModelState.IsValid || documents.TypeOfDoc[0] != '.')
            {
                return BadRequest(ModelState);
            }

            using (FileStream fs = new FileStream(@"C:\Users\yoang\Desktop\pia21970-opt.jpg", FileMode.Open))
            {
                using (BinaryReader br = new BinaryReader(fs))

                {
                    byte[] bin = br.ReadBytes(Convert.ToInt32(fs.Length));
                    documents.BinDoc = Convert.ToBase64String(bin);
                }
            }


            if (_context.Documents.Any(x => x.DocumentId == documents.DocumentId))
            {
                _context.Documents.Update(documents);
            }
            else
            {

                _context.Documents.Add(documents);
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocuments", new { id = documents.DocumentId }, documents);
        }

        // DELETE: api/DocumentSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocuments([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var documents = await _context.Documents.SingleOrDefaultAsync(m => m.DocumentId == id);
            if (documents == null)
            {
                return NotFound();
            }

            _context.Documents.Remove(documents);
            await _context.SaveChangesAsync();

            return Ok(documents);
        }

        private bool DocumentsExists(int id)
        {
            return _context.Documents.Any(e => e.DocumentId == id);
        }
    }
}