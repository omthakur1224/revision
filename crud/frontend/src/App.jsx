import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from '../components/Users'

function App() {
 
  return (
    <>
    <h1 style={{textAlign:'center'}}>User's list</h1>
    <Users/>
    </>
  )
}

export default App
