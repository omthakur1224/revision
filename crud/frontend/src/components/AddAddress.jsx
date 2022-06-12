import axios from 'axios';
import React, { useState } from 'react'

function AddAddress() {
   const [text,setText]=useState({});
   const [data,setData]=useState([]);

   const handleChange=(e)=>{
      console.log(`hellochange`);
      const {id,value}=e.target;
      setText({
        ...text,
        [id]:value
      })
    }
    const handleSubmit=()=>{
   console.log(`hello submit`);
    axios.patch(`http://localhost:8888/users/${id}`)
    }
  return (
    <form onSubmit={handleSubmit}>
       <input id='line1' type="text" onChange={handleChange} placeholder='line1'/>
       <input id='line2' type="text" onChange={handleChange} placeholder='line2' />
       <input id='district' type="text" onChange={handleChange} placeholder='District'/>
       <input id='state' type="text" onChange={handleChange} placeholder='State'/>
       <input id='country' type="text" onChange={handleChange} placeholder='Country'/>
       <input id='pin' type="number" onChange={handleChange} placeholder='pin' />
       <input id='submit' type="submit" />

    </form>
  )
}

export default AddAddress
 