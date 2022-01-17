import { createContext, useState } from "react";
//for not crashing
export const Authcontext = createContext({token:"",handleToken:()=>{}});

export  const AuthcontextProvider =({children}) => {
    const[token,setToken] =useState("");
    const handleToken =(token) => {
        setToken(token)
    }
    return <Authcontext.Provider value={{token,handleToken}}>{children}</Authcontext.Provider>
}