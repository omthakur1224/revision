import React from 'react'
import './Nav.css'
function Navbar() {
  return (
    <div className='main-nav'>
      <div className='logo-nav'>
        <div>
             <img src="../logo.png" alt="" />
        </div>
      </div>
      <div className='list-div'>
          <ul>HOME</ul>
          <ul>USERS PAGE</ul>
          <ul>USER DETAIL</ul>
      </div>
    </div>
  )
}

export default Navbar
