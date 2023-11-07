import React from 'react'

const FirstInfo = () => {
  return (
    <div className='flex flex-col justify-center bg-[#070606] pt-10 text-white md:gap-10 md:items-center  md:px-10 lg:px-20  text-center'>
            <span className='flex border rounded-lg  px-5 py-2 pt-1 text-sm text-center bg-gray-600'>
                Introducing the raft card <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699222604/chevron_right_FILL0_wght400_GRAD0_opsz24_ddvfb8.svg" alt="" />
            </span>
    
        <h1 className='text-7xl font-semibold  pt-8'>
            Building the future of the <br />banking
        </h1>
        <p className='text-2xl text-[#BDBDBD]'>
            Experience the future of banking with RAFT. We're here to <br />empower your financial joureny 
        </p>
        <span className='rounded-full px-8 py-4  bg-[#2B892E] '>Get Started</span>

    </div>
  )
}

export default FirstInfo