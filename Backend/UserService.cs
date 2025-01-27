using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;
using Backend.Models;
namespace Backend;

public class UserService
{
    //Add certain funtionalities users and admins will have 
    private readonly IMongoCollection<User> _users;

    public UserService(IMongoClient client, IOptions<MongoDBSettings> settings)
    {
        var database = client.GetDatabase(settings.Value.DatabaseName);
        _users = database.GetCollection<User>("Users");
    }

    public async Task<List<User>> GetUsersAsync() =>
        await _users.Find(_ => true).ToListAsync();

    public async Task CreateUserAsync(User user) =>
        await _users.InsertOneAsync(user);
    
}
