import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TodoApp/>
    </div>
  )
}

export default App
