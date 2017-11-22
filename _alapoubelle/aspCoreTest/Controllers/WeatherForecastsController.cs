using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using aspCoreTest.Models;

namespace aspCoreTest.Controllers
{
    [Produces("application/json")]
    [Route("api/WeatherForecasts")]
    public class WeatherForecastsController : Controller
    {
        private readonly WeatherForecastContext _context;

        public WeatherForecastsController(WeatherForecastContext context)
        {
            _context = context;
        }

        // GET: api/WeatherForecasts
        [HttpGet]
        public IEnumerable<WeatherForecast> GetWeatherForecastSet()
        {
            return _context.WeatherForecastSet.OrderBy(x => x.DateFormatted).ThenBy(x => x.Summary);
        }

        // GET: api/WeatherForecasts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWeatherForecast([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var weatherForecast = await _context.WeatherForecastSet.SingleOrDefaultAsync(m => m.Id == id);

            if (weatherForecast == null)
            {
                return NotFound();
            }

            return Ok(weatherForecast);
        }

        // PUT: api/WeatherForecasts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWeatherForecast([FromRoute] int id, [FromBody] WeatherForecast weatherForecast)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != weatherForecast.Id)
            {
                return BadRequest();
            }

            _context.Entry(weatherForecast).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WeatherForecastExists(id))
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

        // POST: api/WeatherForecasts
        [HttpPost]
        public async Task<IActionResult> PostWeatherForecast([FromBody] WeatherForecast weatherForecast)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WeatherForecastSet.Add(weatherForecast);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWeatherForecast", new { id = weatherForecast.Id }, weatherForecast);
        }

        // DELETE: api/WeatherForecasts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWeatherForecast([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var weatherForecast = await _context.WeatherForecastSet.SingleOrDefaultAsync(m => m.Id == id);
            if (weatherForecast == null)
            {
                return NotFound();
            }

            _context.WeatherForecastSet.Remove(weatherForecast);
            await _context.SaveChangesAsync();

            return Ok(weatherForecast);
        }

        private bool WeatherForecastExists(int id)
        {
            return _context.WeatherForecastSet.Any(e => e.Id == id);
        }
    }
}