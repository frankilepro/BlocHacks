using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TeamGuenonWebApi.Models
{
    public class TeamGuenonContext : DbContext
    {
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Centre> Centre { get; set; }
        public virtual DbSet<Documents> Documents { get; set; }
        public virtual DbSet<Email> Email { get; set; }
        public virtual DbSet<Family> Family { get; set; }
        public virtual DbSet<Phone> Phone { get; set; }
        public virtual DbSet<Refugee> Refugee { get; set; }

        public TeamGuenonContext(DbContextOptions<TeamGuenonContext> options) : base(options)
        { }
    }
}
