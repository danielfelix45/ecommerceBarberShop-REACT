import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import { router } from './App';
import {RouterProvider} from 'react-router-dom';
import './index.css';

import CartProvider from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
