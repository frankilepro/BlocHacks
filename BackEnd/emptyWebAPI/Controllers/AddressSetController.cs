﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;
using GoogleMaps.LocationServices;

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
            return _context.Address;
        }

        // GET: api/AddressSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAddress([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var address = await _context.Address.SingleOrDefaultAsync(m => m.AdressId == id);

            if (address == null)
            {
                return NotFound();
            }

            return Ok(address);
        }

        // PUT: api/AddressSet/5
        [HttpPut("{id}")]
        public IActionResult PutAddress([FromRoute] int id, [FromBody] Address address)
        {
            return BadRequest("Not implemented");
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
                await _context.Address.ForEachAsync(x => x.IsActive = true);
            }
            var locationService = new GoogleLocationService();
            var point = locationService.GetLatLongFromAddress(address.AddressFullName);

            address.Lattitude = point.Latitude;
            address.Longitude = point.Longitude;

            if (_context.Address.Any(x => x.AdressId == address.AdressId))
                _context.Address.Update(address);
            else
                _context.Address.Add(address);
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

            var address = await _context.Address.SingleOrDefaultAsync(m => m.AdressId == id);
            if (address == null)
            {
                return NotFound();
            }

            _context.Address.Remove(address);
            await _context.SaveChangesAsync();

            return Ok(address);
        }

        private bool AddressExists(int id)
        {
            return _context.Address.Any(e => e.AdressId == id);
        }
    }
}