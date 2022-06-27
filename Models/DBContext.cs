using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TicketingSystem.Models;
public class DBContext : DbContext
{
    private readonly IConfiguration _configuration;
    private readonly string connectionString;
    public DbSet<Comments> Comments { get; set; }
    public DbSet<KnowledgeArticles> KnowledgeArticles { get; set; }
    public DbSet<Permissions> Permissions { get; set; }
    public DbSet<ProblemTicket> ProblemTickets { get; set; }
    public DbSet<Queue> Queues { get; set; }
    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<Users> Users { get; set; }

    public DBContext(IConfiguration configuration) 
    {
        _configuration = configuration;
        connectionString = _configuration.GetConnectionString("TicketingSystemConnection");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder) 
    {
        modelBuilder.Entity<Users>().HasMany(u => u.Permissions).WithMany(p => p.Users);
        modelBuilder.Entity<Queue>().HasMany(q => q.Permissions).WithMany(p => p.Queues);
        modelBuilder.Entity<Ticket>().HasMany(t => t.KnowledgeArticles).WithMany(k => k.Tickets);
        modelBuilder.Entity<Ticket>().HasOne(t => t.Users);
    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
    {
        optionsBuilder.UseSqlServer(connectionString);
    }
}