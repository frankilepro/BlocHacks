using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using TeamGuenonWebApi.Models;

namespace TeamGuenonWebApi
{
    public class Startup
    {
        const string SITE_URL = @"http://teamguenonwebapi.azurewebsites.net";
        const string LOCAL_URL = @"http://localhost:59118";

        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddCors();
            services.AddDbContext<TeamGuenonContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder.WithOrigins(SITE_URL, LOCAL_URL)
                    .AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowCredentials());
            });
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowSpecificOrigin"));
            });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseSecurityHeadersMiddleware(new SecurityHeadersBuilder()
            //    .AddDefaultSecurePolicy()
            //    .AddCustomHeader("Access-Control-Allow-Origin", "http://localhost:3000")
            //    .AddCustomHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE")
            //    .AddCustomHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization"));

            //app.UseCors(options => options.WithOrigins(SITE_URL, "http://localhost:59118")
            //                              .AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin().AllowCredentials());
            app.UseCors("AllowSpecificOrigin");
            app.UseMvc();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("T nulle mon go!");
            });
        }
    }
}
