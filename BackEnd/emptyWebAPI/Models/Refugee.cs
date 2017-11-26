using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TeamGuenonWebApi.Models
{
    public partial class Refugee
    {
        public Refugee()
        {
            Address = new HashSet<Address>();
            Documents = new HashSet<Documents>();
            Email = new HashSet<Email>();
            Phone = new HashSet<Phone>();
        }

        [Key]
        public int RefugeeId { get; set; }
        public int CentreId { get; set; }
        public int FamilyId { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Languages { get; set; }
        public string ContryOfBirth { get; set; }
        public string CityOfBirth { get; set; }
        public string FamilyStatus { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime? DateOfDeath { get; set; }

        public IEnumerable<Address> Address { get; set; }
        public ICollection<Documents> Documents { get; set; }
        public ICollection<Email> Email { get; set; }
        public ICollection<Phone> Phone { get; set; }
    }
}
