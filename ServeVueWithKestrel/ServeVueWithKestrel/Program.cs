using Microsoft.AspNetCore.SpaServices;
using VueCliMiddleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.MapToVueCliProxy(
        "{*path}",
        new SpaOptions
        {
            SourcePath = "../../vue-frontend"
        },
        npmScript: "watch",
        regex: "Compiled successfully",
        forceKill: true
    );

    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
