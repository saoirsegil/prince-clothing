import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import reportWebVitals from './reportWebVitals';
import {ProductsProvider} from '../src/contexts/ProductsContext.jsx'
import { CartContext, CartProvider } from './contexts/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </ProductsProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
