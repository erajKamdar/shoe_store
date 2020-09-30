import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from './pages/dataStore';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Cart from "./pages/cart";
import ProductsList from "./pages/dataStore/ProductsList";
import ProductDetails from "./pages/dataStore/ProductDetails";
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

ReactDOM.render(
    <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Routes>
            <Route exact path="/" element={<Store/>} />
            <Route path="/" element={<ProductsList />} />
            <Route path="product/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path="*" element={<NotFound/>} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();