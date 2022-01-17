import { useContext,useState} from "react"
import { deleteJob } from "../Redux/action";
import { Appcontext } from "../Redux/AppContextProvider"
import { ToggleJob } from "../Redux/action";
import { addJob } from "../Redux/action";
import {nanoid} from "nanoid";

export const Jobs =()=>{


    const {dispatch,getState}=useContext(Appcontext);
    const [data,setData] =useState(0)
    const [value,setValue]=useState=("")
    
    const addval=addJob({id:nanoid(),title:value,status:false})
    return (
        <>
        <div>
    <h1>list of jobs admin</h1>
    <input type="text" placeholder="Enter the job" onChange={(e)=>setValue(e.target.value)}></input>
    <button onClick={()=>{
        dispatch(addval);
        setData(getState());
    }}>add job</button>
    {data.map((e,i)=>{
        return (
            <div key={e.id}>
            <h1>
            {i+1}:{e.title} {e.status ? "close" : "open"}
            </h1>
            <button onClick={()=>{
                dispatch(deleteJob(e));
                setData(getState())
            }}>Delete
            </button>
            <button onClick={()=>{
                dispatch(ToggleJob(e));
                setData(getState());
            }}>toggle status of job
            </button>
            


            </div>


        );
    })}

    </div>
    </>
    );
};