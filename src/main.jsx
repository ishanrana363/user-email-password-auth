import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./index.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Mainlayout from './component/layout/Mainlayout.jsx';
import Login from './component/login/Login.jsx';
import Registration from './component/registration/Registration.jsx';
const router = createBrowserRouter([
  {
    path : "/",
    element : <Mainlayout></Mainlayout>,
    children: [
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path:"/registration",
        element : <Registration></Registration>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
