using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsActive { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<Permissions> Permissions { get; set; }
        public List<Comments> Comments { get; set; }


        private string fullname;
        public string Fullname
        {
            get { return $"{FirstName} {LastName}"; }
            // set { fullname = value; }
        }
        
        // [NotMapped]
        // public List<Ticket> TicketClosedBy { get; set; } = null;
        // [NotMapped]
        // public List<Ticket> TicketAssignee { get; set; } = null;
        // [NotMapped]
        // public List<Ticket> TicketSubmittedBy { get; set; } = null;
        
        public List<KnowledgeArticles> KnowledgeArticlesLastEdited { get; set; }
    }
}