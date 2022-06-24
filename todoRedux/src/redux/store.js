import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import React,{ useEffect } from "react";
import axios from 'axios'
var Data=[];
var page;

const getData=()=>{
  axios.get(`http://localhost:5555/tasks?_page=${page}&_limit=5`)
  .then((res)=>{
    console.log("res",res.data)
       for(let i=0;i<res.data.length;i++){
      Data.push(res.data[i]);
    }
    // return res.data
  })
  }
 getData();
const initState={
  todos:[],
    counter:0,
    page:1,
    data:Data,
    // getData:getData()
  }
  // console.log(`data`,Data);
// useEffect(()=>{
//     getData();
//   },[])
  


export const Store=createStore(reducer,initState);
console.log(Store.getState(),"daata")
Store.subscribe(()=>{
    console.log("subscribe",Store.getState());
})
