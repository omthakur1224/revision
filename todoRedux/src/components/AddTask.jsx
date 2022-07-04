import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getData } from '../redux/action';

function AddTask() {
    const [text,setText]=useState({});

    const [tasks,setTasks]=useState([]);

    const dispatch=useDispatch();
    
    const handleChange=(e)=>{
        const {id,value}=e.target;
        setText({
            ...text,
            [id]:value,
            status:false,
            count:1
         })
    }
   
    const handlePost=()=>{
        if(text.task===undefined) return alert("You have not added any task");
        axios.post('http://localhost:5555/Todos',text)
        .then((res)=>{
            console.log("response",res.data);
            setTasks(res.data)
          })
          .then((res)=>{
            setText({task:""});
            dispatch(getData());
          })
            // getData();
          }
          
  return (
    <div style={{"display":"flex"}}>

      <input id="task" 
              value={text.task===undefined ? "":text.task} 
              type="text" placeholder='Add task' 
              onChange={handleChange}
              style={{
                      "width":"80%",
                      "height":"30px",
                      "marginLeft":"20px",
                      "marginTop":"10px"
                    }}
      />
      <button type="text" 
              onClick={handlePost}
              style={{
                      "width":"40px",
                      "height":"35px",
                      "outline":"none",
                      "border":"none",
                      "backgroundColor":"skyblue",
                      "fontSize":"50px"
                     }} 
      >+</button>
    </div>
  )
}

export default AddTask
