import { INC, ADD_TODO, DEC, NEXT, PREV, DATA } from "./actionTypes.js";
import { initState, Store } from "./store.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import thunk from "redux-thunk";
// const dispatch=useDispatch();
export const addCount=(payload)=>{
    return {
        type:INC,
        payload
    }
}
export const reduceCount=(payload)=>{
    return {
        type:DEC,
        payload
    }
}

export const addTodo=(payload)=>{
    return{
        type:ADD_TODO,
        payload:{
            title:payload,
            status:false
        }
    }
}

export const nextPage=(payload)=>{
    
    return {
        type:NEXT,
        payload
    }
}

export const prevPage=(payload)=>{
    return {
        type:PREV,
        payload
    }
}
export const storeData=(payload)=>{
    return {
        type:DATA,
        payload
    }
}

export const getData=()=>(dispatch)=>{

    // console.log("store.page",Store.getState().page)

    //Getting page number from store
    const Page=Store.getState().page;

    // Data fetching along with Pagination 
    fetch(`http://localhost:5555/Todos?page=${Page}&size=5`)
    // fetch(`http://localhost:5555/Todos`)
    .then((res)=>{
                return res.json();
                })
    .then((res)=>{
                    dispatch(storeData(res))
                    console.log("json",res)    
                })
    .catch((err)=>console.log(err))
}