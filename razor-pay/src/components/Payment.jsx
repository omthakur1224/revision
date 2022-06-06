import React, { useState } from 'react'
import axios from 'axios'
import CheckOut from './CheckOut';
import { Link, useNavigate } from 'react-router-dom';
function Payment() {
  const [order,setOrder]=useState({});
  const [data,setData]=useState({});
  const navigate=useNavigate()
  const[rec,setRec]=useState("");
  const handleChange=(e)=>{
    // e.preventDefault();
    setOrder({
        "amount":e.target.value,
        "amount_due":e.target.value,
     })
      // console.log(order)
  }
  const handleOrder=(e)=>{
   e.preventDefault();
     if(order.amount!=null) { axios.post('http://localhost:4444/orders/create',order)
      .then((res)=>{
        console.log("data",res.data)
        setData(res.data);
        setRec(!rec);
        alert(`order placed successfully \n Order ID : ,${res.data._id}`);
        navigate(`/checkout/${res.data._id}`,{replace:true});
      })}
      else{
        alert('enter valid amount');
      }
    }
  return (
          <>
             <form action="" onSubmit={handleOrder}>
             <input type="number" id='amt' placeholder='enter amount' onChange={handleChange}/>
             <br/>
             <input type="submit"/>
           </form>
         </>
        )
}

export default Payment
