
import { useDeletApoiment, useGetMyApoiments } from "../../hooks/pationsHoosk";



const MyAppoiments = () => {
    const { data } = useGetMyApoiments();
    console.log(data);
    const { mutate}  = useDeletApoiment()

 const handleDelete = (appointment)=>{
    mutate(appointment)
 }

    return (
        <div className="p-5 bg-gray-900 min-h-screen  text-white">
          
            <h2 className="text-2xl mb-4 mt-[70px]">My Appointments</h2>
            <div className="  grid grid-cols-3 gap-7 w-[100%]">
                {data?.message?.map((appointment,indes) => (
                    <div key={indes} className="bg-gray-800 flex flex-col p-4  justify-between rounded-lg h-[250px]">
                       <div>
                       <h3 className="text-lg font-semibold">{appointment.doctor_name}</h3>
                        <p className="flex justify-between">Date: <span className="text-blue-500">{new Date(appointment.date).toLocaleDateString()}</span></p>
                        <p className="flex justify-between">Time Slot: <span className="text-green-500">{appointment.slot=="Morning" ? "10.00 to 12.00":"14.00 to 16.00"} </span></p>
                        <p className="flex justify-between">Patient: <span>{appointment.patient_name}</span></p>
                        <p className="flex justify-between">Place: <span>{appointment.place}</span></p>
                       </div>
                        <div className="flex gap-2 justify-between">
                            <button
                            onClick={()=>handleDelete(appointment)}
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
