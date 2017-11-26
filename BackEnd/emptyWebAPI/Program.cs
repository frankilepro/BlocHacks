using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using TeamGuenonWebApi.Models;

namespace TeamGuenonWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    //var context = services.GetRequiredService<TeamGuenonContext>();
                    //foreach (var item in context.Centre)
                    //{
                    //    try
                    //    {
                    //        context.CentreLogin.Add(new CentreLogin
                    //        {
                    //            Username = item.CentreId.ToString(),
                    //            Password = item.CentreId.ToString(),
                    //            CentreId = item.CentreId
                    //        });
                    //    }
                    //    catch (Exception ex)
                    //    {

                    //    }
                    //}
                    //context.SaveChanges();
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }

            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
