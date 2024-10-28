import React from 'react'
import MyList from '../../Components/MyList/MyList'
import Chat from '../../Components/Chat/Chat'

function ProfilePage() {
  return (
    <>
      <div className='flex'>
        <div className='w-3/5 flex flex-col gap-10 '>
          <div>
            <div className='flex justify-between px-6 mb-7'>
              <h1 className='text-3xl'>User Information</h1>
              <button className='bg-amber-400 p-1'>Update Profile</button>
            </div>
            <div className='px-6 flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span className='text-xl'>Profile Picture : </span>
                <img src="assets/profile.jpg" className='w-10' alt="" />
              </div>
              <span>Username : <b>Ashish Sharma</b></span>
              <span>E-mail : <b>ashish123@gmail.com</b></span>
            </div>
          </div>
          <div className='flex justify-between px-6'>
            <h1 className='text-3xl'>My List</h1>
            <button className='bg-amber-400 p-1'>Create New List</button>
          </div>         
            <MyList />
          <div className='flex justify-between px-6'>
            <h1 className='text-3xl'>Saved List</h1>
          </div>        
            <MyList />
        </div>
        <div className='w-2/5 h-max bg-pink-100'>
          <Chat/>
        </div>
      </div>


    </>
  )
}

export default ProfilePage
