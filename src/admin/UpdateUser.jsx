import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserList, useUserUpdateController } from "../hooks/adminControllerhook";

const UpdateUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const { mutate } = useUserUpdateController(id, user);
  const { data } = useUserList();

  useEffect(() => {
    const newData = data?.message?.filter((e) => e.ID == id);
    if (newData && newData.length > 0) {
      setUser(newData[0]);
    }
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full p-10 flex justify-center items-center flex-col bg-gray-900 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-10 rounded-lg shadow-sm w-[90%] md:w-[50%]">
        <h1 className="text-2xl font-bold mb-4 text-white">Update User</h1>
        <div>
          <label className="block mb-1 text-gray-300">First Name</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-700 p-2 w-full rounded-lg text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-700 p-2 w-full rounded-lg text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-700 p-2 w-full rounded-lg text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-700 p-2 w-full rounded-lg text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded-lg shadow-lg hover:bg-blue-600"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
