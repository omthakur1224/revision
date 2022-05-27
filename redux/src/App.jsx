import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { addCount } from './components/action';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  // const [count, setCount] = useState(0)
  
  const dispatch=useDispatch();

  const counter=useSelector((store)=>store.counter)

  const handleClick=(value)=>{
    
      dispatch(addCount(value))
  }

  return (
    <div className="App">
        <h1>Counter:{counter}</h1>
        <button onClick={()=>handleClick(1)}>INC</button>
        <button onClick={()=>handleClick(-1)}>DEC</button>
    </div>
  )
}

export default App
