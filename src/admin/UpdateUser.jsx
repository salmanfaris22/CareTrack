import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserList, useUserUpdateController } from "../hooks/adminControllerhook";


const UpdateUser = () => {
    const { id } = useParams();
    
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
  });

  const {mutate} = useUserUpdateController(id,user)
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
  
    // console.log('Updated user data:', user);
    try{
       
        mutate()
    }catch(err){
        console.log(err);
    }
  };

  return (
   
     
      <div className=" w-full p-10 flex justify-center items-center flex-col bg-gray-200 min-h-screen">
       
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-10 rounded-lg shadow-sm w-[50%]">
        <h1 className="text-2xl font-bold mb-4">Update User</h1>
          <div>
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              name="FirstName"
              value={user.FirstName}
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              name="LastName"
              value={user.LastName}
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="Email"
              value={user.Email}
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              name="Phone"
              value={user.Phone}
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
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
