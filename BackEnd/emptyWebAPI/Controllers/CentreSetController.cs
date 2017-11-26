using System;
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

            centre.Refugee = _context.Refugee.Where(x => x.CentreId == centre.CentreId).ToList();
       
            return Ok(centre);
        }

        // GET: api/CentreSet/closest/5
        [HttpGet("closest/{RefugeeId}")]
        public IEnumerable<Centre> GetClosestCentres([FromRoute] int refugeeId)
        {
            var address = _context.Address.SingleOrDefault(x => x.RefugeeId == refugeeId);
            return _context.Centre.OrderBy(x => CalculateDistance(address.Longitude, x.Longitute, address.Lattitude, x.Lattitude)).Take(3);
        }

        // PUT: api/CentreSet/5
        [HttpPut("{id}")]
        public IActionResult PutCentre([FromRoute] int id, [FromBody] Centre centre)
        {
            return BadRequest("Not implemented");
        }

        // POST: api/CentreSet
        [HttpPost]
        public async Task<IActionResult> PostCentre([FromBody] Centre centre)
        {
            if (_context.Centre.Any(x => x.CentreId == centre.CentreId))
            {
                _context.Centre.Update(centre);
            }
            else
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
            }
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
        private double CalculateDistance(double lon1, double lon2, double lat1, double lat2)
        {
            const double EARTH_RADIUS = 6371; //KM
            double dlon = lon2 - lon1;
            double dlat = lat2 - lat1;
            double a = Math.Pow((Math.Sin(dlat / 2)),2) + Math.Cos(lat1) * Math.Cos(lat2) * Math.Pow((Math.Sin(dlon / 2)),2);
            double c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            return EARTH_RADIUS * c;
        }
    }
}