using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public class Address
    {
        [Key]
        public int AdressId { get; set; }
        public int? CentreId { get; set; }
        public int? RefugeeId { get; set; }
        public int Number { get; set; }
        public int? Appartment { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public double Longitude { get; set; }
        public double Lattitude { get; set; }
        public bool IsActive { get; set; }
        public DateTime? ArrivedDate { get; set; }
        public DateTime? DepartDate { get; set; }

        public Centre Centre { get; set; }
        public Refugee Refugee { get; set; }
    }
}
