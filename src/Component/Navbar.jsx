import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-start md:gap-10 md:items-center  md:px-10 lg:px-20  bg-[#070606]  py-10 px-10 text-center text-white'> 
        <div className='flex pr-5'><img className='w-15 h-10' src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699216026/Frame_3_n1yiv5.png" alt="logo" /></div>
        <div className='flex flex-row space-x-10'>
            <span>Solution</span>
            <span>Learn</span>
            <span>About</span>
        </div>
        <div className='flex flex-row space-x-10'>
            <span>Login</span>
            <span className='rounded-full px-6 py-2  bg-[#2B892E] '>Get Started</span>
        </div>
    </div>
  )
}

export default Navbar