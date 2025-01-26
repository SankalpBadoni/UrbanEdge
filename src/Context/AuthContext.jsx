import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateUser = (data) => {
    setCurrUser(data);
  }

  const logout = () => {
    localStorage.removeItem("user");
    setCurrUser(null);
  }

  useEffect(() => {
    if (currUser) {
      localStorage.setItem("user", JSON.stringify(currUser));
    }
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, updateUser, logout }}>{children}</AuthContext.Provider>
  );
};
