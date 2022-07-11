import React,{ useState } from 'react'
import axios from 'axios'
function SignUp() {

    const [text,setText]=useState({})

    const handleLogin=()=>{
      axios.post('http://localhost:9999/users',text)
      .then((res)=>console.log("response",res.data))
    //   .then(()=>setText({email:"",password:'',name:''})) 
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
      <h1>SIGN UP HERE</h1>

      <input type="text" id='name' placeholder='name' onChange={handleChange} />
      <input id='email' type="email" placeholder='email id' onChange={handleChange} />
      <input id='password' type="password" placeholder='password' onChange={handleChange} />
      <button id='submit' onClick={handleLogin}>Login</button>

    </div>
  )
}

export default SignUp
