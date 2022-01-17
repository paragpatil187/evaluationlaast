import { ADD_JOB, DELETE_JOB, EDIT_JOB, TOGGLE_JOB } from "./actionTypes"


export const addJob = (payload)=>{
    return{
        type:ADD_JOB,
        payload,
    }
}

export const deleteJob = (payload)=>{
    return{
        type:DELETE_JOB,
        payload,
    }
}
export const ToggleJob = (payload)=>{
    return{
        type:TOGGLE_JOB,
        payload,
    }
}
export const editJob = (payload)=>{
    return{
        type:EDIT_JOB,
        payload,
    }
}