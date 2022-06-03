import React, { useState } from 'react'
import axios from 'axios'
function Payment() {
  const [order,setOrder]=useState({});
  const [data,setData]=useState([]);
  const handleChange=(e)=>{
    // e.preventDefault();
    setOrder({
      "entity":"order",
      "amount":e.target.value,
      "amount_paid":0,
      "amount_due":e.target.value,
      "currency":"INR",
      "receipt":Math.random()*100,
      "status":"created",
      "attempts":0,
      "notes": {
        "key1": "value1",
        "key2": "value2",
      }
    })
  console.log(order)
  }
const handleOrder=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:2345/orders',order)
  .then((res)=>{
    console.log("data",res.data)
    setData(res.data)
  })
 // setData(order)
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

          </>
        )
}

export default Payment
