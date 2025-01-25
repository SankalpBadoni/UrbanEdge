import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const[currUser, setCurrUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    return <AuthContext.Provider value= {{currUser}}>{children}</AuthContext.Provider>
}