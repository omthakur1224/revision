import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import {Store} from '../redux/store.js'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, addTodo, nextPage, prevPage, reduceCount, getData, storeData} from '../redux/action';
import thunk from 'redux-thunk'
function TodoList() {
  const dispatch = useDispatch();
  const page =useSelector((Store)=>Store.page);
  // const counter=useSelector((Store)=>Store.counter);
  // getData=useSelector(Store=>Store.getData);
  // let data;
  const data=useSelector((Store)=>Store.data);
  console.log(`data`,data);
  useEffect(()=>{
     dispatch(getData());
     // dispatch((storeData(dispatch(getData()))))
    },[])
    // dispatch(storeData(data));
  
  // const handleDelete=(id)=>{
    //   axios.delete(`http://localhost:5555/tasks/${id}`)
    //   .then((res)=>{
      //     console.log("res",res.data)
      //     getData();
      //     // setData(res.data);
      //     // getData();
      //   })
      // }
      return (
        <div>
      {data.map((task,index)=>        
          <div  key={index} style={{
            "display":"flex",
            "justifyContent":"space-around"
          }}>
          <span>{task.task}</span>
            <div>
              <button disabled={task.count>0?false:true} onClick={()=>{dispatch(reduceCount(1))}}>-</button>
              <span>{task.count}</span>
              <button onClick={()=>{
                dispatch(addCount(1));
                }}>+</button>
            </div>
            <button onClick={()=>handleDelete(task.id)}>X</button>
          </div>
      )}
      <button disabled={page<2?true:false} onClick={()=>{
      dispatch(prevPage(1));
      dispatch(getData());
      }}>prev</button>
      <span>{page}</span>
      <button disabled={data.length<5?true:false} onClick={()=>{
        
        dispatch(nextPage(1));
        dispatch(getData());
        }}>next</button>
    </div>
  )
}
export default TodoList

// let [count,setCount]=useState(1);
// var getData=()=>{
//   axios.get(`http://localhost:5555/tasks?_page=${page}&_limit=5`)
//   .then((res)=>{
//     console.log("res",res.data)
//     setData(res.data)})
//   }

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
// let [data,setData]=useState([]);