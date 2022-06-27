import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

interface Iticket {
  title: string
}

export const Ticket = ({...props}) => {
  const { ticket } = props;
  

  
  return (
    <div className='rounded-2xl border-2 grid grid-cols-6 gap-4'>
      <div></div>
      <div><b>Title</b></div>
      <div><b>Assigned user</b></div>
      <div><b>Queue</b></div>
      <div><b>Priority</b></div>
      <div><b>Status</b></div>

      <div>
        <Link to={`Edit/${ticket.id}`}>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Edit</button>
        </Link>
      </div>
      <h2 className=''>{ticket.title}</h2>
      <label>{ticket.assignee ? ticket.assignee : 'None'}</label>
        <div>{ticket.queue ? ticket.queue.title : 'Open'}</div>
        <div>{ticket.priority ? ticket.priority : 'None'}</div>
        <div>{ticket.status ? ticket.status : 'None'}</div>
    </div>
  )
}
