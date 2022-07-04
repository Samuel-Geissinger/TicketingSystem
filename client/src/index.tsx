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
import { TicketAddEdit } from './components/TicketAddEdit';
import { Login } from './components/Login';
import { Home } from './Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </React.StrictMode>
);


