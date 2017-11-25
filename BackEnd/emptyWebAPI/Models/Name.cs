using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Models
{
    public class Name
    {
        [Key]
        public int NameId { get; set; }
        public string Family { get; set; }
        public string First { get; set; }
    }
}
