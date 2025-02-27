import React,{useState, useEffect} from 'react'

function Confident() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount)=>{
      if(prevCount>=5){
        clearInterval(interval);
        return prevCount;
      }
      return prevCount + 1;
    });
  },100);
  return () => clearInterval(interval);
    
  },[]);

  return (
    <div className='flex flex-col text-white'>
      <div className='flex flex-col justify-start items-start mt-[15px] lg:ml-[50px]'>
        <h1 className='p-2 md:text-6xl lg:text-5xl  text-3xl sm:w-[50%]'>
          Confidently Shape Your Financial Future
        </h1>
        <p className='p-2  lg:text-sm lg:w-[60%] text-[#989898]'>At RAFT, we empower you to confidently shape your financial future. Our modern
        approach simplifies saving and investing, making it easier than ever</p>
      </div>
      <div className='flex flex-row justify-evenly mx-[80px] mt-[50px]'>
        <div className='w-[450px] h-[500px] border border-[#3d3e3e] rounded-lg flex flex-col mx-auto bg-[#151515]'>
          <h1 className='text-2xl  ml-[40px] mt-[20px]'>Spend Better</h1>
          <p className='text-sm ml-[40px]'>Lorem ipsum dolor, sit amet consectetur fugiat sunt eveniet itaque, eum alias culpa repellat exercitationem rem.</p>
            <div className='flex justify-center mt-[40px]'>0</div>
        </div>
        <div className='w-[450px] h-[500px] border border-[#3d3e3e] rounded-lg flex flex-col mx-auto bg-[#151515]'>
        <h1 className='text-2xl  ml-[40px] mt-[20px]'>Invest Better</h1>
          <p className='text-sm ml-[40px]'>Lorem ipsum dolor, sit amet consectetur fugiat sunt eveniet itaque, eum alias culpa repellat exercitationem rem.</p>
            <div className='flex justify-center mt-[40px]'>0</div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly items-center mt-[20px] text-2xl lg:text-5xl'>
     <div className='flex flex-col text-center'> <p className=''>{count}0+</p> <span className='text-xs'>CITIES</span></div>
     <div className='flex flex-col text-center'> <p className=''>{count}0,000+</p> <span className='text-xs'>TRANSACTIONS</span></div>
     <div className='flex flex-col text-center'> <p className=''>{count}M+</p> <span className='text-xs'>USERS</span></div>
     <div className='flex flex-col text-center'> <p className=''>{count}</p> <span className='text-xs'>USERS RATINGS</span></div>
      </div>
      <div className="absolute  w-fit lg:top-[-50] h-fit opacity-60 z-0 ">
      <img className=" lg:flex hidden h-[30%] absolute top-52" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698313456/raft/Vector_jvfnxb.png" alt="desktop" />
      <img className="lg:hidden" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698312777/raft/Grid_h3yr87.png" alt="mobile grid" />
     </div>
    </div>
  )
}

export default Confident





  
  