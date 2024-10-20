import Doctor from "../../assets/docter.png";
import ContactUs from "../page/Contact";
import Goal from "../page/Goal";
import Services from "../page/Services";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-900 h-screen w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center h-full w-full gap-4 p-4">
          <div className="flex justify-center items-center">
            <img src={Doctor} className="h-[500px] md:h-[600px] lg:h-[700px] object-cover" alt="Doctor" />
          </div>

          <div className="flex flex-col gap-5 justify-center items-start text-center md:text-left">
            <div className="font-bold text-4xl md:text-6xl lg:text-8xl text-gray-100">HealthSync</div>
            <div className="font-thin text-lg md:text-xl lg:text-2xl text-gray-300">
              Conveys speed and efficiency in scheduling healthcare services
            </div>
            <button className="p-4 bg-green-500 rounded-lg text-white hover:bg-green-600 transition duration-300">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
      <Goal />
      <Services/>
      <ContactUs/>
    </div>
  );
};

export default Home;
