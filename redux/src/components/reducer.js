// import { addTodo,addCount } from "./action";
import { ADD_COUNT, ADD_TODO } from "./actionTypes.js";

export const reducer=(store,action)=>{

    switch(action.type){
        case ADD_COUNT:
            return {...store,counter:store.counter + action.payload};
        case ADD_TODO:
            return {...store,todos:[...store.todos,action.payload]}
        default:
            return store;
    }

}