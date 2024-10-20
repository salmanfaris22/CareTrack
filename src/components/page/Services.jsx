
import { FaStethoscope, FaAmbulance, FaUserMd, FaHeartbeat, FaSyringe } from 'react-icons/fa';

const Services = () => {
  const services = [
    { id: 1, icon: <FaStethoscope />, title: 'General Checkup', description: 'Comprehensive health checkups to ensure your well-being.' },
    { id: 2, icon: <FaAmbulance />, title: 'Emergency Care', description: '24/7 emergency services with immediate medical attention.' },
    { id: 3, icon: <FaUserMd />, title: 'Specialist Consultations', description: 'Consult with leading specialists in various fields.' },
    { id: 4, icon: <FaHeartbeat />, title: 'Cardiology', description: 'Advanced cardiac care with a focus on prevention and treatment.' },
    { id: 5, icon: <FaSyringe />, title: 'Vaccinations', description: 'Routine vaccinations for children and adults to stay protected.' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(service => (
            <div key={service.id} className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-4xl text-blue-500 dark:text-green-400 mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
