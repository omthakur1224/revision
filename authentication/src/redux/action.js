import { INC, ADD_TODO, DEC } from "./actionTypes.js";

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