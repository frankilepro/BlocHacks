using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public class Family
    {
        public Family()
        {
            Refugee = new HashSet<Refugee>();
        }

        [Key]
        public int FamilyId { get; set; }
        public int FamilySize { get; set; }

        public ICollection<Refugee> Refugee { get; set; }
    }
}
