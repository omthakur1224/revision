import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{
      "width":400,
      "height":"90vh",
      "margin":"auto",
      "marginTop":"40px",
      "boxShadow":"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}>
      <TodoApp/>
    </div>
  )
}

export default App
