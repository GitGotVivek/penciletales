import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';
import Login from './Auth/Login.jsx';
import Profile from './Pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/user-profile',
        element: <Profile />
      },
      {
        path: '/single-blogs',
        element: <SingleBlog />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  },
]);  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
