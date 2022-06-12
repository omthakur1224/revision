import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './components/Users'
import {Routes, Route} from 'react-router-dom'
import UserDetail from './components/UserDetail'
import Home from './components/Home'
import Addresses from './components/Addresses'
import AddAddress from './components/AddAddress'
function App() {
 
  return (
    <>
      
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/users' element={ <Users/>}/>
      <Route path='/users/:id' element={<UserDetail/>}/>
      <Route path='/users/:id/addresses' element={<Addresses/>} />
      <Route path='/users/:id/addresses/add-address' element={<AddAddress/>} />
    </Routes>
    
    </>
  )
}

export default App
