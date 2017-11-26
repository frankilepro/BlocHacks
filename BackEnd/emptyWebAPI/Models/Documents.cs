using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Documents
    {
        [Key]
        public int DocumentId { get; set; }
        public int RefugeeId { get; set; }
        public string BinDoc { get; set; }
        public string TypeOfDoc { get; set; }

        //public Refugee Refugee { get; set; }
    }
}
