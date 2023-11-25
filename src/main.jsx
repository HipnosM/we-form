import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Cadastro from './Cadastro.jsx';
import './css/styles.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cadastro /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
