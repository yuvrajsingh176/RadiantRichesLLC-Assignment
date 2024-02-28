import svg1 from "./assets/d1.svg";
import star1 from "./assets/star1.svg";
import barrow from "./assets/lowArrow.svg";
export const Card3 = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF]  md:block hidden rounded-full relative top-20  px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]"> 3</p>
      </div>
      <div className="bg-[#FFFFFF]  md:hidden block rounded-full relative left-36 top-8 py-1 px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]">3</p>
      </div>
      <div className="mt-4 flex md:flex-row flex-col justify-between  rounded-lg bg-[#FFFFFF]">
        <div className="flex-col items-center justify-center p-4 my-8">
          <div className="flex items-center justify-center">
            <img src={svg1} alt="my logo " />
          </div>
          <p className="flex items-center justify-center mt-2 text-[#626E79]">
            Builder 1
          </p>
        </div>
        <div className=" text-[16px] text-[#4B5665] p-4">
          <p>
            <span className="font-bold">
              WixPro 72-Inch Responsive Website Builder{" "}
            </span>
            - Comprehensive
            <br />
            Digital Platform Creation Tool, Streamlined Design Interface for
            <br />
            Professional Websites and Online Stores (Black/Blue)
          </p>
          <p className="font-bold my-2">Main highlights</p>
          <p className="ml-4">
            [What You Get]: Receive the WixPro website builder suite,
            <br />
            access to premium design templates, an extensive library of
            <br />
            widgets and apps, and detailed step-by-step guides.
          </p>
          <div className="mt-2 flex items-center cursor-pointer  ">
            <p className="text-[#1B88F4] text-[16px]">Show more</p>
            <img src={barrow} className="mt-1 ml-1" />
          </div>
        </div>
        <div>
          <div className=" flex-col justify-between pl-4 pr-6">
            <div className="bg-[#F3F9FF] flex-col p-4 rounded-b-lg align-middle items-center justify-center">
              <p className=" flex justify-center text-[32px]">9.3</p>
              <p className="my-1 flex justify-center text-[14px]">
                Exceptional
              </p>
              <div className="flex justify-center">
                <img className="my-1 " src={star1} alt="star1" />
              </div>
            </div>

            <div className="mt-10 w-full">
              <button className="bg-[#1B88F4] w-full rounded-md py-2 px-16">
                <p className="text-[#FFFFFF] text-[16px]">View</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
