/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Signup from "../components/auth/Signup"
import Logine from "../components/auth/Logine"
import AppointmentForm from "../components/page/AppointmentForm"
import MyAppoiments from "../components/page/MyAppoiments"





const UserRout = () => {
 


  return (
    <>
      <Navbar />
     <Routes>
     
     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/logine' element={<Logine />}/>

    <Route path="/appointment" element={<AppointmentForm/>}/>
    <Route path="/myAppoiments" element={<MyAppoiments/>}/>


     </Routes>
    </>
  )
}

export default UserRout