using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Models
{
    public class RefugeeLogin
    {
        [Key, Column(Order = 0)]
        public string Username { get; set; }
        [Key, Column(Order = 1)]
        public string Password { get; set; }
        public int RefugeeId { get; set; }
    }
}
