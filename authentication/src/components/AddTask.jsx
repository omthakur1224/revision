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
    <div>
      <input id="task" type="text" placeholder='Add task' onChange={handleChange}/>
      <button type="text" onClick={handleClick}>+</button>
    </div>
  )
}

export default AddTask
