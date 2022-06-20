import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const initState={
    todos:[],
    counter:0
}
export const Store=createStore(reducer,initState);

Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})