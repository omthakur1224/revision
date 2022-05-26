import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { store } from './components/store'

function App() {
  // const [count, setCount] = useState(0)
  const {counter}=store.getState();
  return (
    <div className="App">
        <h1>Counter:{counter}</h1>
        <button>INC</button>
        <button>DEC</button>
    </div>
  )
}

export default App
