import React from 'react'

function AddAddress() {
   const handleChange=()=>{
      console.log(`hellochange`);
    }
    const handleSubmit=()=>{
   console.log(`hello submit`);
      
    }
  return (
    <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleChange} placeholder='line1'/>
       <input type="text" onChange={handleChange} placeholder='line2' />
       <input type="text" onChange={handleChange} placeholder='District'/>
       <input type="text" onChange={handleChange} placeholder='State'/>
       <input type="text" onChange={handleChange} placeholder='Country'/>
       <input type="number" onChange={handleChange} placeholder='pin' />
       <input type="submit" />

    </form>
  )
}

export default AddAddress
 