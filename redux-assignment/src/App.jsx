import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import TodoDetails from './pages/TodoDetails'

function App() {

   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/todo/:id' element={<TodoDetails />} />
      </Routes>
   )
}

export default App
