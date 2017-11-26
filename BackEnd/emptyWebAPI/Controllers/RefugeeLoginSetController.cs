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
    [Route("api/RefugeeLoginSet")]
    public class RefugeeLoginSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public RefugeeLoginSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/RefugeeLoginSet
        [HttpGet]
        public IEnumerable<RefugeeLogin> GetRefugeeLogin()
        {
            return _context.RefugeeLogin;
        }

        // GET: api/RefugeeLoginSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRefugeeLogin([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var refugeeLogin = await _context.RefugeeLogin.SingleOrDefaultAsync(m => m.Username == id);

            if (refugeeLogin == null)
            {
                return NotFound();
            }

            return Ok(refugeeLogin);
        }

        // PUT: api/RefugeeLoginSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRefugeeLogin([FromRoute] string id, [FromBody] RefugeeLogin refugeeLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != refugeeLogin.Username)
            {
                return BadRequest();
            }

            _context.Entry(refugeeLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefugeeLoginExists(id))
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

        // POST: api/RefugeeLoginSet
        [HttpPost]
        public IActionResult PostRefugeeLogin([FromBody] RefugeeLogin refugeeLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var maybe = _context.RefugeeLogin
                .SingleOrDefault(x => x.Username == refugeeLogin.Username && x.Password == refugeeLogin.Password);

            if (maybe == null)
            {
                return NotFound();
            }

            return Ok(maybe.RefugeeId);
        }

        // DELETE: api/RefugeeLoginSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugeeLogin([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var refugeeLogin = await _context.RefugeeLogin.SingleOrDefaultAsync(m => m.Username == id);
            if (refugeeLogin == null)
            {
                return NotFound();
            }

            _context.RefugeeLogin.Remove(refugeeLogin);
            await _context.SaveChangesAsync();

            return Ok(refugeeLogin);
        }

        private bool RefugeeLoginExists(string id)
        {
            return _context.RefugeeLogin.Any(e => e.Username == id);
        }
    }
}