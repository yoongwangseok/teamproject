import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Products from './pages/products/Products';

function App() {
  return (
    <BrowserRouter basename='/gamgyul-social-market'>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
