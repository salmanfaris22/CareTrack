

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
            <input 
              type="text" 
              className="w-full p-3 mt-1 border dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Your Name" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input 
              type="email" 
              className="w-full p-3 mt-1 border dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Your Email" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea 
              className="w-full p-3 mt-1 border dark:bg-gray-700 dark:text-gray-100 rounded-lg focus:outline-none focus:ring focus:border-blue-300" 
              rows="4" 
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-blue-500 dark:bg-green-500 text-white font-bold rounded-lg hover:bg-blue-600 dark:hover:bg-green-600 transition">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-400">Phone: +91 9961821977</p>
        <p className="text-gray-600 dark:text-gray-400">Email: salman@gmail.com.com</p>
        <p className="text-gray-600 dark:text-gray-400">Address: 123 Hospital Road, City, Country</p>
      </div>
    </div>
  );
};

export default ContactUs;
