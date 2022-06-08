import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './components/Users'
import {Routes, Route} from 'react-router-dom'
import UserDetail from './components/UserDetail'
import Home from './components/Home'
function App() {
 
  return (
    <>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/users' element={ <Users/>}/>
      <Route path='/users/:id' element={<UserDetail/>}/>
    
    </Routes>
    
    </>
  )
}

export default App
