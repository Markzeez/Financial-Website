import React from 'react';
// import { ArrowsleftRight, CircleStack, Money } from 'react-icons';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function Next() {
  // Custom Next Arrow
  // const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
  //   <button
  //     onClick={onClick}
  //     className="absolute bottom-[-30px] right-4 transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
  //   >
  //     <FaArrowRight />
  //   </button>
  // );

  // // Custom Prev Arrow
  // const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler }) => (
  //   <button
  //     onClick={onClick}
  //     className="absolute bottom-[-30px] right-[50px] transform -translate-y-1/2 z-10 p-2 bg-gray-200 text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
  //   >
  //     <FaArrowLeft />
  //   </button>
  // );

  // Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="flex flex-col items-center text-white mt-[50px] space-y-10">
      <span className="text-sm mt-[20px] text-[#b4ec89]">INTRODUCING</span>
      <div className="text-center space-y-3">
        <h1 className=" p-2 md:text-6xl lg:text-6xl  m-auto text-4xl">
          Introducing RAFT NEXT- Gen Card
        </h1>
        <p className="p-2 px-5 lg:my-1 lg:text-2xl lg:w-[50%] m-auto text-[#989898] mb-4">
          Discover RAFT's innovation-our new cards. Elevate your banking
          experience with cutting-edge features, security, and unprecedented
          convenience.
        </p>
      </div>
      <div className="w-[250px] h-[400px] border bg-[#253e56] rounded">3</div>
      <div className="text-white flex flex-col lg:flex-row mx-auto ml-[10px] ">
        <div className="text-start flex flex-col gap-2">
          <span className=" flex items-center gap-2 font-medium">
            {/* <Money /> */}
            <p>Contactless</p>
          </span>
          <p className="text-[#989898] text-base ">
            Our new cards come equipped with contactless technology, allowing
            you to make swift, secure paymens with a simple tap
          </p>
        </div>
        <div className="text-start flex flex-col gap-2  font-medium">
          <span className=" flex items-center gap-2">
            {/* <CircleStack /> */}
            <p>Personalization</p>
          </span>
          <p className="text-[#989898] ">
            Customize your card to reflect your unique style. Choose from a
            range of designs that suit your personality{' '}
          </p>
        </div>
        <div className="text-start flex flex-col gap-2 font-medium">
          <span className=" flex items-center gap-2">
            {/* <ArrowsleftRight /> */}
            <p>Enhanced Security</p>
          </span>
          <p className="text-[#989898] ">
            Your peace of mind is our priority. Our cards feature advanced
            security measures to your transactions and data{' '}
          </p>
        </div>
      </div>
      <div className="w-full flex sm:flex-col lg:h-[500px] bg-[#48D64C] text-[#070606] text-sm leading-tight  ">
        <div className="text-5xl text-center mt-[40px]">
          Join over 3 million <br />
          member
        </div>
        <Slider {...settings} className="flex flex-row justify-evenly mx-auto mt-[30px]">
          <div className="flex flex-col ml-[50px] space-y-12  border-l-2 border-[#525355] px-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              cumque, cum suscipit laudantium asperiores praesentium vel nobis
              molestias autem inventore dolorem eos ut repudiandae dicta commodi
              quisquam quidem quasi, debitis officia culpa consectetur incidunt
              delectus blanditiis quo. Unde, sit. Accusantium et similique
              ratione numquam id. Quidem cupiditate modi totam autem!
            </p>
            <div className="flex flex-col">
              <h1>Robert Fox</h1>
              <p>Happy RAFT user</p>
            </div>
          </div>
          <div className="flex flex-col ml-[50px] space-y-12 border-l-2 border-[#525355] px-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              cumque, cum suscipit laudantium asperiores praesentium vel nobis
              molestias autem inventore dolorem eos ut repudiandae dicta commodi
              quisquam quidem quasi, debitis officia culpa consectetur incidunt
              delectus blanditiis quo. Unde, sit. Accusantium et similique
              ratione numquam id. Quidem cupiditate modi totam autem!
            </p>
            <div className="flex flex-col">
              <h1>Robert Fox</h1>
              <p>Happy RAFT user</p>
            </div>
          </div>
          <div className="flex flex-col ml-[50px] space-y-12 border-l-2 border-[#525355] px-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              cumque, cum suscipit laudantium asperiores praesentium vel nobis
              molestias autem inventore dolorem eos ut repudiandae dicta commodi
              quisquam quidem quasi, debitis officia culpa consectetur incidunt
              delectus blanditiis quo. Unde, sit. Accusantium et similique
              ratione numquam id. Quidem cupiditate modi totam autem!
            </p>
            <div className="flex flex-col">
              <h1>Robert Fox</h1>
              <p>Happy RAFT user</p>
            </div>
          </div>
        </Slider>
        <div className='flex  gap-3 justify-end mt-[20px] mr-[100px]'>
          <div className='rounded-full w-[40px] h-[40px] bg-white'></div>
          <div className='rounded-full w-[40px] h-[40px] bg-white'></div>
        </div>
      </div>
    </div>
  );
}

export default Next;
