using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TeamGuenonWebApi.Models
{
    public partial class TeamGuenonContext : DbContext
    {
        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<Centre> Centre { get; set; }
        public virtual DbSet<Documents> Documents { get; set; }
        public virtual DbSet<Email> Email { get; set; }
        public virtual DbSet<Family> Family { get; set; }
        public virtual DbSet<Phone> Phone { get; set; }
        public virtual DbSet<Refugee> Refugee { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.HasKey(e => e.AdressId);

                entity.Property(e => e.AddressFullName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ArrivedDate).HasColumnType("datetime");

                entity.Property(e => e.DepartDate).HasColumnType("datetime");

                entity.HasOne(d => d.Refugee)
                    .WithMany(p => p.Address)
                    .HasForeignKey(d => d.RefugeeId)
                    .HasConstraintName("FK_Address_Refugee");
            });

            modelBuilder.Entity<Centre>(entity =>
            {
                entity.Property(e => e.Email)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.FullAddressName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Languages)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumer)
                    .IsRequired()
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Documents>(entity =>
            {
                entity.HasKey(e => e.DocumentId);

                entity.Property(e => e.BinDoc).IsUnicode(false);

                entity.Property(e => e.TypeOfDoc)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Refugee)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.RefugeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Documents_Refugee");
            });

            modelBuilder.Entity<Email>(entity =>
            {
                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Refugee)
                    .WithMany(p => p.Email)
                    .HasForeignKey(d => d.RefugeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Email_Refugee");
            });

            modelBuilder.Entity<Phone>(entity =>
            {
                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Refugee)
                    .WithMany(p => p.Phone)
                    .HasForeignKey(d => d.RefugeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Phone_Refugee");
            });

            modelBuilder.Entity<Refugee>(entity =>
            {
                entity.Property(e => e.CityOfBirth)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ContryOfBirth)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBirth).HasColumnType("datetime");

                entity.Property(e => e.DateOfDeath).HasColumnType("datetime");

                entity.Property(e => e.FamilyStatus)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.Languages)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.SecondName)
                    .IsRequired()
                    .IsUnicode(false);

                entity.HasOne(d => d.Centre)
                    .WithMany(p => p.Refugee)
                    .HasForeignKey(d => d.CentreId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Refugee_Centre");
            });
        }
    }
}
