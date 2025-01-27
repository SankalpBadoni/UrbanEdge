import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import apiRequest from "../../Data/ApiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Components/uploadWidget/UploadWidget";

function UpdateProfile() {
    const { logout, currUser, updateUser } = useContext(AuthContext);
    
  const [error, setError] = useState(""); 
  const [profilePicture, setProfilePicture] = useState(currUser.user.profilePicture); 
  const navigate = useNavigate()

  // const handleProfilePictureChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setProfilePicture(imageUrl); 
  //   }
  // };

  const handleSaveChanges = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const {username, email, password} = Object.fromEntries(formData)

    try {
        const res = await apiRequest.put(`/users/${currUser.user.id || currUser.user._id}`, {username, email, password, profilePicture})
        updateUser(res.data)
        navigate("/profile")
        
    } catch (error) {
        console.log(error)
        setError(error.response.data.message)
    }
  };

  const handleCancel = () => {

    console.log("Cancel button clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Profile
        </h1>

        <form className="space-y-6" onSubmit={handleSaveChanges}>
        
          <div className="flex flex-col items-center gap-4">
            <label htmlFor="profilePicture" className="text-lg font-semibold">
              Profile Picture
            </label>
            <div className="relative">
              <img
                src={ profilePicture || "assets/profile.jpg" }
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
              />
              <UploadWidget uwConfig={{
                cloudName : "sankalpbadoni",
                uploadPreset : "estate",
                multiple: false,
                maxImageFileSize: 20000000,
                folder: "profilePictures"
              }}
              setProfilePicture = {setProfilePicture}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name ="username"
              defaultValue={currUser.user.username}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your username"
            />
          </div>

          
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={currUser.user.email}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue=""
              
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>

         
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
