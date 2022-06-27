using System;
using System.Collections.Generic;
using System.Linq;
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
}
