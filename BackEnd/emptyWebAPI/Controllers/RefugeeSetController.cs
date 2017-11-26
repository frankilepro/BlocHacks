﻿using System;
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
    [Route("api/RefugeeSet")]
    public class RefugeeSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public RefugeeSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/RefugeeSet
        [HttpGet]
        public IEnumerable<Refugee> GetRefugee()
        {
            return _context.RefugeeSet;
        }

        // GET: api/RefugeeSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRefugee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var refugee = await _context.RefugeeSet.SingleOrDefaultAsync(m => m.RefugeeId == id);

            if (refugee == null)
            {
                return NotFound();
            }

            return Ok(refugee);
        }

        // PUT: api/RefugeeSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRefugee([FromRoute] int id, [FromBody] Refugee refugee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != refugee.RefugeeId)
            {
                return BadRequest();
            }

            _context.Entry(refugee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefugeeExists(id))
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

        // POST: api/RefugeeSet
        [HttpPost]
        public async Task<IActionResult> PostRefugee([FromBody] Refugee refugee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.RefugeeSet.Add(refugee);
            
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRefugee", new { id = refugee.RefugeeId }, refugee);
        }

        // DELETE: api/RefugeeSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var refugee = await _context.RefugeeSet.SingleOrDefaultAsync(m => m.RefugeeId == id);
            if (refugee == null)
            {
                return NotFound();
            }

            _context.RefugeeSet.Remove(refugee);
            await _context.SaveChangesAsync();

            return Ok(refugee);
        }

        private bool RefugeeExists(int id)
        {
            return _context.RefugeeSet.Any(e => e.RefugeeId == id);
        }
    }
}