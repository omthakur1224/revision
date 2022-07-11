import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [text,setText]=useState({})

    const handleLogin=()=>{

      axios.post('http://localhost:9999/users',text)
      .then((res)=>console.log(res.data))      
     }

    const handleChange=(e)=>{

            const {id,value}=e.target;
            setText({
                ...text,
                [id]:value
            })
        }

        console.log(`input`,text);

  return (
    <div>
      <h1>LOG IN HERE</h1>
      <input id='email' type="email" placeholder='email id' onChange={handleChange} />
      <input id='password' type="password" placeholder='password' onChange={handleChange} />
      <button id='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
