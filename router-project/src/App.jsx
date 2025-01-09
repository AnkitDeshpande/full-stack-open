import { Route, Routes } from 'react-router-dom'
import './App.css'
import Clothing from './Components/Clothing'
import Electronics from './Components/Electronics'
import Health from './Components/Health'
import Kitchen from './Components/Kitchen'
import { Navbar } from './Components/Navbar'
import Sports from './Components/Sports'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/electronics' element={<Electronics />}></Route>
        <Route path='/clothing' element={<Clothing />}></Route>
        <Route path='/health' element={<Health />}></Route>
        <Route path='/kitchen' element={<Kitchen />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
      </Routes>
    </div>
  )
}

export default App
