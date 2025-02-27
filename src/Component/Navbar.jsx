import { useState } from "react";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex justify-between items-start md:gap-10 md:items-center py-2 px-5 md:mx-10 lg:mx-1 mx-6 bg-black rounded">
      <div className="flex flex-row lg:">
        <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg" alt="Raft logo" />
        <h2 className=" text-lg text-white">Raft</h2>
      </div>
      <div className="z-30 relative ">
        <div className="md:hidden z-10">
          <button
            className="p-2  text-white  rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            navbar ? "flex" : "hidden"
          } text-white border-indigo-800 items-start bg-[#0A2640]  md:w-full w-screen px-10 py-10 
            md:py-0 md:px-0 p-5 md:bg-transparent absolute top-12 right-[-2.5rem]  md:static flex-col md:flex-row  
            md:flex justify-center text-base md:items-center font-openSans gap-10`}>
          <p onClick={() => setNavbar(!navbar)} className="cursor-pointer ">
            Products
          </p>
          <p onClick={() => setNavbar(!navbar)} className="cursor-pointer">
            Services
          </p>
          <p onClick={() => setNavbar(!navbar)} className="cursor-pointer">
            About
          </p>
          <button
            onClick={() => setNavbar(!navbar)}
            className="font-bold text-white rounded-full px-5 w-fit py-1 md:px-9 md:py-2 md:ml-[100px]">
            Log In
          </button>
          <button
            onClick={() => setNavbar(!navbar)}
            className="bg-green-400 font-bold text-white rounded-full px-5 w-fit py-1 md:px-9 md:py-2 mr-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
``;

export default NavBar;

// import React from 'react'

// function Navbar() {
//   return (
//     <div className='text-white flex flex-row justify-between'>
//       <div className='flex flex-row justify-evenly'>
//         <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg" alt="raft logo" />
//         <h3>Raft</h3>
//       </div>
//         <ul className='flex flex-row justify-center items-center gap-6 px-5'>
//           <li>Product</li>
//           <li>Service</li>
//           <li>About</li>
//         </ul>
//       <div className='flex flex-row justify-between items-center gap-3'>
//         <p>Login</p>
//         <p>Get Started</p>
//       </div>
//     </div>
//   )
// }

// export default Navbar