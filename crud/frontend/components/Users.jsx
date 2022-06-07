import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [data,setData]=useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8888/users')
      .then((res)=>{
        setData(res.data);
        console.log(res.data)
      })
    },[])
  return( 
  <>
    {
    /* <div style={{display:"flex",justifyContent:"space-around"}}>
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
   </div>    */}
   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:'20px,0',marginLeft:"100px",marginTop:"20px"}}>
   {data.map((user,index)=>
      
       <div key={index} style={{width:'300px'}}>
           <img src={user.image} alt="" style={{width:"300px",height:"200px"}}/>
           <h5 style={{display:"flex", justifyContent:"space-between"}}><span style={{fontWeight:"bold"}}>Name</span>{user.first_name}</h5>
           {/* <p style={{display:"flex", justifyContent:"space-between"}}> <span>Company</span>{user.company}</p> */}
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Gender</span> <span >{user.gender}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Mobile</span><span >{user.mobile}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}><span  style={{fontWeight:"bold"}}>email</span>{user.email} </p>
       </div>
   )}
    </div>   
      
    </>
       ) 
           
  
}

export default Users
