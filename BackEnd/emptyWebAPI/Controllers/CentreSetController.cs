﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeamGuenonWebApi.Models;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using GoogleMaps.LocationServices;

namespace TeamGuenonWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/CentreSet")]
    public class CentreSetController : Controller
    {
        private readonly TeamGuenonContext _context;

        public CentreSetController(TeamGuenonContext context)
        {
            _context = context;
        }

        // GET: api/CentreSet
        [HttpGet]
        public IEnumerable<Centre> GetCentre()
        {
            return _context.Centre;
        }

        // GET: api/CentreSet/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCentre([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centre = await _context.Centre.SingleOrDefaultAsync(m => m.CentreId == id);

            if (centre == null)
            {
                return NotFound();
            }

            return Ok(centre);
        }

        private double Oli(double longitude, double longitute, double lattitude1, double lattitude2)
        {
            throw new NotImplementedException();
            return 0.0;
        }

        // PUT: api/CentreSet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCentre([FromRoute] int id, [FromBody] Centre centre)
        {
            bool valid = new EmailAddressAttribute().IsValid(centre.Email);

            if (!ModelState.IsValid || !valid || centre.Email == null 
                || centre.PhoneNumer.Count(x => char.IsNumber(x)) > 15)
            {
                return BadRequest(ModelState);
            }
            if (id != centre.CentreId)
            {
                return BadRequest();
            }

            var locationService = new GoogleLocationService();
            var point = locationService.GetLatLongFromAddress(centre.FullAddressName);

            centre.Lattitude = point.Latitude;
            centre.Longitute = point.Longitude;

            _context.Entry(centre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CentreExists(id))
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

        // POST: api/CentreSet
        [HttpPost]
        public async Task<IActionResult> PostCentre([FromBody] Centre centre)
        {
            bool valid = new EmailAddressAttribute().IsValid(centre.Email);
            if (!ModelState.IsValid || !valid || centre.Email == null
                || centre.PhoneNumer.Count(x => char.IsNumber(x)) > 15)
            {
                return BadRequest(ModelState);
            }
            var locationService = new GoogleLocationService();
            var point = locationService.GetLatLongFromAddress(centre.FullAddressName);

            centre.Lattitude = point.Latitude;
            centre.Longitute = point.Longitude;

            _context.Centre.Add(centre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCentre", new { id = centre.CentreId }, centre);
        }

        // DELETE: api/CentreSet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCentre([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centre = await _context.Centre.SingleOrDefaultAsync(m => m.CentreId == id);
            if (centre == null)
            {
                return NotFound();
            }

            _context.Centre.Remove(centre);
            await _context.SaveChangesAsync();

            return Ok(centre);
        }

        private bool CentreExists(int id)
        {
            return _context.Centre.Any(e => e.CentreId == id);
        }
    }
}