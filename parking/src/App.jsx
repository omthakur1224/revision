import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import VehicleDetail from './components/VehicleDetail'
import {Route, Routes} from 'react-router-dom'
import Ticket from './components/Ticket'
import Loading from './components/Loading'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <VehicleDetail/> */}
      <Routes>
          <Route path='/' element={<VehicleDetail/>}/>
          <Route path='/ticket' element={<Ticket/>}/> 
          <Route path='/loading' element={<Loading/>} />
      </Routes>
    </div>
  )
}

export default App
