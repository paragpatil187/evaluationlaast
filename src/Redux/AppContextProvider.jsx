import { createContext } from "react";
import {store} from "./store";


export const Appcontext =createContext();

export const AppcontextProvider= ({children}) =>{
    const {dispatch,getState} =store;
    const value= {dispatch,getState};
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}