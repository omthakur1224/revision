import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import React,{ useEffect } from "react";
var Data;

useEffect(()=>{
    getData();
  },[page])
  
  const getData=()=>{
    axios.get(`http://localhost:5555/tasks?_page=${page}&_limit=5`)
    .then((res)=>{
      console.log("res",res.data)
      Data=res.data})
    }
const initState={
    todos:[],
    counter:0,
    page:1,
    data:Data,
}

export const Store=createStore(reducer,initState);

Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})