using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class ProblemTicket
    {
        public int Id { get; set; }
        public string Title { get; set; }   
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ClosedDate { get; set; }
        public bool IsOpen { get; set; }

        public List<Ticket> Ticket { get; set; }
    }
}