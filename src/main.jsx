import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GeneralProvider from './context/GeneralProvider';
import ShoppingCartProvider from './context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ShoppingCartProvider>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </ShoppingCartProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
