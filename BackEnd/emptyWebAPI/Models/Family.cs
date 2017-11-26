using System;
using System.Collections.Generic;

namespace TeamGuenonWebApi.Models
{
    public partial class Family
    {
        public Family()
        {
            Refugee = new HashSet<Refugee>();
        }

        public int FamilyId { get; set; }
        public int FamilySize { get; set; }

        public ICollection<Refugee> Refugee { get; set; }
    }
}
