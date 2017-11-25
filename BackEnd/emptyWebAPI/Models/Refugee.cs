using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Models
{
    public class Refugee
    {
        [Key]
        public int RefugeeId { get; set; }
        [Key]
        public int NameId { get; set; }
        [Key]
        public int AddressId { get; set; }
    }
}
