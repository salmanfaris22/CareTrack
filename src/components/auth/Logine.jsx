// src/components/Signup.jsx
import  { useState } from 'react';

import Img from '../../assets/hos.webp'

import { useLoginController } from '../../hooks/authController';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

// eslint-disable-next-line react/prop-types
const Logine = () => {


   

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
const {mutate} = useLoginController(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(formData); 
    try{
        
       mutate()
        // const type =  localStorage.getItem("type")
        // dispatch(type)
   
     }catch(Err){
        console.log(Err);
        console.log("daf");     
    }
   

    
    
  };

  return (
  <div className=' absolute bg-gray-200 w-[100%] h-[100%] z-[99] top-0 flex justify-center items-center'>
  <div className='flex justify-center items-center p-5 shadow-xl w-[900px] rounded-lg bg-white h-[600px]'>
  <div>
  <div className='   '>
    <Link to={"/"}>
    <FaArrowLeft className='hover:bg-slate-100 text-5xl p-3 rounded-lg ' />
    </Link>
    
    </div>
    <img src={Img} alt="" />
    </div>
      <div className="max-w-md mx-auto p-4 w-[100%]">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
         

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full rounded-lg"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg">
          Signup
        </button>
        <div>your not account <Link to={"/signup"}><span className='text-blue-500'>register</span></Link>click hear...!</div>
      </form>
    </div>
  </div>
  </div>
  );
};

export default Logine;
