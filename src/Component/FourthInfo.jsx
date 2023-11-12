import React from "react";

const FourthInfo = () => {
  return (
    <div className=" flex flex-col justify-center w-full gap-10 items-center md:gap-10 md:items-center  md:px-10 lg:px-20  bg-[#070606] ">
      <div className="flex flex-row w-fit justify-center items-center gap-10">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699459298/Frame_88_hnzxd4.png"
          className="flex-[2] object-cover h-[20rem] "
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699459298/Frame_32_i3wyaa.png"
          className="flex-[1] h-[20rem]  object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-row w-fit justify-center items-center gap-10">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699459298/Frame_36_kjvh3j.png"
          className="flex-[1] h-[20rem]  object-cover"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699459298/Frame_34_j6ifsu.png"
          className="flex-[2] object-cover h-[20rem] "
          alt=""
        />
      </div>
    </div>
  );
};

export default FourthInfo;
