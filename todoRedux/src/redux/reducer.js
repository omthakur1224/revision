// import { addTodo,addCount } from "./action";
import { INC, ADD_TODO, DEC, NEXT, PREV } from "./actionTypes.js";

export const reducer=(store,action)=>{

    switch(action.type){
        case INC:
            return {...store,counter:store.counter + action.payload};
        case ADD_TODO:
            return {...store,todos:[...store.todos,action.payload]};
        case DEC:
            return{...store,counter:store.counter - action.payload};
        case NEXT:
            return {...store,page:store.page + action.payload};
        case PREV:
            return {...store,page:store.page - action.payload}
        default:
            return store;
    }

}