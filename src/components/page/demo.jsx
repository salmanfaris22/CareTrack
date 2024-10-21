import { useDispatch, useSelector } from "react-redux";

import { useDateList } from "../../hooks/pationsHoosk";
import { timessssGeting } from "../../features/user/adminCheck";
import { useState } from "react";

const AppointmentCalendar = () => {
  const { data } = useDateList();
  const { doctor_id } = useSelector((state) => state.user);
const [selected,setSlect]=useState()
  const dispatch = useDispatch();

  const newzDar = data?.message?.filter((e) => e.doctor_id == doctor_id);

  // {new Date(day.date_time).toISOString().split('T')[0]}

  //  console.log("bh",doctor_id,newzDar)

function hnadleCLike(day){
        setSlect(day.id)
        dispatch(timessssGeting({day}));
}



  return (
    <div className="flex h-screen overflow-auto flex-col items-center bg-gray-900 p-5">
      <h2 className="text-3xl font-bold mt-[80px] text-green-500 mb-6">
        Book Appointment
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {newzDar?.map((day) => (
          <div
            key={day.id}
            className="bg-gray-800 h-[200px] text-white p-4 flex justify-between flex-col rounded-lg"
          >
            <div className=" justify-between">
              <h3 className="text-lg font-semibold">Book now</h3>
              <p className="text-3xl font-bold">
                {" "}
                {new Date(day?.date_time).toISOString().split("T")[0]}
              </p>
            </div>

            <div className="mt-4">
              {day.slot == "Morning" ? (
                <div>10.00 to 12.00</div>
              ) : (
                <div>14.00 to 16.00</div>
              )}

              {day?.available ? (
               



               <button
                  className={`w-full p-2 rounded-md transition duration-300 mt-2    ${selected==day?.id ? "bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"}`}
                  onClick={() => hnadleCLike(day)}
                >
                  {day.slot}
                </button>
                
                
              ) : (
                <div
                  className={`w-full p-2 rounded-md transition duration-300 mt-2 bg-gray-500 flex justify-center items-center`}
                >
                  Sloot Booked
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentCalendar;
