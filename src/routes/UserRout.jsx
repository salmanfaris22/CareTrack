/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Signup from "../components/auth/Signup"
import Logine from "../components/auth/Logine"
import PatientForm from "../components/page/PatientDetails"
import AppointmentForm from "../components/page/AppointmentForm"



const UserRout = () => {
 


  return (
    <>
      <Navbar />
     <Routes>
     
     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/logine' element={<Logine />}/>
    <Route path="/patientForm" element={<PatientForm/>}/>
    <Route path="/appointmentForm" element={<AppointmentForm/>}/>


     </Routes>
    </>
  )
}

export default UserRout