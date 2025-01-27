using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]

// Not complete just setup the inital user functionalities for testing 
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost("signup")]
    public async Task<IActionResult> Signup([FromBody] User user)
    {
        await _userService.CreateUserAsync(user);
        return Ok(new { Message = "User created successfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] User loginUser)
    {
        var users = await _userService.GetUsersAsync();
        var user = users.FirstOrDefault(u =>
            u.Username == loginUser.Username && u.Password == loginUser.Password);

        if (user == null)
        {
            return Unauthorized(new { Message = "Invalid credentials" });
        }

        return Ok(new { Message = "Login successful" });
    }

    [HttpGet("user")]
    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userService.GetUsersAsync();
        if (users == null || users.Count == 0)
            return NoContent(); // Return 204 if no users found

        return Ok(users); // Return 200 with all users
    }
}
