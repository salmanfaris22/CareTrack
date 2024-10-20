/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../components/home/Home"
import Signup from "../components/auth/Signup"
import Logine from "../components/auth/Logine"
import { useEffect, useState } from "react"


const UserRout = ({setadmin}) => {
  const [adminOpen, setAdminOpen] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("type");
    if (user == "admin") {
      setAdminOpen(true);
    }
  }, []);


  return (
    <>
           <Navbar setadmin={setadmin} setAdminOpen={setAdminOpen} adminOpen={adminOpen}/>
     <Routes>
     
     <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/logine' element={<Logine setAdminOpen={setAdminOpen}/>}/>


     </Routes>
    </>
  )
}

export default UserRout