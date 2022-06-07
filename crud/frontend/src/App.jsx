import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from '../components/Users'
import {Routes,Route} from 'react-router-dom'
import UserDetail from '../components/UserDetail'
function App() {
 
  return (
    <>
    <h1 style={{textAlign:'center'}}>User's list</h1>
    <Users/>
    <Routes>
      <Route path='/:id' element={<UserDetail/>}/>
    </Routes>
    </>
  )
}

export default App
