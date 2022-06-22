import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import React,{ useEffect } from "react";
import axios from 'axios'
var Data
var page;

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
    getData:getData()
}
// useEffect(()=>{
//     getData();
//   },[])
  


export const Store=createStore(reducer,initState);

Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})