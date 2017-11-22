using System;

namespace aspCoreTest.Models
{
    public class WeatherForecast
    {
        public int Id { get; set; }

        private string _dateFormatted;
        public string DateFormatted
        {
            get
            {
                return _dateFormatted;
            }
            private set
            {
                _dateFormatted = value;
            }
        }

        public int TemperatureC { get; set; }

        public string Summary { get; set; }

        public int TemperatureF
        {
            get
            {
                return 32 + (int)(TemperatureC / 0.5556);
            }
        }

        public WeatherForecast()
        {
            _dateFormatted = DateTime.Now.ToString();
        }
    }
}
