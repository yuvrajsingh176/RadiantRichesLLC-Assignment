import { RelatedCard } from "./RelatedCard";

export const Related = () => {
  return (
    <div className="mt-10">
      <p className="md:text-[32px]  text-[28px] ml-2 mb-8">
        Related deals you might like for
      </p>
      <div className="flex md:flex-row flex-col justify-between my-1">
        <RelatedCard />
        <RelatedCard />
        <RelatedCard />
      </div>
      <div className="flex md:flex-row flex-col justify-center  md:text-[32px] text-[20px] text-[#5C6874] mt-10 md:justify-around md:mb-8  ">
        <div className=" mb-4 md:mb-0">
          <p className="flex justify-center">Sign up and get exclusive</p>
          <p className="flex justify-center md:justify-start">special deals</p>
        </div>
        <div className="flex items-center justify-center mb-6">
          <input className="bg-[#FFFFFF] p-2 md:p-0 rounded-l-md" />
          <button className="bg-[#1B88F4] p-3 rounded-r-md text-[14px] text-[#FFFFFF]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
