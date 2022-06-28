// import { addTodo,addCount } from "./action";
// import { Store } from "./Store.js";
import { INC, ADD_TODO, DEC, NEXT, PREV, DATA } from "./actionTypes.js";
export const reducer=(Store,action)=>{

    switch(action.type){
        case INC:
            return {...Store,
                data:Store.data.map((el)=>
                el.id==action.payload?{...el,count:el.count+1}:el
                )};
        case DEC:
            return{...Store,counter:Store.counter - action.payload};
        case ADD_TODO:
                    return {...Store,todos:[...Store.todos,action.payload]};
        case NEXT:
            return {...Store,page:Store.page + action.payload};
        case PREV:
            return {...Store,page:Store.page - action.payload};
        case DATA:
            return {...Store, data:action.payload};
        default:
            return Store;
    }

}