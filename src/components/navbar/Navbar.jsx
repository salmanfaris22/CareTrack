import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaCog, FaBars } from "react-icons/fa"; 
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openAdmin, userGet } from "../../features/user/adminCheck";

const Navbar = () => {
  const { type } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setOpenDropdown(prev => !prev);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.clear(); 
      dispatch(userGet(null));
      navigate("/"); 
      setOpenDropdown(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleAdmin = () => {
    navigate("/");
    dispatch(openAdmin());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="flex bg-gray-900 justify-between w-[100%] m-auto h-[80px] from-purple-950 fixed text-white">
        <div className="w-[100px] flex justify-center items-center">
          {/* <img src={Logo} alt="Logo" /> */}
          <button onClick={toggleSidebar} className="md:hidden">
            <FaBars className="text-2xl" />
          </button>
        </div>
        <div className="hidden md:flex gap-2 cursor-pointer font-bold w-[30%] justify-around items-center">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/appointment" className="hover:text-green-500">Appointment</Link>
          <Link to="/about" className="hover:text-green-500">About</Link>
          <Link to="/contact" className="hover:text-green-500">Contact</Link>
        </div>
        <div className="relative flex justify-center gap-4 items-center mr-5">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-green-500 text-white w-[100px] font-bold p-2  rounded-lg hover:bg-green-600 transition"
            >
              Profile
            </button>
            {openDropdown && (
              <div className="absolute right-0 mt-2 w-[200px] bg-green-500 rounded-lg shadow-lg">
                {!type ? (
                  <div>
                    <Link onClick={() => setOpenDropdown(false)} to="/signup">
                      <div className="flex items-center p-2 hover:bg-green-700 transition">
                        <FaUser className="mr-2" />
                        <span>Sign Up</span>
                      </div>
                    </Link>
                    <Link onClick={() => setOpenDropdown(false)} to="/logine">
                      <div className="flex items-center p-2 hover:bg-green-700 transition">
                        <FaUser className="mr-2" />
                        <span>Login</span>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link onClick={() => setOpenDropdown(false)} to="/settings">
                      <div className="flex items-center p-2 hover:bg-green-700 transition">
                        <FaCog className="mr-2" />
                        <span>Settings</span>
                      </div>
                    </Link>
                    {type === "admin" && (
                      <div 
                        onClick={handleAdmin}
                        className="flex items-center p-2 hover:bg-green-700 transition cursor-pointer">
                        <FaUser className="mr-2" />
                        <span>Admin</span>
                      </div>
                    )}
                    <div
                      className="flex items-center p-2 hover:bg-green-700 transition cursor-pointer"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="mr-2" />
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden">
          <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex justify-between items-center p-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleSidebar} className="text-2xl">&times;</button>
            </div>
            <div className="flex flex-col p-4">
              <Link to="/" onClick={toggleSidebar} className="py-2 hover:bg-gray-200">Home</Link>
              <Link to="/appointment" onClick={toggleSidebar} className="py-2 hover:bg-gray-200">Appointment</Link>
              <Link to="/about" onClick={toggleSidebar} className="py-2 hover:bg-gray-200">About</Link>
              <Link to="/contact" onClick={toggleSidebar} className="py-2 hover:bg-gray-200">Contact</Link>
              <div className="mt-4">
                <button onClick={toggleDropdown} className="bg-blue-800 text-white font-bold p-2 w-full rounded-lg hover:bg-blue-700 transition">
                  Profile
                </button>
                {openDropdown && (
                  <div className="mt-2 w-full bg-white rounded-lg shadow-lg">
                    {!type ? (
                      <div>
                        <Link onClick={toggleSidebar} to="/signup" className="flex items-center p-2 hover:bg-gray-200 transition">
                          <FaUser className="mr-2" />
                          <span>Sign Up</span>
                        </Link>
                        <Link onClick={toggleSidebar} to="/logine" className="flex items-center p-2 hover:bg-gray-200 transition">
                          <FaUser className="mr-2" />
                          <span>Login</span>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <Link onClick={toggleSidebar} to="/settings" className="flex items-center p-2 hover:bg-gray-200 transition">
                          <FaCog className="mr-2" />
                          <span>Settings</span>
                        </Link>
                        {type === "admin" && (
                          <div 
                            onClick={handleAdmin}
                            className="flex items-center p-2 hover:bg-gray-200 transition cursor-pointer">
                            <FaUser className="mr-2" />
                            <span>Admin</span>
                          </div>
                        )}
                        <div
                          className="flex items-center p-2 hover:bg-gray-200 transition cursor-pointer"
                          onClick={handleLogout}
                        >
                          <FaSignOutAlt className="mr-2" />
                          <span>Logout</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
