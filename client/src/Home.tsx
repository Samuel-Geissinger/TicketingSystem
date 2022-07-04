import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Login } from './components/Login'
import PersistentDrawerLeft from './components/PersistentDrawerLeft'
import { TicketAddEdit } from './components/TicketAddEdit'
import { TicketDisplayAll } from './components/TicketDisplayAll'
import { UserTickets } from './components/UserTickets'


export const Home = () => {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState({});
  

  return (
    <PersistentDrawerLeft login={login} setLogin={setLogin}>
      <Routes>
        <Route path='/' element={<UserTickets userId={userId}/>} />
        <Route path='Login' element={<Login setLogin={setLogin} setUserId={setUserId} />} />
        <Route path='Tickets' element={<TicketDisplayAll />} />
        <Route path='Tickets/Edit' element={<TicketAddEdit />} />
        <Route path='Tickets/Edit/:TicketId' element={<TicketAddEdit />} />
        <Route path='*' element={<h2>No Page</h2>} />
      </Routes>
    </PersistentDrawerLeft>
  )
}
