import React, { useEffect } from 'react'

interface Iticket {
  title: string
}

export const Ticket = ({...props}) => {
  const { ticket } = props;
  
  useEffect(() => {
    
  }, [])
  
  
  return (
    <div className='rounded-2xl border-2 grid grid-cols-7 gap-4'>
      <div></div>
      <div>Id</div>
      <div>Title</div>
      <div>Assigned user</div>
      <div>Queue</div>
      <div>Priority</div>
      <div>Status</div>

      <div>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Edit</button>
      </div>
      <div>{ticket.id}</div>
      <h2 className=''>{ticket.title}</h2>
      <label>{ticket.assignee ? ticket.assignee : 'None'}</label>
        <div>{ticket.queue ? ticket.queue : 'None'}</div>
        <div>{ticket.priority ? ticket.priority : 'None'}</div>
        <div>{ticket.status ? ticket.status : 'None'}</div>
    </div>
  )
}
