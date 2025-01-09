
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import PrivateComponent from './components/PrivateComponent'
import { UserDetails } from './components/UserDetails'
import Users from './components/Users'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/users' element={<Users />} >
        </Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/users/:id' element={
          <PrivateComponent>
            <UserDetails />
          </PrivateComponent>} >
        </Route>
      </Routes>
    </div>
  )
}

export default App
