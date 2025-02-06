import { useState } from 'react'

import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import {Layout, RequireAuth } from './Pages/Layout/Layout';
import ListPage from './Pages/ListPage/ListPage';
import SinglePage from './Pages/SinglePage/SinglePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Agents from './Pages/Agents/Agents';
import SignUp from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import UpdateProfile from './Pages/ProfileUpdate/ProfileUpdate';
import NewPostPage from './Pages/newPostPage/NewPostPage';
import { listPageLoader, singlePageLoader } from './Data/loaders';

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
          loader: listPageLoader
         
        },
        {
          path:"/:id",
          element: <SinglePage/>,
          loader: singlePageLoader,
        },
        
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contacts",
          element: <Contact/>
        },
        {
          path: "/agents",
          element: <Agents/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "login",
          element: <Login/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path: "/profile",
          element: <ProfilePage/>
        } ,
        {
          path: "/profile/update",
          element: <UpdateProfile/>
        } ,
        {
          path: "/add",
          element: <NewPostPage/>
        } ,
      ]
    }
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
