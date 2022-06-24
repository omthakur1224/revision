import { INC, ADD_TODO, DEC, NEXT, PREV, DATA } from "./actionTypes.js";
import { initState } from "./store.js";
import { useDispatch } from "react-redux";
import axios from "axios";
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
    fetch(`http://localhost:5555/tasks?_page=${initState.page}&_limit=5`)
  .then((res)=>{res.json()})
  .then((res)=>{dispatch(storeData(res))})
  .catch((err)=>console.log(err))
}