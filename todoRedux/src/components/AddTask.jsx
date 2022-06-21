import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import { Store } from '../redux/store';

function AddTask() {
    const [text,setText]=useState({});
    const [tasks,setTasks]=useState([]);
    const [data,setData]=useState([])
    // const [input,setInput]=useState("")
    const page=useSelector((store)=>store.page);
    
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setText({
            ...text,
            [id]:value,
            status:false,
            count:1
         })
    }
    
     const getData=()=>{
      axios.get(`http://localhost:5555/tasks?_page=${page}&_limit=5`)
      .then((res)=>{
        console.log("res",res.data)
        // setData(res.data)
      })
     }
    const handleClick=()=>{
        axios.post('http://localhost:5555/tasks',text)
        .then((res)=>{
            console.log("response",res.data);
            setTasks(res.data)});
            setText({task:""});
            getData();
          }
  return (
    <div style={{"display":"flex"}}>
      <input id="task" value={text.task===undefined ? "":text.task} type="text" placeholder='Add task' onChange={handleChange}style={{
        "width":"80%",
        "height":"30px",
        "marginLeft":"20px",
        "marginTop":"10px"
      }}/>
      <button style={{
        "width":"40px",
        "height":"35px",
        "outline":"none",
        "border":"none",
        "backgroundColor":"white",
        "fontSize":"50px"
      }} type="text" onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTask
