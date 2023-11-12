import React from 'react'

const Numberinfo = () => {
  return (
    <div className='flex flex-row justify-around items-center pt-4 py-0 md:items-center  md:px-10 lg:px-20'>
      <div><h1 className='text-5xl font-bold text-white '>50+</h1> <br /><span className='text-sm text-white'>CITIES</span></div>
      <div><h1 className='text-5xl font-bold text-white '>50,000+</h1> <br /><span className='text-sm text-white'>TRANSACTIONS</span></div>
      <div><h1 className='text-5xl font-bold text-white '>3M+</h1> <br /><span className='text-sm text-white'>USER</span></div>
      <div><h1 className='text-5xl font-bold text-white '>5</h1> <br /><span className='text-sm text-white'>USERS RATINGS</span></div>
    </div>
  )
}

export default Numberinfo