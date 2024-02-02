import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './Component/List/List';
import Product from './Component/Product/Product';
import Header from './Component/Header/Header';
import Cart from './Component/cart/Cart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/search/:query" element={<List />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
