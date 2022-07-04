import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

interface Iqueue {
  id: number,
  title: string
}

interface Iusers {
  id: number,
  firstName: string,
  lastName: string
}

interface Itickets {
  id: number,
  title: string,
  description: string,
  createdDate: Date,
  queueId: number,
  status: string,
  priority: number,
  usersId: number,
}

const defaultTicket: Itickets = {
  id: 0,
  title: '',
  description: '',
  createdDate: new Date(),
  queueId: 0,
  status: '',
  priority: 0,
  usersId: 0,
}

export const TicketAddEdit = () => {
  const params = useParams();
  
  const [queues, setQueues] = useState<Array<Iqueue>>([]);
  const [users, setUsers] = useState<Array<Iusers>>([]);
  const [ticket, setTicket] = useState<Itickets>(defaultTicket);
  
  useEffect(() => {
    fetch('http://192.168.1.239:5143/api/Ticket/GetAllQueues')
    .then(data => data.json())
    .then(json => setQueues(json));

    fetch('http://192.168.1.239:5143/api/User/GetAllUsers?active=true')
    .then(data => data.json())
    .then(json => setUsers(json));

    fetch(`http://192.168.1.239:5143/api/Ticket/GetTicket?ticketId=${params.TicketId}`)
    .then(data => data.json())
    .then(json => {setTicket(json); console.log(json)});

  }, [])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setTicket({...ticket, [name]: value});
  }

  const formatDate = (date: Date) => {
    const newDate = new Date(date);
    return `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    fetch('http://192.168.1.239:5143/api/Ticket/Edit', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(ticket) })
    .then(data => { return data.ok ? nav() : ''})
  }

  const navigate = useNavigate();
  const nav = useCallback(() => navigate('/Tickets', { replace: true }), [navigate]);

  return (
    <div className='grid grid-rows-[auto_auto_auto_auto_auto]'>
      <div className=''>
        {ticket.id ? ticket.id : 'New Ticket'}
      </div>
      <div>
        <input className='border' placeholder='Title' value={ticket.title} onChange={handleInputChange} name='title'/>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <textarea value={ticket.description} className='border' placeholder='Description' rows={10} style={{resize: 'none'}} name='description' onChange={handleInputChange}/>
        <div>
          <div>
            <div>Created Date: {formatDate(ticket.createdDate)}</div>
          </div>
          <div className='grid grid-cols-3'>
            <fieldset>
              <legend>
                <b>Queue</b>
              </legend>
              <select value={ticket.queueId} onChange={handleInputChange} name='queueId'>
                <option></option>
                {queues.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>
                <b>Users</b>
              </legend>
              <select value={ticket.usersId} onChange={handleInputChange} name='usersId'>
                <option></option>
                {users.map(e => <option key={e.id} value={e.id}>{e.firstName} {e.lastName}</option>)}
              </select>
            </fieldset>
            <fieldset>
              <legend>
                <b>Status</b>
              </legend>
              <select value={ticket.status} onChange={handleInputChange} name='status'>
                <option></option>
                <option>Open</option>
                <option>Closed</option>
                <option>Pending</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>
      <div>
      <fieldset>
        <legend>
          <b>Priority</b>
        </legend>
        <select className='block p-2 w-16' name='priority' value={ticket.priority} onChange={handleInputChange}>
          <option></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </fieldset>
      </div>
      <div className='grid grid-cols-[1fr_125px_125px]'>
        <Link to={'/Tickets'} className='col-start-2 '>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Cancel</button>
        </Link>
        <button onClick={handleClick} className='col-start-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Save</button>
      </div>
    </div>
  )
}
