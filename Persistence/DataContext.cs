using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                .HasData(
                    new Value {Id = 1, Name = "John"},
                    new Value {Id = 2, Name = "Johnny"},
                    new Value {Id = 3, Name = "Johnnnyy"},
                    new Value {Id = 4, Name = "Johnnnnny"}
                );
        }
    }
}
