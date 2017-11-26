﻿using System;
using System.Collections.Generic;

namespace TeamGuenonWebApi.Models
{
    public partial class Centre
    {
        public Centre()
        {
            Address = new HashSet<Address>();
            Refugee = new HashSet<Refugee>();
        }

        public int CentreId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Languages { get; set; }
        public string PhoneNumer { get; set; }

        public ICollection<Address> Address { get; set; }
        public ICollection<Refugee> Refugee { get; set; }
    }
}