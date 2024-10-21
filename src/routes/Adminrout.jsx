import { Route, Routes } from "react-router-dom"
import DashBoard from "../admin/DashBoard"

import UpdateUser from "../admin/UpdateUser"
import NavBarAdmin from "../admin/Navbar"
import AddNewUser from "../admin/AddNewUser"
import ProtectedRoute from "./ProductRout"


const Adminrout = () => {
  return (
    <>
    
   
 
<NavBarAdmin/>
<Routes>
<Route element={<ProtectedRoute isAdmin={localStorage.getItem("type") === "admin"} />}>
<Route path="/" element={<DashBoard/>}/>
<Route path="/updateUser/:id" element={<UpdateUser/>}/>
<Route path="/addUser" element={<AddNewUser/>}/>
</Route>
</Routes>
</>
  )
}

export default Adminrout