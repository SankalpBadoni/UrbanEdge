import { useState } from 'react'

import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout';
import ListPage from './Pages/ListPage/ListPage';
import SinglePage from './Pages/SinglePage/SinglePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: 'list',
          element: <ListPage/>,
         
        },
        {
          path:"/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        } ,
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contacts",
          element: <Contact/>
        }
      ]
    },
  ]);
  return (
    // <>
    //   <div className=' h-screen max-w-6xl mr-auto ml-auto pl-6 pr-6 lg:bg-white'>
    //     <Navbar/>
    //     <HomePage/>
    //   </div>
    // </>
    <RouterProvider router={router}/>
  )
}

export default App
