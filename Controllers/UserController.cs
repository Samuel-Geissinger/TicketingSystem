using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TicketingSystem.Models;

namespace TicketingSystem.Controllers;

public class UserController: BaseApiContoller
{
    private readonly DBContext _context;
    public UserController(DBContext context) 
    {
        _context = context;
    }
    
    [HttpGet("GetAllUsers")]
    public async Task<ActionResult<List<Users>>> GetAllUsers(bool? active)
    {
        IQueryable<Users> users = _context.Users.AsQueryable();
        if (active.HasValue)
        {
            users = _context.Users.Where(u => u.IsActive == active);
        }

        return users.OrderBy(u => u.LastName).ThenBy(u => u.FirstName).ToList();
    }

    [HttpPut("Login")]
    public async Task<OkObjectResult> Login([FromBody] Login userCreds) {
        var user = _context.Users.FirstOrDefault(u => u.Email == userCreds.Email);
        var success = user?.Password == userCreds.Password;
        var userInfo = new {id  = user?.Id, firstname = user?.FirstName, lastname = user?.LastName, success = success};
        return new OkObjectResult(userInfo);
    }

    // public async Task CheckPassword(string password, string email) 
    // {
    //     var plainTextPassword = password + email;

    //     using (SHA512 sha512Hash = SHA512.Create())
    //     {
    //         var hashBytes = sha512Hash.ComputeHash(Encoding.UTF8.GetBytes(plainTextPassword));
    //         var hash = BitConverter.ToString(hashBytes).Replace("-", String.Empty);
    //     }

    // }
}
