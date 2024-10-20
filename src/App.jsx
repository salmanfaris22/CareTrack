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
