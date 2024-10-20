/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Signup from "../components/auth/Signup"
import Logine from "../components/auth/Logine"



const UserRout = () => {
 


  return (
    <>
      <Navbar />
     <Routes>
     
     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/logine' element={<Logine />}/>


     </Routes>
    </>
  )
}

export default UserRout