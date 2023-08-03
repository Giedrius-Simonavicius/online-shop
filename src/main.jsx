import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GeneralProvider from './context/GeneralProvider';
import ShoppingCartProvider from './context/ShoppingCartContext';
import DataContextProvider from './context/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ShoppingCartProvider>
      <GeneralProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </GeneralProvider>
    </ShoppingCartProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
