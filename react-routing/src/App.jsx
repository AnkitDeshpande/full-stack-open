
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { UserDetails } from './components/UserDetails'
import Users from './components/Users'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/users' element={<Users />} ></Route>
        <Route path='/users/:id' element={<UserDetails />} ></Route>
      </Routes>
    </div>
  )
}

export default App
