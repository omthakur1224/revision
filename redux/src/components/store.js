import { legacy_createStore as createStore } from 'redux';
import { addTodo, addCount } from './action.js';
import { reducer } from './reducer.js';

const initState={
    counter:0,
    todos:[]
}

export const store=createStore(reducer,initState);

store.subscribe(()=>{
    console.log("subscribe",store.getState());
})
// console.log("store",store.getState());
