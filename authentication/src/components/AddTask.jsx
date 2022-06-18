import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AddTask() {
    const [text,setText]=useState({});
    const [tasks,setTasks]=useState([]);
    // const [input,setInput]=useState("")
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
            setText({task:""})
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
