﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;
using System.Text.RegularExpressions;

namespace TeamGuenonWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/PhoneSet")]
    public class PhoneSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public PhoneSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/PhoneSet
        [HttpGet]
        public IEnumerable<Phone> GetPhone()
        {
            return _context.Phone;
        }

        // GET: api/PhoneSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPhone([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var phone = await _context.Phone.SingleOrDefaultAsync(m => m.PhoneId == id);

            if (phone == null)
            {
                return NotFound();
            }

            return Ok(phone);
        }

        // PUT: api/PhoneSet/5
        [HttpPut("{id}")]
        public IActionResult PutPhone([FromRoute] int id, [FromBody] Phone phone)
        {
            return BadRequest("Not implemented");
        }

        // POST: api/PhoneSet
        [HttpPost]
        public async Task<IActionResult> PostPhone([FromBody] Phone phone)
        {
            if (!ModelState.IsValid || phone.PhoneNumber.Count(x => char.IsNumber(x)) > 15)
            {
                return BadRequest(ModelState);
            }

            if (_context.Phone.Any(x => x.PhoneId == phone.PhoneId))
            {
                _context.Phone.Update(phone);
            }
            else
            {
                _context.Phone.Add(phone);
            }


   
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhone", new { id = phone.PhoneId }, phone);
        }

        // DELETE: api/PhoneSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhone([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var phone = await _context.Phone.SingleOrDefaultAsync(m => m.PhoneId == id);
            if (phone == null)
            {
                return NotFound();
            }

            _context.Phone.Remove(phone);
            await _context.SaveChangesAsync();

            return Ok(phone);
        }

        private bool PhoneExists(int id)
        {
            return _context.Phone.Any(e => e.PhoneId == id);
        }
    }
}