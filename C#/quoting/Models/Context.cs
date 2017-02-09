using Microsoft.EntityFrameworkCore;
using MySQL.Data.EntityFrameworkCore.Extensions;

namespace QuotingDojoDemo.Models
{

    // context file is what actually forms the relationship between our models and the database
    public class QuoteContext : DbContext
    {
        //Our Constructor just passed the options to the DbContext Constructor
        public QuoteContext(DbContextOptions<QuoteContext> options) : base(options){ }

        // Create a DbSet for each table in your database
        // Names do have to match database table names altough case insensitive
        public DbSet<Quote> Quotes { get; set; }
    }
}