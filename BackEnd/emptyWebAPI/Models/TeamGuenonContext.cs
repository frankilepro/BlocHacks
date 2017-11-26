using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TeamGuenonWebApi.Models
{
    public class TeamGuenonContext : DbContext
    {
        public virtual DbSet<Address> AddressSet { get; set; }
        public virtual DbSet<Centre> CentreSet { get; set; }
        public virtual DbSet<Documents> DocumentSet { get; set; }
        public virtual DbSet<Email> EmailSet { get; set; }
        public virtual DbSet<Family> FamilySet { get; set; }
        public virtual DbSet<Phone> PhoneSet { get; set; }
        public virtual DbSet<Refugee> RefugeeSet { get; set; }

        public TeamGuenonContext(DbContextOptions<TeamGuenonContext> options) : base(options)
        { }
    }
}
