import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Addresses() {
    const {id}=useParams();
  
    const [address,setAddress]=useState([]);
    // console.log(id,"id")
    useEffect(()=>{
      axios.get(`http://localhost:8888/users/${id}/addresses/edit`)
      .then((res)=>{
        console.log(res.data.address,'response');
        setAddress(res.data.address);
      })
    
    },[]);
  return (
    <>
     {address!==undefined?address.map((e)=>{
         <div>
            <h1>{e.address}</h1>
         </div>
     })
     : <Link to={`/users/${id}/addresses/add-address`}>add address</Link> }
    </>
  )
}

export default Addresses
