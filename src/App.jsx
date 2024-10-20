


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
    console.log("ldnfak");
  }
},[])

  return (
    <>
   
    {admin ? 
      <Adminrout  setadmin={setadmin}/> 
      : 
     <UserRout setadmin={setadmin} />
  }
    
    </>
  )
}

export default App
