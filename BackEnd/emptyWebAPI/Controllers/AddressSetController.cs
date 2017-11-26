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
    [Route("api/AddressSet")]
    public class AddressSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public AddressSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/AddressSet
        [HttpGet]
        public IEnumerable<Address> GetAddress()
        {
            return _context.AddressSet;
        }

        // GET: api/AddressSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var address = await _context.AddressSet.SingleOrDefaultAsync(m => m.AdressId == id);

            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        // PUT: api/AddressSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAddress([FromRoute] int id, [FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != address.AdressId)
            {
                return BadRequest();
            }

            _context.Entry(address).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AddressExists(id))
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

        // POST: api/AddressSet
        [HttpPost]
        public async Task<IActionResult> PostAddress([FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            if (address.IsActive)
            {
                foreach (var item in _context.AddressSet)
                {
                    item.IsActive = false;
                }
            }

            _context.AddressSet.Add(address);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAddress", new { id = address.AdressId }, address);
        }

        // DELETE: api/AddressSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var address = await _context.AddressSet.SingleOrDefaultAsync(m => m.AdressId == id);
            if (address == null)
            {
                return NotFound();
            }

            _context.AddressSet.Remove(address);
            await _context.SaveChangesAsync();

            return Ok(address);
        }

        private bool AddressExists(int id)
        {
            return _context.AddressSet.Any(e => e.AdressId == id);
        }
    }
}