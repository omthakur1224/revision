import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { addCount, addTodo } from '../redux/action';
import {Store} from '../redux/store'
// import useDispatch from 'redux';
function TodoList() {
  let [data,setData]=useState([]);
  let [count,setCount]=useState(1);

  // const dispatch = useDispatch();
  
  let page=useRef(1)

    useEffect(()=>{
    getData();
  },[])

   const getData=()=>{
    axios.get(`http://localhost:5555/tasks?page=${page.current}&size=${5}`)
    .then((res)=>{
      console.log("res",res.data)
      setData(res.data)})
   }
  const handleCount=(val)=>{
    if(count>0){

      // setCount((prev)=>prev+1)
      addCount(val)
      console.log(Store.getState())
    }
    if(count==0 && val==1){
      // setCount((prev)=>prev+1)
      addCount(val)
      console.log(Store.getState())
    }
  }

  const handlePage=(val)=>{
    console.log('hello')
    if(page.current>1){

      // setCount((prev)=>prev+1)
      page.current=page.current+val;
      console.log(`page`,page.current);
      getData();
    }
    if(page.current==1 && val==1){
      // setCount((prev)=>prev+1)
      page.current=page.current+val;
      console.log(`page`,page.current);

      getData();
    }
  }
  return (
    <div>
      {data.map((task)=>        
          <ul  key={task._id} style={{
            "display":"flex",
            "justifyContent":"space-around"
          }}>
          <span>{task.task}</span>
          <div>
            <button onClick={()=>handleCount(-1)}>-</button>
            <span>{count}</span>
            <button onClick={()=>handleCount(1)}>+</button>
          </div>
          </ul>
      )}
      <button onClick={()=>handlePage(-1)}>prev</button>
      <button onClick={()=>handlePage(1)}>next</button>
    </div>
  )
}

export default TodoList
