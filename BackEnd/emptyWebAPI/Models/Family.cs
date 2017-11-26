using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Family
    {
        [Key]
        public int FamilyId { get; set; }
        public int FamilySize { get; set; }
    }
}
