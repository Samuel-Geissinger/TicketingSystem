using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public bool IsOpen { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ClosedDate { get; set; }
        public int Priority { get; set; }
        public string Status { get; set; }

        public List<Comments> Comments { get; set; }

        public List<KnowledgeArticles> KnowledgeArticles { get; set; }
    }
}