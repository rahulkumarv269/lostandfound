import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from './Context/AppContext';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <AppContextProvider>
    <BrowserRouter>
     <App />
     <ToastContainer />
   </BrowserRouter>
   </AppContextProvider>
);
