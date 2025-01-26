import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

function UpdateProfile() {
    const { logout, currUser } = useContext(AuthContext);
    
  const [username, setUsername] = useState("Ashish Sharma"); // Replace with the actual username
  const [email, setEmail] = useState("ashish123@gmail.com"); // Replace with the actual email
  const [profilePicture, setProfilePicture] = useState("assets/profile.jpg"); // Replace with the actual profile picture

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl); // Update the preview
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", { username, email, profilePicture });
    // Add the backend API call to update the profile here
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
                src={ currUser.user.profilePicture ||"assets/profile.jpg" }
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
              />
              <label
                htmlFor="profilePicture"
                className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700"
              >
                <input
                  type="file"
                  id="profilePicture"
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
                ✎
              </label>
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
              defaultValue={currUser.user.username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={currUser.user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
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
