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
    [Route("api/CentreLoginSet")]
    public class CentreLoginSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public CentreLoginSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/CentreLoginSet
        [HttpGet]
        public IEnumerable<CentreLogin> GetCentreLogin()
        {
            return _context.CentreLogin;
        }

        // GET: api/CentreLoginSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCentreLogin([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreLogin = await _context.CentreLogin.SingleOrDefaultAsync(m => m.Username == id);

            if (centreLogin == null)
            {
                return NotFound();
            }

            return Ok(centreLogin);
        }

        // PUT: api/CentreLoginSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCentreLogin([FromRoute] string id, [FromBody] CentreLogin centreLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != centreLogin.Username)
            {
                return BadRequest();
            }

            _context.Entry(centreLogin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CentreLoginExists(id))
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

        // POST: api/CentreLoginSet
        [HttpPost]
        public IActionResult PostCentreLogin([FromBody] CentreLogin centreLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var maybe = _context.CentreLogin
                .SingleOrDefault(x => x.Username == centreLogin.Username && x.Password == centreLogin.Password);

            if (maybe == null)
            {
                return NotFound();
            }

            return Ok(maybe.CentreId);
        }

        // DELETE: api/CentreLoginSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCentreLogin([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreLogin = await _context.CentreLogin.SingleOrDefaultAsync(m => m.Username == id);
            if (centreLogin == null)
            {
                return NotFound();
            }

            _context.CentreLogin.Remove(centreLogin);
            await _context.SaveChangesAsync();

            return Ok(centreLogin);
        }

        private bool CentreLoginExists(string id)
        {
            return _context.CentreLogin.Any(e => e.Username == id);
        }
    }
}