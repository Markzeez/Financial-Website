import React from 'react'

const CardInfo2 = () => {
  return (
    <div className="flex flex-row justify-center items-center text-white ml-5 mr-5 space-x-8">
    <div  className='flex flex-col justify-center items-center '>
      <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699699029/Union_hxb3mk.png" className='h-5 items-start' alt="" />
      <h1 className='text-lg items-end'>Contactless</h1>
      <p className='text-sm'>
        Our new cards come equipped with contactless technology, allowing
        you to make swift, secure paymens with a simple tap
      </p>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699699041/Subtract_cay6k0.png" className='h-5 items-start'alt="" />
      <h1 className='text-lg items-end'>Personalization</h1>
      <p className='text-sm'>
        Customize your card to reflect your unique style. Choose from 
        a range of designs that suit your personality
      </p>
    </div>
    <div className='flex flex-col justify-center items-center '>
      <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699701895/Union_gwlng2.png" className='h-5 items-start'alt="" />
      <h1 className='text-lg items-end'>Enhanced Security</h1>
      <p className='text-sm'>
        Your peace of mind is our priority. Our cards feature advanced security measures to your transactions and data
      </p>
    </div>
  </div>
  )
}

export default CardInfo2