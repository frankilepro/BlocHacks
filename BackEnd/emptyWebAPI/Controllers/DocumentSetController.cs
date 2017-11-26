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

        // POST: api/DocumentSet/UploadFile
        [HttpPost("UploadFile")]
        public async Task<IActionResult> Post(IFormFile file)
        {
            long size = file.Length;
            var test = _context.Documents.Single(x => x.DocumentId == 13);
            var filePath = Path.GetTempFileName();
            if (size > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    using (BinaryReader br = new BinaryReader(stream))
                    {
                        byte[] bin = br.ReadBytes((int)stream.Length);
                        test.BinDoc = Convert.ToBase64String(bin);
                    }
                }
                await _context.SaveChangesAsync();
            }
            return Ok("wow");
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