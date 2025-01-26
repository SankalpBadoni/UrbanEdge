import React, { useContext, useEffect } from "react";
import MyList from "../../Components/MyList/MyList";
import Chat from "../../Components/Chat/Chat";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function ProfilePage() {
  const { logout, currUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/auth/logout");
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      logout();
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-8 py-6 bg-gray-50 min-h-screen">
      <div className="lg:w-3/5 flex flex-col gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">User Information</h1>
            <Link to="/profile/update" >
            <button className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition">
              Update Profile
            </button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg">Profile Picture:</span>
              <img src={ currUser.user.profilePicture ||"assets/profile.jpg" }className="w-12 h-12 rounded-full border-2 border-gray-300" alt="Profile" />
            </div>
            <span className="text-lg">
              Username: <b className="font-medium">{currUser?.user?.username}</b>
            </span>
            <span className="text-lg">
              Email: <b className="font-medium">{currUser.user.email}</b>
            </span>
            <button
              onClick={handleLogout}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-5">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My List</h1>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
              Create New List
            </button>
          </div>
          <MyList />
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-7">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Saved List</h1>
          <MyList />
        </div>
      </div>

     
      <div className="lg:w-2/5 bg-white shadow-md rounded-lg p-6">
        <Chat />
      </div>
    </div>
  );
}

export default ProfilePage;
