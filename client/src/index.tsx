import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './tailwind.output.css'
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { Test } from './components/Test';
import TicketDisplayList from './components/TicketDisplayList';
import { Ticket } from './components/Ticket';
import { TicketDisplayAll } from './components/TicketDisplayAll';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface Iticket {
  title: string,
  assignee: string
}

const ticketTest: Iticket = {
  title: 'Finish the application',
  assignee: 'Samuel Geissinger'
}


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistentDrawerLeft>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='Admin' element={<Ticket ticket={ticketTest} />} />
          <Route path='Tickets' element={<TicketDisplayAll />} />
        </Routes>
      </PersistentDrawerLeft>
    </BrowserRouter>
  </React.StrictMode>
);


