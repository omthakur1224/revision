import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
    </>
  )
}

export default App
