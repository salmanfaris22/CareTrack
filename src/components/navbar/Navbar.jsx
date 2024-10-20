import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaCog } from "react-icons/fa"; 
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openAdmin, userGet } from "../../features/user/adminCheck";
// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const {type} = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();




  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleLogout = async() => {
   try {
      await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
       document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
       localStorage.clear(); 
       dispatch(userGet(null))
       navigate("/"); 
       setOpenDropdown(false)
  } catch (error) {
      console.error('Error logging out:', error);
  } }

  const handleAdmin = () => {
    navigate("/")
    dispatch(openAdmin())
  };

  return (
    <nav className="flex justify-between w-[90%] m-auto h-[80px] bg-white fixed text-gray-800">
      <div className="w-[100px] flex justify-center items-center">
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
      <div className="flex gap-2 cursor-pointer font-bold w-[30%] justify-around items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/appointment" className="hover:text-blue-600">Appointment</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
      <div className="relative flex justify-center gap-4 items-center mr-5">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-blue-800 text-white font-bold p-2 w-[70px] rounded-lg hover:bg-blue-700 transition"
          >
            Profile
          </button>
          {openDropdown && (
            <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg">
              {!type ? (
                <div>
                  <Link  onClick={()=>setOpenDropdown(false)} to="/signup">
                    <div className="flex items-center p-2 hover:bg-gray-200 transition">
                      <FaUser className="mr-2" />
                      <span>Sign Up</span>
                    </div>
                  </Link>
                  <Link onClick={()=>setOpenDropdown(false)} to="/logine">
                    <div className="flex items-center p-2 hover:bg-gray-200 transition">
                      <FaUser className="mr-2" />
                      <span>Login</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link onClick={()=>setOpenDropdown(false)} to="/settings">
                    <div className="flex items-center p-2 hover:bg-gray-200 transition">
                      <FaCog className="mr-2" />
                      <span>Settings</span>
                    </div>
                  </Link>
                  {type=="admin" && (
                    <div 
                      onClick={handleAdmin}
                      className="flex items-center p-2 hover:bg-gray-200 transition cursor-pointer">
                      <FaUser onClick={()=>setOpenDropdown(false)} className="mr-2" />
                      <span>Admin</span>
                    </div>
                  )}
                  <div

                    className="flex items-center p-2 hover:bg-gray-200 transition cursor-pointer"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt onClick={()=>setOpenDropdown(false)}  className="mr-2" />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
