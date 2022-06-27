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

    [HttpGet("GetTicket")]
    public async Task<ActionResult<Ticket>> GetTicket(string ticketId)
    {
        Ticket ticket = new();
        
        if (int.TryParse(ticketId, out int ticketIdInt) && ticketIdInt > 0)
        {
            ticket = _context.Tickets.FirstOrDefault(t => t.Id == ticketIdInt);
        }

        return ticket;
    }

    [HttpPost("Edit")]
    public async Task<ActionResult<List<Ticket>>> SaveTicket(Ticket ticket)
    {
        var tempTicket = _context.Tickets.FirstOrDefault(t => t.Id == ticket.Id);
        if (tempTicket == null)
        {
            tempTicket = new Ticket();
            _context.Tickets.Add(tempTicket);
        } 
        tempTicket.Title = ticket.Title;
        tempTicket.Description = ticket.Description;
        tempTicket.IsOpen = ticket.IsOpen;
        tempTicket.QueueId = ticket.QueueId;
        tempTicket.UsersId = ticket.UsersId;
        tempTicket.Status = ticket.Status;
        tempTicket.Priority = ticket.Priority;

        if (tempTicket.Status == "Closed")
        {
            tempTicket.IsOpen = false;
            tempTicket.ClosedDate = DateTime.Now;
        }
        await _context.SaveChangesAsync();
        return Ok();
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
    public async Task<ActionResult<List<Ticket>>> GetAllTickets(string queue, string status, string priority)
    {
        var queues = _context.Queues.Select(q => new Queue { Id = q.Id, Title = q.Title, }).ToList();

        IQueryable<Ticket> tickets = _context.Tickets.AsQueryable();
        if (int.TryParse(queue, out int queueId) && queueId > 0)
        {
            tickets = tickets.Where(t => t.QueueId == queueId);
        }
        if (!string.IsNullOrEmpty(status) && status != "undefined")
        {
            tickets = tickets.Where(t => t.Status == status);
        }
        if (int.TryParse(priority, out int priorityStatus) && priorityStatus > 0)
        {
            tickets = tickets.Where(t => t.Priority == priorityStatus);
        }
        var ticketList = tickets.ToList();
        ticketList.ForEach(t => t.Queue = queues.FirstOrDefault(q => q.Id == t.QueueId));
        return ticketList;
    }

    [HttpGet("GetAllQueues")]
    public async Task<ActionResult<List<Queue>>> GetAllQueues()
    {
        return _context.Queues.ToList();
    }

    
}
