import { Link } from "react-router-dom";
import { useUserDeletController, useUserList } from "../hooks/adminControllerhook";
import { useState } from "react";

const DashBoard = () => {
  const { data } = useUserList();
  const [openPOP, setOpenPop] = useState(false);
  const [id, setId] = useState();
  const { mutate } = useUserDeletController(id);

  const handleDelete = () => {
   

    
    try {
      mutate();
    } catch (Err) {
      console.log(Err);
    }finally{
        setOpenPop(false);
    }
  };

  const handleOpenPop = (ids) => {
    setOpenPop(true);
    // console.log(ids);
    setId(ids);
  };

  const handleClosePop = () => {
    setOpenPop(false);
  };

  return (
    <div className="ml-[100px] p-10">
      {openPOP && (
        <div className="fixed top-0 left-0 z-50 flex justify-center items-center bg-opacity-50 bg-gray-800 h-full w-full">
          <div className="bg-white h-[300px] w-[500px] flex flex-col items-center justify-center rounded-lg shadow-lg transition-transform transform duration-300 scale-105">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this user?</p>
            <div className="flex gap-6">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 p-3 px-6 rounded-lg text-white font-bold shadow-md transition duration-300"
              >
                Delete
              </button>
              <button
                onClick={handleClosePop}
                className="bg-gray-500 hover:bg-gray-600 p-3 px-6 rounded-lg text-white font-bold shadow-md transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-5 text-black">User Dashboard</h1>
      <div className="grid grid-cols-1 gap-6">
        {data?.message?.map((user) => (
          <div key={user.ID} className="p-5 border grid grid-cols-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">{user.FirstName} {user.LastName}</h2>
            <div>
              <p className="">Email: {user.Email}</p>
              <p className="">Phone: {user.Phone}</p>
            </div>
            <p className=""><span className="text-green-600">User ID:</span> {user.ID}</p>

           {user.UserType != "admin" ?
            <div className="flex justify-end gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 font-bold text-white p-2 h-[40px] rounded-lg w-[100px]">MoreInfo</button>
            <Link to={`/updateUser/${user.ID}`}>
              <button className="bg-green-500 font-bold h-[40px] text-white hover:bg-green-600 p-2 rounded-lg w-[100px]">Edit</button>
            </Link>
            <button
              onClick={()=>handleOpenPop(user.ID)}
              className="bg-red-500 hover:bg-red-600 font-bold text-white h-[40px] p-2 rounded-lg w-[100px]"
            >
              Delete
            </button>
           
            </div>
            :<div className="bg-black font-bold text-white flex justify-center items-end rounded-lg p-3">Admin</div>    
        }
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
