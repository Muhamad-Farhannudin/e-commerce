import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './style.css'
import React from 'react'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
