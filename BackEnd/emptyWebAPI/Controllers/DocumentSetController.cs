using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;

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
        public async Task<IActionResult> PutDocuments([FromRoute] int id, [FromBody] Documents documents)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != documents.DocumentId)
            {
                return BadRequest();
            }

            _context.Entry(documents).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DocumentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DocumentSet
        [HttpPost]
        public async Task<IActionResult> PostDocuments([FromBody] Documents documents)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Documents.Add(documents);
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