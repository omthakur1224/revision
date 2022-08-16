import React, { useState } from 'react'
import './Form.css'
function Form() {
  const [formData,setFormData]=useState({
    'name':'',
    'email':'',
    'gender':'',
    'qualification':''
  })
  const [gender,setGender]=useState('')
  const [data,setData]=useState([])
  const handleRadio=(e)=>{
    setGender(e.target.value)
  }
  const handleChange=(e)=>{
    if(e.target.className==='male' || 
    e.target.className==='female' || 
    e.target.className==='other' ){
      setGender(e.target.value)
      setFormData({
        ...formData,
        gender:e.target.value
       })
    }
    else{
      setFormData({
       ...formData,
       [e.target.className]:e.target.value
      })
    }
   console.log(formData)
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  setData([...data,formData])
}
console.log(data,"data")
  return (
    <form onSubmit={handleSubmit} className='form'>
 <h1>Registration Form</h1>
        <input type='text' 
        placeholder={'name'} 
        className='name' 
        onChange={handleChange}/>

        <input type='email' 
        placeholder={'email'} 
        className='email' 
        onChange={handleChange}/>
       

        <div className='gender' style={{"display":"flex","gap":"20px"}}>

         <div style={{
          "display":'flex',
          "flexDirection":'column'
         }}>
           <label>Male</label>
             <input type="radio" 
             className='male' value='male' 
             checked={gender==='male'?true:false} 
             onChange={handleChange}/>
          </div>
         <div style={{
          "display":'flex',
          "flexDirection":'column'
         }}>
           <label>Female</label>

             <input type="radio" 
             className='female'  
             value='female' 
             checked={gender==='female'?true:false} 
             onChange={handleChange} />
             </div>

         <div style={{
          "display":'flex',
          "flexDirection":'column'
         }}>
           <label>Other</label>

             <input type="radio" 
             className='other' 
             value='other' 
             checked={gender==='other'?true:false} 
             onChange={handleChange} />
             </div>
        </div>

        <select name="qualification" id="qualification" className='qualification' onChange={handleChange}>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="Graduation">Graduation</option>
          <option value="Post_Graduation">Post Graduation</option>
        </select>
    <input type="submit" />
    </form>
  )
}

export default Form
