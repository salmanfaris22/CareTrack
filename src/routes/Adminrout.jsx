import { Route, Routes } from "react-router-dom"
import DashBoard from "../admin/DashBoard"

import UpdateUser from "../admin/UpdateUser"
import NavBarAdmin from "../admin/Navbar"
import AddNewUser from "../admin/AddNewUser"


const Adminrout = () => {
  return (
    <>
<NavBarAdmin/>
<Routes>

<Route path="/" element={<DashBoard/>}/>
<Route path="/updateUser/:id" element={<UpdateUser/>}/>
<Route path="/addUser" element={<AddNewUser/>}/>
</Routes>
</>
  )
}

export default Adminrout