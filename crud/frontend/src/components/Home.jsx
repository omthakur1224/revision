import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 style={{margin:"auto",textAlign:"center"}}>
      welcome to TechGuru
      </h1>
      <button style={{margin:"auto",display:"flex",justifyContent:"center"}}>
     <Link to='/users'>List of all the users</Link>
     </button>
    </div>
  )
}

export default Home
