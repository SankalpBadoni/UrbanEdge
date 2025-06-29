import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

const SignUp = () => {

    const[error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`,{
                username, email, password
            })
            navigate("/login")
            
        } catch (error) {
            console.log(error);
            setError(error.response.data.message)
            
        }
    }
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
            <input 
              type="text" 
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Enter your username" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Enter your email" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              minLength={5}
              maxLength={15}
              name="password" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Create a password" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
          {error && <span className="text-red-600">{error}</span>}
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account? 
          <Link to="/login" className="text-indigo-600 hover:underline ml-1">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
