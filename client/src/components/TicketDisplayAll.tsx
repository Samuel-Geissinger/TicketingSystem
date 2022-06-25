import React, { useEffect, useState } from 'react'
import { Ticket } from './Ticket'

export const TicketDisplayAll = () => {
  const [tickets, setTickets] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5143/api/Ticket/GetAllTickets')
    .then(res => res.json())
    .then(json => setTickets(json));
  }, [])
  
  
  return (
    <div>
      {tickets.map((e, i) => <Ticket key={i} ticket={e} />)}
    </div>
  )
}
