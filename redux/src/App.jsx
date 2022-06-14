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
    if(counter>0){
      dispatch(addCount(value))
      }
    if(counter==0 && value==1){
      dispatch(addCount(value))
    }
  }
return (
    <div className="App">
        <h1>{counter}</h1>
        <button onClick={()=>handleClick(1)}>INC</button>
        <button onClick={()=>handleClick(-1)} disabled={!counter?true:false}>DEC</button>
    </div>
  )
}

export default App
