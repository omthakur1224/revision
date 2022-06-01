import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Payment from './components/Payment'
import {Link, useNavigate} from 'react-router-dom'
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
    </div>
  )
}

export default App
