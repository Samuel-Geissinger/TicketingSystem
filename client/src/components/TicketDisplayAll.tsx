import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter } from './Filter'
import { Ticket } from './Ticket'


interface Ivalue {
  queue: number,
  status: string,
  priority: number
}



interface Iticket {
  id: number,
  queueId: number
}

export const TicketDisplayAll = () => {
  const [tickets, setTickets] = useState<Array<Iticket>>([])
  const [filters, setFilters] = useState<Ivalue>();

  useEffect(() => {
    const endpointCall = `http://192.168.1.239:5143/api/Ticket/GetAllTickets?queue=${filters?.queue}&status=${filters?.status}&priority=${filters?.priority}`;
    fetch(endpointCall)
    .then(res => res.json())
    .then(json => setTickets(json));
  }, [ filters ])
  
  
  return (
    <div className='grid grid-cols-10 grid-rows-[40px_1fr]'>
      <div className='col-span-2 grid grid-cols-1 col-start-7 row-start-1'>
        {/* <input /> */}
        <Link to={'Edit'}>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Create Ticket</button>
        </Link>
      </div>
      <div className='col-span-8 row-start-2 row-span-full'>
      {tickets.length !== 0 ? tickets.map((e, i) => <Ticket key={i} ticket={e} />) : 'There are currently no tickets'}
      </div>
      <div className='col-span-2 row-start-2 row-span-full'>
        <Filter filter={setFilters}/>
      </div>
    </div>
  )
}
