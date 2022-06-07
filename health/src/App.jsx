import { useEffect, useState } from 'react'
import './App.css'
import React from 'react';
import axios from 'axios';
import {Collapse,Checkbox} from "antd";
// import Checkbox from 'antd/lib/checkbox/Checkbox';

const {Panel}=Collapse;
const filters=[
    {
        "id":1,
        "name":'brand'
    },{
        "id":2,
        "name":'price'
    },{
        "id":3,
        "name":'rating'
    }
]
function App() {
  const [checked,setChecked]=useState([]);
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8090/medicines')
    .then((res)=>{
        setData(res.data.medicines)
        console.log("res",res.data.medicines)
    })
  },[])
  const handleChange=(value)=>{
      console.log("hello")
      const currIdx=checked.indexOf(value);
      const newChecked=[...checked];
      if(currIdx===-1){
          newChecked.push(value);
      }
      else{
          newChecked.splice(currIdx);
      }
      console.log(newChecked)
      setChecked(newChecked);

  }
  return (
            <>
             <div style={{display:"flex",justifyContent:"space-around"}}>
                 <div style={{display:"flex",gap:"20px"}}>
                    <label >Filter</label>
                    <select name="" id="">
                        <option value="">Select</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="brand">Brand</option>
                    </select>
                </div>
                <div style={{display:"flex",gap:"20px"}}>
                    <label>Sort</label>
                    <select name="" id="">
                        <option value="">Select</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                 </div>
            </div>   
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:'20px,0',marginLeft:"100px",marginTop:"20px"}}>
            {data.map((item,index)=>
                <>
                <div key={index} style={{width:'300px'}}>
                    <img src={item.image} alt="" style={{width:"300px",height:"200px"}}/>
                    <h5 style={{display:"flex", justifyContent:"space-between"}}><span style={{fontWeight:"bold"}}>Name</span>{item.name}</h5>
                    {/* <p style={{display:"flex", justifyContent:"space-between"}}> <span>Company</span>{item.company}</p> */}
                    <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Brand</span> <span >{item.brand}</span></p>
                    <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Description</span><span >{item.desc}</span></p>
                    <p style={{display:"flex", justifyContent:"space-between"}}><span  style={{fontWeight:"bold"}}>Price</span>{item.price} <span><span style={{fontWeight:"bold"}}>Rating</span>{item.rating}</span></p>
                </div>
               
                </>
                
                
            )}
            </div>
            </>
            )
}
//   return (
//   <div>
//   <Collapse defaultActiveKey={[0]} style={{width:"200px",height:"100px",marginLeft:"10px"}}>
//     <span>Filters</span>
//       <Panel header key='1' style={{display:"flex",width:"10px"}}>
//          {
//          filters.map((value,i)=>
//           <React.Fragment key={i} >
//               <Checkbox
//               onChange={()=>handleChange(value.id)}
//               type="checkbox"
//               checked
//               />
//               <span>{value.name}</span>
//           </React.Fragment>
//          )
//          }
//       </Panel>

//   </Collapse>
//   </div>

// )
// }

export default App
