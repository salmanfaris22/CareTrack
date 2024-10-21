import { useState } from 'react';
import { useAddUser } from '../hooks/adminControllerhook';

const AddNewUser = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    userType: 'user',
  });
  
  const { mutate } = useAddUser(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await mutate();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-5 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Phone</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">User Type</label>
            <select
              name="userType"
              value={userData.userType}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-600 rounded w-full bg-gray-700 text-gray-200"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded transition duration-200"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
