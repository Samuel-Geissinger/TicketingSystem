using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Queue
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public List<Ticket> TicketQueue { get; set; } = null;

        public List<Permissions> Permissions { get; set; }
    }
}