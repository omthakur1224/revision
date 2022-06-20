import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, addTodo, nextPage, prevPage, reduceCount } from '../redux/action';
import {Store} from '../redux/store'

function TodoList() {
  let [count,setCount]=useState(1);
  
  // let page=useRef(1);
//   const handleCount=(val)=>{
//     if(count>0){
    
//     // setCount((prev)=>prev+1)
//     dis(addCount(val))
//     console.log(Store.getState())
//   }
//   if(count==0 && val==1){
//     // setCount((prev)=>prev+1)
//     addCount(val)
//     console.log(Store.getState())
//   }
// }

// const handlePage=(val)=>{
//   console.log('hello')
//   if(page.current>1){
//     // setCount((prev)=>prev+1)
//     page.current=page.current+val;
//     console.log(`page`,page.current);
//     getData();
//   }
//   if(page.current==1 && val==1){
//     // setCount((prev)=>prev+1)
//     page.current=page.current+val;
//     console.log(`page`,page.current);

//     getData();
//   }
// }
  let [data,setData]=useState([]);
  const dispatch = useDispatch();
  const page =useSelector((store)=>store.page);
  const counter=useSelector((store)=>store.counter);
  console.log(`counter`,counter);
  useEffect(()=>{
    getData();
  },[])
  
  const getData=()=>{
    axios.get(`http://localhost:5555/tasks?page=${page.current}&size=${5}`)
    .then((res)=>{
      console.log("res",res.data)
      setData(res.data)})
    }
  return (
    <div>
      {data.map((task)=>        
          <div  key={task._id} style={{
            "display":"flex",
            "justifyContent":"space-around"
          }}>
          <span>{task.task}</span>
          <div>
            <button disabled={counter>0?false:true} onClick={()=>{dispatch(reduceCount(1))}}>-</button>
            <span>{counter}</span>
            <button onClick={()=>{dispatch(addCount(1))}}>+</button>
          </div>
          </div>
      )}
      <button disabled={page<2?true:false} onClick={()=>dispatch(prevPage(1))}>prev</button>
      <span>{page}</span>
      <button onClick={()=>dispatch(nextPage(1))}>next</button>
    </div>
  )
}
export default TodoList
