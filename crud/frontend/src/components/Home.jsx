import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      welcome to home page
      <Link to='/users'>Users Detail</Link>
    </div>
  )
}

export default Home
