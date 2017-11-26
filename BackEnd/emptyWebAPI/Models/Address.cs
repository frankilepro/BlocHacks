using System;
using System.Collections.Generic;

namespace TeamGuenonWebApi.Models
{
    public partial class Address
    {
        public int AdressId { get; set; }
        public int? RefugeeId { get; set; }
        public string AddressFullName { get; set; }
        public double Longitude { get; set; }
        public double Lattitude { get; set; }
        public bool IsActive { get; set; }
        public DateTime? ArrivedDate { get; set; }
        public DateTime? DepartDate { get; set; }

        public Refugee Refugee { get; set; }
    }
}
