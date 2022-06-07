import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Users() {
    const [data,setData]=useState([]);

    const getData=async()=>{
        await await axios.get('http://localhost:8888/users')
        .then((res)=>{
          setData(res.data);
          console.log(res.data)
        })
    }
    useEffect(()=>{
        getData();
    },[])

    const handleClick=(value)=>{
        console.log(value)
    }
  return( 
  <>
   
  
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:'20px,0',marginLeft:"100px",marginTop:"20px"}}>
   {data.map((user,index)=>
      
        <Link to={`/:${user._id}`}>
       <div  key={index} style={{width:'300px'}} onClick={()=>handleClick(user._id)}>
           <img src={user.image} alt="" style={{width:"300px",height:"200px"}}/>
           <h5 style={{display:"flex", justifyContent:"space-between"}}><span style={{fontWeight:"bold"}}>Name</span>{user.first_name}</h5>
           {/* <p style={{display:"flex", justifyContent:"space-between"}}> <span>Company</span>{user.company}</p> */}
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Gender</span> <span >{user.gender}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Mobile</span><span >{user.mobile}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}><span  style={{fontWeight:"bold"}}>email</span>{user.email} </p>
       </div>
        </Link>
   )}
    </div>   
      
    </>
       ) 
           
  
}

export default Users
