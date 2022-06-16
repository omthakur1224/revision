import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AddTask() {
    const [text,setText]=useState({});
    const [tasks,setTasks]=useState([]);
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setText({
            ...text,
            [id]:value,
            status:false
         })
    }
    const handleClick=()=>{
        axios.post('http://localhost:4444/tasks',text)
        .then((res)=>{
            console.log("response",res.data);
            setTasks(res.data)})
        }
  return (
    <div style={{"gap":"10px","display":"flex"}}>
      <input id="task" type="text" placeholder='Add task' onChange={handleChange}style={{
        "width":"80%",
        "height":"30px"
      }}/>
      <button style={{
        "width":"40px",
        "height":"35px",
        "outline":"none",
        "border":"none",
        "backgroundColor":"none"
      }} type="text" onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTask
