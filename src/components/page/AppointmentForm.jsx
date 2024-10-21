import { useState } from 'react';
import AppointmentCalendar from './demo';
import { useDispatch, useSelector } from 'react-redux';
import {  apoimentDemo, docterSelect, timessssGeting } from '../../features/user/adminCheck';
import { useApoimentSet } from '../../hooks/pationsHoosk';

import { authChack } from '../../hooks/authController';


const doctors = [
  { id: 1, name: 'Dr. John Smith (Cardiology)' },
  { id: 2, name: 'Dr. Jane Doe (Neurology)' },
  { id: 3, name: 'Dr. Emily Johnson (Orthopedics)' },
  { id: 4, name: 'Dr. Sarah Davis (Dermatology)' },

];

const AppointmentForm = () => {
    const { apoiment,time,slot } = useSelector(state => state.user);

    const {mutate} =  useApoimentSet(apoiment)


  const dispatch = useDispatch();
  const [appointment, setAppointment] = useState({
    patient_name: '',
    age: '',
    place: '',
    slot: '', 
    doctor_id: '1', 
    date: "",
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });


    if(e.target.name=="doctor_id"){
  dispatch(docterSelect(e.target.value))
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const promis =new Promise((res)=>{
        const isSuccess = true;
        setTimeout(() => {
            if (isSuccess) {
                res(dispatch(apoimentDemo(appointment))) 
            } 
          },0);
    })
    
    promis
    .then(() => {
    
        
        if(time!=null && slot !=null){
            try{
                authChack()
                mutate()
            }catch(Err){
                console.log(Err);
            }finally{
                dispatch(timessssGeting(null));
            }
           
        }
      }).theb(()=>{
        dispatch(timessssGeting(null));
      })
      .catch((error) => {
        console.error("Promise rejected:", error);
      });
  };

  return (
    <div className="min-h-screen  flex justify-center items-center bg-gray-900 p-5">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">Book Appointment</h2>

        <div className="mb-4">
          <label htmlFor="patientName" className="block text-gray-300 mb-2">Patient Name</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={appointment?.patientName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Patient Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-300 mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={appointment?.age}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Age"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-300 mb-2">Place</label>
          <input
            type="text"
            id="place"
            name="place"
            value={appointment?.place}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Place"
            required
          />
        </div>

        {/* Doctor Selection Dropdown */}
        <div className="mb-4">
          <label htmlFor="doctorId" className="block text-gray-300 mb-2">Select Doctor</label>
          <select
            id="doctor_id"
            name="doctor_id"
            value={appointment?.doctor_id}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            
            {doctors.map((doctor) => (
              <option key={doctor?.id} value={doctor?.id}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Book Appointment
        </button>
      </form>
      <AppointmentCalendar setAppointment={setAppointment} appointment={appointment} />
    </div>
  );
};

export default AppointmentForm;
