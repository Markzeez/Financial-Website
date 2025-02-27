import React from 'react';

function Last() {
  return (
    <div className="flex flex-col text-[#989898] bg-[#070606] ">
      <h1 className="p-2 md:text-6xl lg:text-5xl  text-3xl sm:w-[40%] mt-[10px]">
        Frequently asked question
      </h1>
      <div className="flex flex-col sm:text-xs space-y-5 mt-[30px] text-[#989898]">
        <select className="bg-[#070606] outline-none border-b py-2 border-[#989898] text-sm mx-4">
          <option>How I create an account with RAFT</option>
        </select>
        <select className="bg-[#070606] outline-none border-b py-2 border-[#989898] text-sm mx-4">
          <option>
            How does RAFT ensure the security of my financial data?
          </option>
        </select>
        <select className="bg-[#070606] outline-none border-b py-2 border-[#989898] text-sm mx-4">
          <option>What type of transaction can i perform with RAFT</option>
        </select>
        <select className="bg-[#070606] outline-none border-b py-2 border-[#989898] text-sm mx-4">
          <option>
            What benefit does RAFT offer wealth for wealth management
          </option>
        </select>
      </div>
      <div className="absolute  w-fit lg:top-[-50] h-fit opacity-60 z-0 mt-[10px] ">
        <img
          className=" lg:flex hidden h-[30%] absolute top-52"
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg"
          alt="desktop"
        />
        <img
          className="lg:hidden"
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg"
          alt="mobile grid"
        />
      </div>

      <div className='lg:flex sm:fl lg:flex-row  justify-evenly  mt-[30px]'>
        <div className='border-dashed border-2 border-[#989898] w-[300px] h-[100px] flex flex-row'>
            <img src="" alt="qr code" />
            <p className='sm:text-xs '>Scan to download App on the Playstore and Appstore</p>
        </div>
        <div className='grid sm:grids-cols-2  w-[600px] h-[100px] mx-auto gap-2 grid-cols-3 py-6 sm:text-xs'>
        <b>About</b>
        <b>Legal</b>
        <b>Support</b>
        <p>Our Company</p>
        <p>Term to use</p>
        <p>Contact us</p>
        <p>Career</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        <p>Press Key</p>
        <p>About us</p>
        </div>
      </div>
     <div>
     <select className="bg-[#070606] outline-none  py-2  text-sm ">
          <option>English (United Kingdom)</option>
        </select>
     </div>
     <div>
        Raft 
     </div>
    </div>
  );
}

export default Last;
