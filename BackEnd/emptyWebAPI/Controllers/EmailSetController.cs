﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/EmailSet")]
    public class EmailSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public EmailSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/EmailSet
        [HttpGet]
        public IEnumerable<Email> GetEmail()
        {
            return _context.Email;
        }

        // GET: api/EmailSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var email = await _context.Email.SingleOrDefaultAsync(m => m.EmailId == id);

            if (email == null)
            {
                return NotFound();
            }

            return Ok(email);
        }

        // PUT: api/EmailSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmail([FromRoute] int id, [FromBody] Email email)
        {
            bool valid = new EmailAddressAttribute().IsValid(email);
            if (!ModelState.IsValid || !valid || email == null)
            {
                return BadRequest(ModelState);
            }

            if (id != email.EmailId)
            {
                return BadRequest();
            }

            _context.Entry(email).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmailExists(id))
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

        // POST: api/EmailSet
        [HttpPost]
        public async Task<IActionResult> PostEmail([FromBody] Email email)
        {
            bool valid = new EmailAddressAttribute().IsValid(email);
            if (!ModelState.IsValid || !valid || email == null)
            {
                return BadRequest(ModelState);
            }

            _context.Email.Add(email);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmail", new { id = email.EmailId }, email);
        }

        // DELETE: api/EmailSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var email = await _context.Email.SingleOrDefaultAsync(m => m.EmailId == id);
            if (email == null)
            {
                return NotFound();
            }

            _context.Email.Remove(email);
            await _context.SaveChangesAsync();

            return Ok(email);
        }

        private bool EmailExists(int id)
        {
            return _context.Email.Any(e => e.EmailId == id);
        }
    }
}