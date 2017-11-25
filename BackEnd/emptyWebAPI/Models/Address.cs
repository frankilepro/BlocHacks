using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }

        public int Number { get; set; }
        public int Appartment { get; set; }
        public string Street { get; set; }
        public string Postal { get; set; }
        public string Type { get; set; } //Street, avenue, etc.

    }
}
