import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GoogleSignIn from './Components/GoogleSignIn/GoogleSignIn';
import MainLayOut from './Components/Layouts/MainLayOut';
import SignUp from './Components/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      
      {
        path:'/googleSignIn',
        element: <GoogleSignIn></GoogleSignIn>
      },
      {
        path:'/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
