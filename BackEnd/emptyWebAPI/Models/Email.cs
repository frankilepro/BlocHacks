using System;
using System.Collections.Generic;

namespace TeamGuenonWebApi.Models
{
    public partial class Email
    {
        public int EmailId { get; set; }
        public int RefugeeId { get; set; }
        public string Email1 { get; set; }
        public bool IsActive { get; set; }

        public Refugee Refugee { get; set; }
    }
}
