import { ADD_JOB, DELETE_JOB, EDIT_JOB, TOGGLE_JOB } from "./actionTypes";
const init={
    jobs:[{
        id:"1",
        company:"ekart",
        title:"developer",
        salary:"12000",
        description:"worker",
        location:"mumbai",
        type:"wfh"
    }

    ]
}
export const reducer =(store=init,{type,payload}) =>{
    switch(type){
        case ADD_JOB:
            return [
                ...store,
                {id:payload.id,title:payload.title,status:payload.status}
            ];
            case DELETE_JOB:
                return store.filter((e)=>e.id!=payload.id);
                case TOGGLE_JOB:
                    let arr =[...store];
                    arr.forEach((e)=>{
                        if(e.id===payload.id){
                            e.status=!e.status
                        }
                    });
                    return arr;
                    case EDIT_JOB:
                        let arr1=[...store];
                        arr1.forEach((e)=>{
                            if(e.id==payload.currid.current) {
                                e.title=payload.value;
                            }

                        });
                        return arr1;
                        default:
                            return store;
                    }
    }

    