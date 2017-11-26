using System;
using System.Collections.Generic;

namespace TeamGuenonWebApi.Models
{
    public partial class Documents
    {
        public int DocumentId { get; set; }
        public int RefugeeId { get; set; }
        public string BinDoc { get; set; }
        public string TypeOfDoc { get; set; }

        public Refugee Refugee { get; set; }
    }
}
