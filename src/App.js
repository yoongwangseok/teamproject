import React from 'react';
import Products from "./pages/products/Products";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  function Index() {
    return (
      <>
        Hello World
      </>
    );
  }

  return (
    <BrowserRouter basename='/gamgyul-social-market'>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
