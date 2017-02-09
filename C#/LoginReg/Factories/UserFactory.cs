using System;
using System.Collections.Generic;
using System.Data;
using loginreg.Models;
using loginreg.ViewModels;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Identity;
using System.Linq; 
using Dapper;
using Microsoft.Extensions.Options;

namespace loginreg.Factories {
    
    public class UserFactory : IFactory<User>
    {
        private readonly IOptions<MySqlOptions> config;
        public UserFactory(IOptions<MySqlOptions> conf) {
            config = conf;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(config.Value.ConnectionString);
            }
        } 
        public User Add(RegisterViewModel model) {
            if(FindByEmail(model.email) == null) {
                PasswordHasher<RegisterViewModel> hash = new PasswordHasher<RegisterViewModel>();
                User user = new User {
                    name = model.name,
                    email = model.email,
                    password = hash.HashPassword(model, model.password)
                };
                using (IDbConnection dbConnection = Connection) {
                    string query = "INSERT INTO users (name, email, password, created_at) VALUES (@name, @email, @password, NOW())";
                    dbConnection.Open();
                    dbConnection.Execute(query, user);
                }
                return user;
            }
            return null;
        }

        public List<User> FindAll()
        {
            using(IDbConnection dbConnection = Connection) {
                string query = "SELECT * FROM users";
                dbConnection.Open();
                return dbConnection.Query<User>(query).ToList();
            }
        }

        public User FindByEmail(string email){
            using(IDbConnection dbConnection = Connection){
                string query = "SElECT * FROM users WHERE email = @email";
                dbConnection.Open();
                return dbConnection.Query<User>(query, new {email = email}).SingleOrDefault();
            }
        }
    }
}