import  { useState } from 'react';

const PatientForm = () => {
  const [patient, setPatient] = useState({
    id: '',
    name: '',
    phone: '',
    age: '',
    place: ''
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient Details Submitted:', patient);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">Patient Form</h2>

        

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
          Patient Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={patient.name}
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Patient Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="text"
            required
            id="phone"
            name="phone"
            value={patient.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-300 mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={patient.age}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Age"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="place" className="block text-gray-300 mb-2">
            Place
          </label>
          <input
            type="text"
            id="place"
            name="place"
            required
            value={patient.place}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter Place"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
