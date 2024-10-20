

const Appointment = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Appointment Details</h1>

        <div className="border p-6 rounded-lg bg-gray-800 mb-6">
          <h2 className="text-2xl font-bold mb-4">Patient Information</h2>
          <p><strong>Token ID:</strong> 1</p>
          <p><strong>Patient Name:</strong> John Doe</p>
          <p><strong>Age:</strong> 30</p>
          <p><strong>Place:</strong> New York</p>
          <p><strong>Date:</strong> 2024-10-21</p>
        </div>

        <div className="border p-6 rounded-lg bg-gray-800">
          <h2 className="text-2xl font-bold mb-4">Doctor Information</h2>
          <p><strong>Doctor Name:</strong> Dr. Smith</p>
          <p><strong>Specialization:</strong> Cardiology</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
