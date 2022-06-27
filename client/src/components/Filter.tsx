import React, { useEffect, useState } from 'react'

interface Iqueue {
  id: number,
  title: string
}

interface Ivalue {
  queue: number,
  status: string,
  priority: number
}

const valueObject: Ivalue = {
  queue: 0,
  status: '',
  priority: 0
}

export const Filter = ({...props}) => {
  const { filter } = props;
  const [queues, setQueues] = useState<Array<Iqueue>>([])
  const [values, setValues] = useState<Ivalue>(valueObject);
  
  useEffect(() => {
    fetch('http://192.168.1.239:5143/api/Ticket/GetAllQueues')
    .then(data => data.json())
    .then(json => setQueues(json));
  }, [])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  
  const handleClick = (e: any) => {
    e.preventDefault();
    filter(values);
  }

  return (
    <div className='text-center'>
      <h2 className='text-2xl'><b>Filters</b></h2>
      <hr />
      <fieldset>
        <legend>
          <b>Queue</b>
        </legend>
        <select className='block p-2 w-52	' onChange={handleInputChange} name='queue'>
          <option></option>
          {queues.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
        </select>
      </fieldset>
      
      <fieldset>
        <legend>
          <b>Status</b>
        </legend>
        <select className='block p-2 w-52	' onChange={handleInputChange} name='status'>
          <option></option>
          <option>Open</option>
          <option>Closed</option>
          <option>Pending</option>
        </select>
      </fieldset>
      
      
      
      <fieldset>
        <legend>
        <b>Priority</b>
        </legend>
        <select className='block p-2 w-52	' onChange={handleInputChange} name='priority'>
          <option></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </fieldset>
      <button onClick={handleClick} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Filter</button>
    </div>
  )
}
