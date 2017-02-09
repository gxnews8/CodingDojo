using Nancy;
using Nancy.Configuration;
namespace ConsoleApplication
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        public override void Configure(INancyEnvironment environment)
        {
            environment.Tracing(enabled: false, displayErrorTraces: true);
        }
    }
}