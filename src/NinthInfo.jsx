import React from "react";

const NinthInfo = () => {
  return (
    <div className="flex flex-row justify-between align-text-top items-center text-white  md:items-center  md:px-10 lg:px-20 ">
      <div className=" flex flex-row justify-center px-10 space-x-5">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699525978/Union_hs6gwu.png"
          className="w-5 h-5"
          alt=""
        />
        <h1 className="text-lg text-white justify-start items-start">
          No mininum balance fees
        </h1>
       
      </div>
      <div className="flex flex-row justify-center px-10 space-x-5">
      <img 
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699525978/Vector_btibuu.png"
          className="w-5 h-5"
          alt=""
        />
        <h1 className="text-lg text-white justify-start items-start ">
        No Monthly Fees
        </h1>
        
      </div>
      <div className="flex flex-row justify-center px-10 space-x-5">
      <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699525978/Vector_Stroke_tt_orducm.png"
          className="w-5 h-5"
          alt=""
        />
        <h1 className="text-lg text-white justify-start items-start">
        No bank transfer fees
        </h1>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default NinthInfo;
