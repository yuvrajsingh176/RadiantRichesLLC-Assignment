import svg1 from "./assets/d1.svg";
import star2 from "./assets/star2.svg";
import barrow from "./assets/lowArrow.svg";
import Diamond from "./assets/Diamond.svg";
export const Card2 = () => {
  return (
    <div>
      <div className="bg-[#FF7724] h-fit w-fit md:right-2 flex   md:flex-row gap-1 relative   rounded-r-md p-1  top-12   text-[#FFFFFF]">
        <img src={Diamond} alt="Diamond" />

        <span className="text-[16px]">Best Value</span>
      </div>
      <div className="bg-[#FFFFFF]  md:block hidden rounded-full relative top-20 py-1 px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]"> 2</p>
      </div>
      <div className="bg-[#FFFFFF]  md:hidden block rounded-full relative left-36 top-4 py-1 px-3 right-4 h-fit w-fit">
        <p className="text-[#626E79]">2</p>
      </div>
      <div className=" flex md:flex-row flex-col justify-between  rounded-lg bg-[#FFFFFF]">
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
              SiteCraft 68-Inch Ultimate Web Design Studio{" "}
            </span>
            - Advanced Site
            <br />
            Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic
            <br />
            Websites and E-commerce Platforms (Green/White)
          </p>
          <p className="font-bold my-2">Main highlights</p>
          <p className="ml-4">
            [What You Get]: Gain access to the SiteCraft design studio,
            <br />
            featuring a robust selection of design elements, SEO
            <br />
            optimization tools, and e-commerce integrations.
          </p>
          <div className="mt-2 flex items-center cursor-pointer  ">
            <p className="text-[#1B88F4] text-[16px]">Show more</p>
            <img src={barrow} className="mt-1 ml-1" />
          </div>
        </div>
        <div>
          <div className=" flex-col justify-between pl-4 pr-6">
            <div className="bg-[#F3F9FF] flex-col p-4 rounded-b-lg align-middle items-center justify-center">
              <p className=" flex justify-center text-[32px]">9.5</p>
              <p className="my-1 flex justify-center text-[14px]">
                Exceptional
              </p>
              <div className="flex justify-center">
                <img className="my-1 " src={star2} alt="star2" />
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
