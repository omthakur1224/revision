import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Payment from './components/Payment'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import CheckOut from './components/CheckOut'
function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate();
useEffect(()=>{
  navigate("https://rzp.io/l/2uoNpVfUOw")
},[])

  return (
    <div className="App">
      <Payment/>
      {/* <Link to="https://rzp.io/l/2uoNpVfUOw">hi</Link> */}
      <Routes>
        <Route path='/checkout' element={<CheckOut />}/>
      </Routes>
    </div>
  )
}

export default App
