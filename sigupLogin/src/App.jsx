import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <Login/> */}
        <SignUp/>
    </div>
  )
}

export default App
