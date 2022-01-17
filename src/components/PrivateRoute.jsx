import { useContext } from "react";
import { Authcontext } from "../contexts/Authcontext";
import { Navigate } from "react-router-dom";
export const PrivateRoute =({children}) => {
    const {token} =useContext(Authcontext)
    if(!token){
        return <Navigate to={"/login"}/>
    }
    return children;
}