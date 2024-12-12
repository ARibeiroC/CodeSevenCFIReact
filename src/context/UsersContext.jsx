import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const UsersContext = createContext()

export const UsersContextProvider = ({children}) => {
    
    const {data: users, loading} = useFetch(`${import.meta.env.VITE_API_URL}/candidates`)

    return (
        <UsersContext.Provider value={{users, loading}}>
            {children}
        </UsersContext.Provider>
    )
}