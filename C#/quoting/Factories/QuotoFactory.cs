using System.Collections.Generic;
using System.Data;
using Dapper;
using MySql.Data.MySqlClient;
using QuotingDojoDemo.Models;

namespace QuotingDojoDemo.Factories
{
    public class QuoteFactory : IFactory<Quote>
    {
        private string connectionString;
        public QuoteFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=8889;database=QuotingDojoDemo;SslMode=None";
        }

        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }

        public void Add(Quote Item)
        {
            using(IDbConnection dbConnection = Connection)
            {
                string Query = "INSERT into quotes (QuoterName, QuoteContent, CreatedAt, UpdatedAt) VALUES (@QuoterName, @QuoteContent, NOW(), NOW())";
                dbConnection.Open();
                dbConnection.Execute(Query, Item);
            }
        }

        public IEnumerable<Quote> FindAll()
        {
            using(IDbConnection dbConnection = Connection)
            {
                string Query = "SELECT * From quotes";
                dbConnection.Open();
                return dbConnection.Query<Quote>(Query);
            }
        }
    }
}