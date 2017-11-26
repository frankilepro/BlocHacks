﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Phone
    {
        [Key]
        public int PhoneId { get; set; }
        public int RefugeeId { get; set; }
        public string PhoneNumber { get; set; }
        public string Type { get; set; }
        public bool IsActive { get; set; }

        //public Refugee Refugee { get; set; }
    }
}
