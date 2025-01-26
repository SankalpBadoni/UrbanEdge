import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

function Layout() {
  return (
    <>
    <div className=' h-screen max-w-6xl mr-auto ml-auto pl-6 pr-6 lg:bg-white'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

function RequireAuth() {
    const { currUser } = useContext(AuthContext);
    if(!currUser){
      return<Navigate to="/login" />
    }
  
  return (
    <>
   <div className=' h-screen max-w-6xl mr-auto ml-auto pl-6 pr-6 lg:bg-white'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export {Layout, RequireAuth}
