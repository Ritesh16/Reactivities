using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Reactivities.API.Middleware;
using Reactivities.Application.Activities.Queries;
using Reactivities.Application.Activities.Validators;
using Reactivities.Application.Core;
using Reactivities.Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options => {
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));  
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

builder.Services.AddCors();
builder.Services.AddMediatR(x=>
{
    x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>();
    x.AddOpenBehavior(typeof(ValidationBehavior<,>));   
});

builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
builder.Services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();
builder.Services.AddTransient<ExceptionMiddleware>();

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

app.UseCors(x=> x.AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("http://localhost:3000", "https://localhost:3000"));

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}

app.Run();
