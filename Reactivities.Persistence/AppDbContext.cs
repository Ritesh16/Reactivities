using Reactivities.Domain;
using Microsoft.EntityFrameworkCore;

namespace Reactivities.Persistence;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }
}
