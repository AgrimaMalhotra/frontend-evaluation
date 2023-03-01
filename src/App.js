import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/index.js';
import { HOME_ROUTE } from './constants/routes.js';
import { Home } from './pages/index.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
