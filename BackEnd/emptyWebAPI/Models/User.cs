using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeamGuenonWebApi.Models
{
    public class User
    {
        public Name Name { get; set; }
        public Address UserAddress { get; set; }


    }
}
