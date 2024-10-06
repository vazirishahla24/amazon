import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import ProductProvider from './context/ProductProvider';
import CartProvider from './context/CartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ProductProvider>
    <CartProvider>
    <App/>
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
    );
