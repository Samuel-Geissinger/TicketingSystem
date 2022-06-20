import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './tailwind.output.css'
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { Test } from './components/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistentDrawerLeft>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='Admin' element={<Test />} />
        </Routes>
      </PersistentDrawerLeft>
    </BrowserRouter>
  </React.StrictMode>
);


