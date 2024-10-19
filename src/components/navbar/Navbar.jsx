

const Navbar = () => {
  return (
    <nav className="flex justify-between w-[90%] m-auto h-[80px] shadow-md">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex gap-2 justify-around ">
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
      <div className="flex  justify-center items-center mr-5">
        <button className="bg-blue-500 text-white font-bold p-2 w-[70px]">SignUp</button>
        <button className="font-bold p-2 w-[70px] shadow-md">Login</button>
      </div>
    </nav>
  )
}

export default Navbar
