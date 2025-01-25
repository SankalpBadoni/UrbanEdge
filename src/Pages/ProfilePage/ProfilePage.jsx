import React from "react";
import MyList from "../../Components/MyList/MyList";
import Chat from "../../Components/Chat/Chat";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/logout")
      localStorage.removeItem("user")

      navigate("/")
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <div className="flex">
        <div className="w-3/5 flex flex-col gap-10 ">
          <div>
            <div className="flex justify-between px-6 mb-7">
              <h1 className="text-3xl">User Information</h1>
              <button className="bg-amber-400 p-1">Update Profile</button>
            </div>
            <div className="px-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">Profile Picture : </span>
                <img src="assets/profile.jpg" className="w-10" alt="" />
              </div>
              <span>
                Username : <b>Ashish Sharma</b>
              </span>
              <span>
                E-mail : <b>ashish123@gmail.com</b>
              </span>
              <button onClick={handleLogout} className="bg-indigo-500 text-white w-20 px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors relative flex items-center hover:scale-105">
                Logout
              </button>
            </div>
          </div>
          <div className="flex justify-between px-6">
            <h1 className="text-3xl">My List</h1>
            <button className="bg-amber-400 p-1">Create New List</button>
          </div>
          <MyList />
          <div className="flex justify-between px-6">
            <h1 className="text-3xl">Saved List</h1>
          </div>
          <MyList />
        </div>
        <div className="w-2/5 h-max bg-pink-100">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
