using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TicketingSystem.Models;

namespace TicketingSystem.Controllers;

public class TicketController: BaseApiContoller
{
    private readonly DBContext _context;
    public TicketController(DBContext context) 
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<List<Ticket>>> CreateNewTicket(Ticket newTicket)
    {
        
        _context.Tickets.Add(new ()
        {
            Title = newTicket.Title,
            Description = newTicket.Description,
            Priority = newTicket.Priority,
            CreatedDate = DateTime.Now,
            IsOpen = true,
            Status = "Open",
        });

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpGet("GetAllTickets")]
    public async Task<ActionResult<List<Ticket>>> GetAllTickets()
    {
        return _context.Tickets.ToList();
    }
}
