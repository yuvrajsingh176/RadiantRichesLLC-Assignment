import svg1 from "./assets/d1.svg";
import star1 from "./assets/star1.svg";
import barrow from "./assets/lowArrow.svg";
import Tick from "./assets/Tick.svg";
export const Card4 = () => {
  return (
    <div className="my-8 flex md:flex-row flex-col justify-between bg-[#FFFFFF] rounded-lg">
      <div className="bg-[#FFFFFF]  md:block hidden rounded-full relative top-20 py-1 px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]"> 4</p>
      </div>
      <div className="bg-[#FFFFFF] top-[-10px] left-32  block md:hidden rounded-full relative   px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]"> 4</p>
      </div>
      <div className="flex-col items-center justify-center p-4 my-8">
        <div className="flex items-center justify-center">
          <img src={svg1} alt="my logo " />
        </div>
        <p className="flex items-center justify-center mt-2 text-[#626E79]">
          CDK
        </p>
      </div>
      <div className=" text-[16px] text-[#4B5665] p-4">
        <p>
          <span className="font-bold">CDK Resposive Builder: </span>
          An extensive library of widgets and apps,
          <br />
          and detailed step-by-step guides
        </p>
        <p className="text-[#074786] bg-[#F2F4F7] w-fit p-1 rounded-md">
          26% off
        </p>
        <p className="font-bold my-1">Main highlights</p>
        <div className="p-2 bg-[#FFF4ED] rounded-md w-full">
          <div className="mb-3 rounded-lg">
            <span className="text-[#1B88F4] bg-[#FFFFFF] rounded-lg p-1 mr-2">
              9.9
            </span>
            <span className="text-[#4B5665]">Building Responsive</span>
          </div>
          <div className="mb-3 rounded-lg">
            <span className="text-[#1B88F4] bg-[#FFFFFF] mr-2 rounded-lg p-1">
              9.9
            </span>
            <span className="text-[#4B5665]">Cool</span>
          </div>
          <div className=" ">
            <span className="text-[#1B88F4] bg-[#FFFFFF] mr-2 p-1 rounded-lg">
              9.9
            </span>
            <span className="text-[#4B5665]">Docs</span>
          </div>
        </div>
        <div className="my-4">
          <p className="text-[#2C384A] text-[16px]">Why we love it</p>
          <div className="my-1">
            <span className="flex gap-2 mb-1">
              <img src={Tick} alt="Tick" />
              <span className="text-[15px]">Documentation</span>
            </span>
            <span className="flex gap-2 mb-1">
              <img src={Tick} alt="Tick" />
              <span className="text-[15px]">Easy Use</span>
            </span>
            <span className="flex gap-2">
              <img src={Tick} alt="Tick" />
              <span className="text-[15px]">Out Of Box</span>
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center cursor-pointer  ">
          <p className="text-[#1B88F4] text-[16px]">Show more</p>
          <img src={barrow} className="mt-1 ml-1" />
        </div>
      </div>
      <div className="">
        <div className=" flex-col justify-between pl-4 pr-6">
          <div className="bg-[#F3F9FF] flex-col p-4 rounded-b-lg align-middle items-center justify-center">
            <p className=" flex justify-center text-[32px]">9.3</p>
            <p className="my-1 flex justify-center text-[14px]">Exceptional</p>
            <div className="flex justify-center">
              <img className="my-1 " src={star1} alt="star1" />
            </div>
          </div>

          <div className=" md:mt-44 mt-8 h-full w-full ">
            <button className="bg-[#1B88F4] w-full rounded-md py-2 px-16">
              <p className="text-[#FFFFFF] text-[16px]">View</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
