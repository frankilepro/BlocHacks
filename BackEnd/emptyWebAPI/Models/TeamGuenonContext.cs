using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TeamGuenonWebApi.Models
{
    public class TeamGuenonContext : DbContext
    {
        public TeamGuenonContext(DbContextOptions<TeamGuenonContext> options) : base(options)
        { }

        public virtual DbSet<Todo> Todos { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer(@"Server=tcp:teamguenonserver.database.windows.net,1433;Initial Catalog=TeamGuenonDB;Persist Security Info=False;User ID=frankilepro;Password=grosloup@654321;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
//            }
//        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Todo>(entity =>
        //    {
        //        entity.Property(e => e.Name)
        //            .IsRequired()
        //            .IsUnicode(false);
        //    });
        //}
    }
}
