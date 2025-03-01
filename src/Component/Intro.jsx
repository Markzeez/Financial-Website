import React from "react";
import Mobileimg from "../assets/png/Frame 31.png";
import Desktopimg from "../assets/png/Frame 31 (1).png";
import bloomberg from "../assets/png/bloomberg-1.png";
import cnbc from "../assets/png/cnbc-1.png";
import cnn from "../assets/png/cnn-logo 1.png";
import reuters from "../assets/png/reuters-2-1 1.png";
import vector from "../assets/png/Vector.png";

function Intro() {
  
  return (
    <div className="bg-[#070606]  relative md:mx-10 lg:mx-20  py-1 px-10 text-white text-center">
     <div className="absolute  w-fit lg:top-[-50] h-fit opacity-60 z-0 ">
      <img className=" lg:flex hidden h-[30%] absolute top-52" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698313456/raft/Vector_jvfnxb.png" alt="desktop" />
      <img className="lg:hidden" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698312777/raft/Grid_h3yr87.png" alt="mobile grid" />
     </div>
     <div className="z-10">
     <span className="bg-[#3d3b3b] text-[#DCDCDC] border border-[#989898] text-sm mt-[20px] px-[20px] rounded-full ">Introducing Raft Cards </span>
      <h1 className="my-5 p-2 md:text-6xl lg:text-8xl  m-auto text-4xl">
        Building the future of banking.
      </h1>
      <p className=" p-2 px-5 lg:my-1 lg:text-2xl lg:w-[70%] m-auto text-[#989898] mb-4">
        Experience the future of banking with RAFT. We're here to empower your
        financial journey.
      </p>
      <button className="bg-[#2B892E] py-3 px-8 text-base rounded-full  ">
        Get Started
      </button>
      <div className=" p-3 flex justify-center mt-10 lg:mt-18 ">
        <img className="lg:hidden" src={Mobileimg} />
        <img className="hidden lg:flex" src={Desktopimg} />
      </div>
      <div className="lg:mt-16 lg:text-2xl mt-6  text-[#BDBDBD]">
        <h2 className="lg:mb-14 mb-7">FEATURED AND SEEN IN</h2>
        <div className="flex lg:gap-16 gap-6 justify-center items-center lg:overflow-x-none overflow-x-auto ">
          <img className="lg:h-9 h-9 " src={vector} />
          <img className="lg:h-14 h-9" src={cnbc} />
          <img className="lg:h-14 h-9" src={bloomberg} />
          <img className="lg:h-10 h-9" src={reuters} />
          <img className="lg:h-10 h-9" src={cnn} />
          <div></div>
        </div>
      </div>
     </div>
     
    </div>
  );
}

export default Intro;
