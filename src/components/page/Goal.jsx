import HomeImg from '../../assets/homHosp.png';

const Goal = () => {
  return (
    <div className='w-[100%] bg-gray-900 m-auto flex flex-col md:flex-row justify-center items-center h-screen gap-10'>
      <div className='flex flex-col gap-6 w-full md:w-1/2'>
        <div className='text-5xl font-bold text-white text-center md:text-left'>
          Our Mission
        </div>

        <div className='p-6 border border-gray-700 shadow-lg rounded-lg bg-gray-800 transition duration-300 hover:shadow-2xl'>
          <div className='text-2xl font-semibold text-gray-100'>
            Optimize Patient Engagement
          </div>
          <div className='text-gray-400'>
            Understand patient trends and preferences to enhance communication and satisfaction.
          </div>
        </div>

        <div className='p-6 border border-gray-700 shadow-lg rounded-lg bg-gray-800 transition duration-300 hover:shadow-2xl'>
          <div className='text-2xl font-semibold text-gray-100'>
            Streamline Service Delivery
          </div>
          <div className='text-gray-400'>
            Identify areas for improvement in appointment processes and resource allocation.
          </div>
        </div>

        <div className='p-6 border border-gray-700 shadow-lg rounded-lg bg-gray-800 transition duration-300 hover:shadow-2xl'>
          <div className='text-2xl font-semibold text-gray-100'>
            Enhance Decision-Making
          </div>
          <div className='text-gray-400'>
            Provide actionable insights through customizable reports that focus on key performance metrics.
          </div>
        </div>
      </div>

      <img src={HomeImg} alt="Hospital" className='w-full max-w-md md:ml-10' />
    </div>
  );
}

export default Goal;
