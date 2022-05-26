import { ADD_COUNT, ADD_TODO } from "./actionTypes.js";

// action creater

export const addCount=(payload)=>{
    return {
        type:ADD_COUNT,
        payload
    }
}
export const addTodo=(payload)=>{
    return{
        type:ADD_TODO,
        status:false,
        payload
    }
}