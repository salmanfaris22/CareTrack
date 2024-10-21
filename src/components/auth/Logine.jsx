// src/components/Signup.jsx
import { useState } from 'react';
import Img from '../../assets/hos.webp';
import { useLoginController } from '../../hooks/authController';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
const Logine = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const { mutate } = useLoginController(formData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    mutate();
  };

  return (
    <div className='absolute bg-gray-900 w-full h-full z-99 top-0 flex justify-center items-center'>
      <div className='flex justify-center items-center p-5 shadow-xl w-[900px] rounded-lg bg-gray-800 h-[600px]'>
        <div>
          <div>
            <Link to={"/"}>
              <FaArrowLeft className='hover:bg-gray-700 text-5xl p-3 rounded-lg text-white' />
            </Link>
          </div>
          <img src={Img} alt="Hospital" className="w-full h-auto rounded-lg" />
        </div>
        <div className="max-w-md mx-auto p-4 w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-gray-600 border bg-gray-700 text-white p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border-gray-600 border bg-gray-700 text-white p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg">
              Signup
            </button>
            <div className="text-gray-300">
             <span> Dont have an account? </span>
              <Link to={"/signup"}>
                <span className='text-blue-400'> Register </span>
              </Link>
              here!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logine;
