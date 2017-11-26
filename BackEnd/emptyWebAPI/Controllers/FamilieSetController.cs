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
    [Route("api/FamilieSet")]
    public class FamilieSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public FamilieSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/FamilieSet
        [HttpGet]
        public IEnumerable<Family> GetFamily()
        {
            return _context.FamilySet;
        }

        // GET: api/FamilieSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFamily([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var family = await _context.FamilySet.SingleOrDefaultAsync(m => m.FamilyId == id);

            if (family == null)
            {
                return NotFound();
            }

            return Ok(family);
        }

        // PUT: api/FamilieSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFamily([FromRoute] int id, [FromBody] Family family)
        {
            if (!ModelState.IsValid || family.FamilySize < 0 || family.FamilySize > 25)
            {
                return BadRequest(ModelState);
            }

            if (id != family.FamilyId)
            {
                return BadRequest();
            }

            _context.Entry(family).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FamilyExists(id))
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

        // POST: api/FamilieSet
        [HttpPost]
        public async Task<IActionResult> PostFamily([FromBody] Family family)
        {
            if (!ModelState.IsValid || family.FamilySize < 0 || family.FamilySize > 25)
            {
                return BadRequest(ModelState);
            }

            _context.FamilySet.Add(family);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFamily", new { id = family.FamilyId }, family);
        }

        // DELETE: api/FamilieSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFamily([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var family = await _context.FamilySet.SingleOrDefaultAsync(m => m.FamilyId == id);
            if (family == null)
            {
                return NotFound();
            }

            _context.FamilySet.Remove(family);
            await _context.SaveChangesAsync();

            return Ok(family);
        }

        private bool FamilyExists(int id)
        {
            return _context.FamilySet.Any(e => e.FamilyId == id);
        }
    }
}