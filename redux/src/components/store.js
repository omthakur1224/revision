import { legacy_createStore as createStore } from 'redux';
import { addTodo, addCount } from './action.js';
import { reducer } from './reducer.js';
// import {legacy_createStore as createStore} from 'redux'
// // console.log("hello redux")
// const reducer=(store,action)=>{
//     if(action.type==='ADD_COUNT'){
//         return {...store,counter:store.counter + action.payload}
//     }
//     else if(action.type==="ADD_TODO"){
//         return {...store,todos:[...store.todos, action.payload]}
//     }
//     return store;
// }
const initState={
    counter:0,
    todos:[]
}
const store=createStore(reducer,initState);
store.dispatch(addCount(2));
console.log(store.getState())
// console.log(store.getState())
// store.dispatch({"type":"ADD_COUNT","payload":1})
// store.dispatch({"type":"ADD_TODO","payload":{title:"BreakFast",status:false}})
// store.dispatch({"type":"ADD_TODO","payload":{title:"dinner",status:false}})
// console.log("afterupdate",store.getState())