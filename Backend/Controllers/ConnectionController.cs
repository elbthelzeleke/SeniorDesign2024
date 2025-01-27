using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // Checks to see if the connection with DB is established
    public class ConnectionController : ControllerBase
    {
        private readonly IMongoClient _mongoClient;

        public ConnectionController(IMongoClient mongoClient)
        {
            _mongoClient = mongoClient;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // list database names 
                var databaseNames = _mongoClient.ListDatabaseNames().ToList();
                return Ok(new
                {
                    message = "MongoDB connection is successful.",
                    databases = databaseNames
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Failed to connect to MongoDB.",
                    error = ex.Message
                });
            }
        }
    }
}
