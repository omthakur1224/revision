import React, { useState } from 'react'
import axios from 'axios'
import CheckOut from './CheckOut';
import { Link, useNavigate } from 'react-router-dom';
function Payment() {
  const [order,setOrder]=useState({});
  const [data,setData]=useState([]);
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
        alert(`order placed successfully \n Order ID : ,${res.data._id}`)
      })}
      else{
        alert('enter valid amount');
      }
    }
  return (
          <>
          {/* {
  "id":"order_DaZlswtdcn9UNV",
  "entity":"order",
  "amount":50000,
  "amount_paid":0,
  "amount_due":50000,
  "currency":"INR",
  "receipt":"Receipt #20",
  "status":"created",
  "attempts":0,
  "notes": {
    "key1": "value1",
    "key2": "value2",
  "created_at":1572502745
} */}
           <form action="" onSubmit={handleOrder}>
             <input type="number" id='amt' placeholder='enter amount' onChange={handleChange}/>
             <br />
             <input type="submit" />
           </form>
          {/* {rec?<Link to='/checkout'>{rec}</Link>:""} */}
          </>
        )
}

export default Payment
