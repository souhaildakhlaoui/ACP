var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()    // Allow any origin (this is key for Angular to communicate with your API)
               .AllowAnyMethod()    // Allow any HTTP method (GET, POST, PUT, DELETE, etc.)
               .AllowAnyHeader();   // Allow any headers
    });
});

var app = builder.Build();

// Apply the CORS policy globally
app.UseCors("AllowAllOrigins");

// Map your "Hello World" endpoint
app.MapGet("/hello", () => "Hello World from ConfigurationService!");

// Run the application
app.Run();
