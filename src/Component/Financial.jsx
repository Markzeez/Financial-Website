/* eslint-disable react/no-unescaped-entities */
// import { ArrowsleftRight, CircleStack, Money } from '../assets';

const Financial = () => {
  return (
    <div className=" flex flex-col ">
      <div className=" flex flex-col gap-20 my-20 px-8">
        <div className="flex flex-col text-center ">
          <h1 className="p-2 md:text-6xl lg:text-8xl lg:w-[75%] text-center m-auto text-4xl text-[#989898]">
            Your Financial Freedom,Your Way
          </h1>
          <p className=" px-3  lg:text-xl lg:w-[60%] m-auto text-[#989898] ">
            We believe that managing your finances should be effortless and
            cost-effective.That's why we offer you the freedom you deserve
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <div className="w-fit lg:top-[-50] h-fit opacity-60 z-0 ">
              <img
                className="lg:flex h-[30%]  top-52"
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698236132/raft/Frame_1000001580_sjgkqd.png"
                alt="desktop"
              />
              <img
                className="lg:hidden"
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1698236132/raft/Frame_1000001580_sjgkqd.png"
                alt="mobile grid"
              />
            </div>
           
          </div>
          <div className="text-white flex flex-col lg:flex-row  gap-8 justify-start">
            <div className="text-start flex flex-col gap-2">
              <span className=" flex items-center gap-2 font-medium">
                {/* <Money /> */}
                 <p>No minimum balance fees</p>
              </span>
              <p className="text-[#989898] text-base ">
                Say goodbye to minimum balance fees. Your account, your
                balance—no hidden charges
              </p>
            </div>
            <div className="text-start flex flex-col gap-2 font-medium">
              <span className=" flex items-center gap-2">
                {/* <CircleStack /> */}
                 <p>No monthly fees</p>
              </span>
              <p className="text-[#989898] ">
                Bank with us without worrying about monthly fees. Keep more of
                your money where it belongs—in your account
              </p>
            </div>
            <div className="text-start flex flex-col gap-2 font-medium">
              <span className=" flex items-center gap-2">
                {/* <ArrowsleftRight />  */}
                <p>No bank transfer fees</p>
              </span>
              <p className="text-[#989898] ">
                Seamlessly transfer funds without the extra cost. Send and
                receive money with zero bank transfer fees.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#48D64C]  lg:w-full sm:h-[300px] lg:h-[500px]">
        <h1 className='my-5 p-2 md:text-3xl lg:text-8xl sm:w-[30px] lg:w-[90%] text-3xl lg:ml-[10px] text-[#070606]  mt-[40px]'>Smart investments,<br />secure payments, <br />and expert guidance,<br />all in one place.</h1>
      </div>
    </div>
  );
};

export default Financial;
