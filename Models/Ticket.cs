using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public bool IsOpen { get; set; } = true;
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime? ClosedDate { get; set; }
        public int Priority { get; set; }
        public string Status { get; set; } = "";
        public int? UsersId { get; set; }
        public Users Users { get; set; }
        public int? QueueId { get; set; }
        
        public Queue Queue { get; set; }
        public List<Comments> Comments { get; set; }

        public List<KnowledgeArticles> KnowledgeArticles { get; set; }
    }
}