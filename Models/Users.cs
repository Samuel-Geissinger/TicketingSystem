using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Users
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<Permissions> Permissions { get; set; }
        public List<Comments> Comments { get; set; }

        public List<Ticket> TicketClosedBy { get; set; } = null;
        public List<Ticket> TicketAssignee { get; set; } = null;
        public List<Ticket> TicketSubmittedBy { get; set; } = null;
        
        public List<KnowledgeArticles> KnowledgeArticlesLastEdited { get; set; }
    }
}