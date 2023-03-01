import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME_ROUTE, EVENT_DETAILS } from './constants/routes.js';
import { EventDetails, Home } from './pages/index.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${EVENT_DETAILS}/:eventId`} element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
