import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './style.css'
import React from 'react'
import Product from './Pages/Product';
import Details from './Pages/Details';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Product />}/>
      <Route path='/products/details' element={<Details />}/>
    </Routes>
  );
}

export default App;
