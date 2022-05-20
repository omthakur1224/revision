import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const VehicleDetail = () => {

    const navigate=useNavigate();

    const handleSubmit=()=>{
        navigate("/loading")

        setTimeout(()=>{

        console.log("submission successfull");

        navigate('/ticket');
        
        },1000)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter vehicle name'/>
      <input type="number" placeholder='enter vehicle number' />
      <select name="" id="">
          <option value="">First Floor</option>
          <option value="">Second Floor</option>
          <option value="">Third Floor</option>
          <option value="">Fourth Floor</option>
          <option value="">Fifth Floor</option>
      </select>
      <input type="submit" value='Genrate Ticket' />
    </form>
  )
}

export default VehicleDetail
