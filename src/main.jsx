import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
