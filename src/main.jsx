import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GeneralProvider from './store/GeneralProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </BrowserRouter>,
  // </React.StrictMode>
);
