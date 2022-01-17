import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../contexts/Authcontext";

export const Login =() =>{
    const [form,setForm] =useState({});
    const {handleToken}=useContext(Authcontext);
    const navigate =useNavigate();

    const handleChange = ({target:{name,value}})=> {
        setForm({
            ...form,
            [name]:value
        })
    }
    return (
        <div>
        <input type="text" name="email" placeholder="Enter Email" onChange={handleChange}>
        </input>
        <input type="password" name="password" placeholder="enter password">
        </input>
        <button onClick={()=>{
            handleToken("1234567")
            navigate("/admin")

        }}>login
        </button>
        </div>
    )
}