using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Centre
    {
        public Centre()
        {
            Refugee = new HashSet<Refugee>();
        }

        [Key]
        public int CentreId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Languages { get; set; }
        public string PhoneNumer { get; set; }
        public string FullAddressName { get; set; }
        public double Longitute { get; set; }
        public double Lattitude { get; set; }

        public ICollection<Refugee> Refugee { get; set; }
    }
}
