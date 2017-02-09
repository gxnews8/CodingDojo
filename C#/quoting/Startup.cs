using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using MySQL.Data.EntityFrameworkCore.Extensions;

using QuotingDojoDemo.Models;

namespace QuotingDojoDemo
{
    public class Startup
    {
        //  This is nothing new. Just pulling in appsettings.json
        public IConfiguration Configuration {get; private set;}
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // Using dependency injection to make our context 
            // available as a service for our controller
            services.AddDbContext<QuoteContext>(options => options.UseMySQL(Configuration["DBInfo:ConnectionString"]));
            
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder App, ILoggerFactory LoggerFactory)
        {
            LoggerFactory.AddConsole();
            App.UseDeveloperExceptionPage();
            App.UseStaticFiles();

            App.UseMvc();
        }
    }
}