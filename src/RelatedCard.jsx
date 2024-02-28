import Download from "./assets/d1.svg";
export const RelatedCard = () => {
  return (
    <div className="bg-[#FFFFFF] px-7 rounded-md">
      <div className="flex items-center justify-center my-1 p-8">
        <img src={Download} alt="downlaod" />
      </div>
      <div className="">
        <div className="flex gap-2 items-start justify-start">
          <p className="text-[#074786] bg-[#F2F4F7] w-fit p-1 rounded-md">
            26% off
          </p>
          <p className="text-[#074786] bg-[#F2F4F7] w-fit p-1 rounded-md">
            Limited Time
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[#626E79] font-bold text-[16px]">Webbuilder 1</p>
        </div>
        <div className="text-[#626E79] text-[16px]">
          <p>Computer Modern clasic with wix </p>
          <p>support</p>
        </div>
        <div className="flex items-center justify-between w-3/4">
          <p className="text-[#5C6874] text-[20px]">$39.96</p>
          <p className="text-[#9FA9B3] text-[14px] mt-1">$49.96</p>
          <p className="text-[#EF4C5D]  text-[13px] mt-1">(20% Off)</p>
        </div>
        <div>
          <button className="text-[#FFFFFF] text-[16px] py-2 w-full bg-[#1B88F4] rounded-md my-2">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};
