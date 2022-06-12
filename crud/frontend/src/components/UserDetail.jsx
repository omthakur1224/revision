import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import {params} from 'react-router-dom'
const dataDetail = () =>{
    const {id}=useParams();
  
    const [data,setData]=useState({});
    // console.log(id,"id")
    useEffect(()=>{
      axios.get(`http://localhost:8888/users/${id}`)
      .then((res)=>{
        console.log(res.data,'response');
        setData(res.data);
      })
    
    },[]);
    const handleClick=()=>{

    }
  return (
    <div>
{/* <Link to={`/datas/${data._id}`} key={index}> */}
{/* <span style={{fontWeight:"bold"}}>Name</span> */}
       <div   style={{width:'300px',margin:"auto"}} onClick={()=>handleClick(data._id)}>
           <img src={data.image} alt="" style={{width:"300px",height:"200px"}}/>
           <h1 style={{display:"flex", justifyContent:"center",textAlign:'center'}}>{data.first_name}</h1>
           {/* <p style={{display:"flex", justifyContent:"space-between"}}> <span>Company</span>{data.company}</p> */}
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Gender</span> <span >{data.gender}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}> <span  style={{fontWeight:"bold"}}>Mobile</span><span >{data.mobile}</span></p>
           <p style={{display:"flex", justifyContent:"space-between"}}><span  style={{fontWeight:"bold"}}>email</span>{data.email} </p>
          <Link to={`/users/${id}/addresses`}>Addresses</Link>
       </div>
       {/* </Link>   */}
         </div>
  )
}

export default dataDetail
