using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Email
    {
        [Key]
        public int EmailId { get; set; }
        public int RefugeeId { get; set; }
        public string EmailAddress { get; set; }
        public bool IsActive { get; set; }

        public Refugee Refugee { get; set; }
    }
}
