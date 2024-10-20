import React, { useState } from 'react';

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    patientName: '',
    age: '',
    place: '',
    slot: 'morning', // default value
    doctorId: 1, // you can modify this based on your doctor's ID
    date: '', // Added date field
  });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', appointment);
    // Here you can make an API call to submit the appointment
  };

  // Calculate the default date for last week
  const getLastWeekDate = () => {
    const lastWeekDate = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    return lastWeekDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">Book Appointment</h2>

        <div className="mb-4">
          <label htmlFor="patientName" className="block text-gray-300 mb-2">Patient Name</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={appointment.patientName}
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
            value={appointment.age}
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
            value={appointment.place}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Place"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-300 mb-2">Select Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            min={getLastWeekDate()} // Setting min to last week's date
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="slot" className="block text-gray-300 mb-2">Select Slot</label>
          <select
            id="slot"
            name="slot"
            value={appointment.slot}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="morning">Morning (10 AM - 12 PM)</option>
            <option value="evening">Evening (3 PM - 5 PM)</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="doctorId" className="block text-gray-300 mb-2">Doctor ID</label>
          <input
            type="number"
            id="doctorId"
            name="doctorId"
            value={appointment.doctorId}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Doctor ID"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
