using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public class Centre
    {
        public Centre()
        {
            Address = new HashSet<Address>();
            Refugee = new HashSet<Refugee>();
        }

        [Key]
        public int CentreId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Languages { get; set; }
        public string PhoneNumber { get; set; }

        public ICollection<Address> Address { get; set; }
        public ICollection<Refugee> Refugee { get; set; }
    }
}
