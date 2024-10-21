import './App.css'
import Adminrout from './routes/Adminrout'
import UserRout from './routes/UserRout'
import { useSelector } from 'react-redux';

function App() {

  const {openadmin} = useSelector(state => state.user);


  return (
    <>
   
    {openadmin ? 
      <Adminrout  /> 
      : 
     <UserRout />
  }
    
    </>
  )
}

export default App


import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  // Check if user is not admin, redirect them
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;