import React, { useEffect, useState } from 'react'
import { Ticket } from './Ticket';

interface IUser {
  id: number,
  firstname: string,
  lastname: string
}

export const UserTickets = (props: any) => {
  const { userId } = props;
  
  const [user, setUser] = useState<IUser>(userId);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5143/api/Ticket/GetUserTickets?id=${user.id}`)
    .then(data => data.json())
    .then(json => setTickets(json));
    console.log(tickets);
  }, [])
  

  return (
    <div>
      <h2><b>Assigned Tickets:</b> {tickets.length}</h2>
      {tickets.length !== 0 ? tickets.map((e, i) => <Ticket key={i} ticket={e} />) : 'There are currently no tickets assinged'}
    </div>
  )
}
