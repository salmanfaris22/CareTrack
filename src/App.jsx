


import { useEffect, useState } from 'react'
import './App.css'
import Adminrout from './routes/Adminrout'




import UserRout from './routes/UserRout'

function App() {
const [admin,setadmin]=useState(false)

useEffect(()=>{
  const type = localStorage.getItem("type")
  if(type =="admin"){
    setadmin(true)

  }
},[])

  return (
    <>
   
    {admin ? 
      <Adminrout /> 
      : 
    <UserRout />
  }
    
    </>
  )
}

export default App
