
// import Logo from '../../assets/logo.webp';

import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Navbar = () => {
 
  return (
    <nav className=" flex justify-between w-[90%] m-auto h-[80px] bg-white  fixed text-gray-800">
      <div className="w-[100px] flex justify-center items-center">
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
      <div className="flex gap-2 cursor-pointer font-bold w-[30%] justify-around items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/appointment" className="hover:text-blue-600">Appointment</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
      <div className="flex justify-center gap-4 items-center mr-5">
        <Link to="/signup">
          <button className="bg-blue-500 text-white font-bold p-2 w-[100px] rounded-lg hover:bg-blue-600 transition">Sign Up</button>
        </Link>
        <Link to="/logine">
          <button className="font-bold p-2 w-[100px] text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">Login</button>
        </Link>
        {/* <Link to="/admin" >
          {openAdmin && <button className="bg-blue-800 text-white font-bold p-2 w-[70px] rounded-lg hover:bg-blue-700 transition">ADMIN</button>}
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
