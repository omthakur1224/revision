import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function CheckOut() {
    const loc=useLocation();
    const {_id} = useParams();
    const [data,setData]=useState({});
    const getData=()=>{
        axios.get(`http://localhost:4444/orders/${_id}`)
        .then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        getData();
    },[])

    const handleClick=()=>{
        console.log("clicked")
    }
  return (
    <div>
         <h1>{data.amount}</h1>
         <button onClick={handleclick}>CheckOut</button>
    </div>
  )
}

export default CheckOut
