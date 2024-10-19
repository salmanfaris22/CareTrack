
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Signup from './components/auth/Signup'

function App() {


  return (
    <>
    <Navbar/>
     <Routes>

     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
     </Routes>
     
    </>
  )
}

export default App
