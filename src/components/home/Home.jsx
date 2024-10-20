import Doctor from "../../assets/docter.png"

const Home = () => {
  return (
    <div className="grid grid-cols-2 place-content-center h-[100vh] w-[100vw] 
    
    ">
     <div className="flex justify-center items-center"> <img src={Doctor} className="h-[500px]" alt="Doctor" /></div>

     <div className="flex flex-col gap-5 justify-center items-start">
    <div className="font-bold text-8xl"> HealthSync</div>
    <div className="font-thin">Conveys speed and efficiency in scheduling healthcare services</div>
    <button className="p-4 bg-blue-500  rounded-lg text-white hover:bg-blue-600">Make an Appointment</button>
     </div>
    </div>
  )
}

export default Home
// bg-gradient-to-b from-white to-blue-200