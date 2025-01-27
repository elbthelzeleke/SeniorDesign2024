using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Backend;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container to establish DB connection and usage
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
    new MongoClient(sp.GetRequiredService<IOptions<MongoDBSettings>>().Value.ConnectionString));
builder.Services.AddSingleton<UserService>();

builder.Services.AddControllers();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

//app.UseHttpsRedirection();
app.UseAuthorization();
app.MapGet("/", () => "API is up and running!"); //added this for testing initial api calls
app.MapControllers();

app.Run();
