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

// This dictionary represents an in-memory store
Dictionary<string, string> SettingsStore = new Dictionary<string, string>();

// GET /settings - list all
app.MapGet("/settings", () =>
{
    // Convert dictionary to a list of Setting objects
    var allSettings = SettingsStore.Select(kvp => new Backend.Models.Setting
    {
        Key = kvp.Key,
        Value = kvp.Value
    }).ToList();

    return Results.Ok(allSettings);
});

// GET /settings/{key} - fetch one by key
app.MapGet("/settings/{key}", (string key) =>
{
    if (SettingsStore.TryGetValue(key, out var val))
    {
        return Results.Ok(new Backend.Models.Setting { Key = key, Value = val });
    }
    return Results.NotFound();
});

// POST /settings - create/update a setting
app.MapPost("/settings", (Backend.Models.Setting newSetting) =>
{
    SettingsStore[newSetting.Key] = newSetting.Value; // Upsert
    return Results.Ok(newSetting);
});

// DELETE /settings/{key} - remove a setting
app.MapDelete("/settings/{key}", (string key) =>
{
    SettingsStore.Remove(key);
    return Results.NoContent();
});

app.Run();
