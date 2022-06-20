using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TicketingSystem.Models
{
    public class Permissions
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Users> Users { get; set; }

        public List<Queue> Queues { get; set; }
    }
}