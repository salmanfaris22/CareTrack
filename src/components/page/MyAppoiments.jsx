import { useGetMyApoiments } from "../../hooks/pationsHoosk";


const MyAppoiments = () => {
    const { data } = useGetMyApoiments();

console.log(data);
 

    return (
        <div className="p-5 bg-gray-900 h-screen  text-white">
            <h2 className="text-2xl mb-4 mt-[70px]">My Appointments</h2>
            <div className="  grid grid-cols-3 gap-7 w-[100%]">
                {data?.message?.map((appointment) => (
                    <div key={appointment.TokenID} className="bg-gray-800 flex flex-col p-4  justify-between rounded-lg h-[250px]">
                       <div>
                       <h3 className="text-lg font-semibold">{appointment.doctor_name}</h3>
                        <p className="flex justify-between">Date: <span className="text-blue-500">{new Date(appointment.date).toLocaleDateString()}</span></p>
                        <p className="flex justify-between">Time Slot: <span className="text-green-500">{appointment.slot=="Morning" ? "10am to 12am":"2am to 4am"} </span></p>
                        <p className="flex justify-between">Patient: <span>{appointment.patient_name}</span></p>
                        <p className="flex justify-between">Place: <span>{appointment.place}</span></p>
                       </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded"
                            >
                                Cancel Appointment
                            </button>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"

                            >
                                Entroll Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppoiments;
