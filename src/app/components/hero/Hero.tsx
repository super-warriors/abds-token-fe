"use client";
import Image from "next/image";
import Navbar from "@/app/components/navigation/Navbar";
import Settings from "@/app/assets/icons/settings.png";
import Refresh from "@/app/assets/icons/refresh.png";
const Hero = () => {
  return (
    <div className="w-full bg-[#1C1D1E] px-[29px] md:px-[37px] pb-[128px] pt-[27px]">
      <Navbar />
      <div className="mt-[55px] flex w-full flex-col items-end justify-between md:mt-[109px] md:flex-row">
        <div className="left">
          {/* track */}
          <div className="text-[12px] text-secondary_dark md:text-[20px]">
            <span>Home</span>
            <span>/</span>
            <span className="font-bold text-white">Staking</span>
          </div>
          <h1 className="text-[26px] font-semibold md:text-[60px]">
            <span className="text-primary">Stake</span> Your Amount
          </h1>
          <p className="max-w-[562px] text-[10px] text-secondary_dark md:text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
        {/* right part */}
        <div className="mt-[22px] flex flex-col items-center md:items-end justify-end md:mt-0 mx-auto md:mx-0">
          <div className="buttons flex items-center justify-center space-x-2">
            <button className="rounded-[7px] border border-[#4B4848] bg-dark_text p-[11px]">
              <Image src={Settings} alt="settings" />
            </button>
            <div className="md:hidden">
            <ShwoingButtons />
            </div>
            <button className="rounded-[7px] border border-[#4B4848] bg-dark_text p-[11px]">
              <Image src={Refresh} alt="refresh" />
            </button>
          </div>
          <div className="hidden md:flex">
            <ShwoingButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShwoingButtons = () => {
  return (
    <button className="md:mt-[10px] space-x-1 rounded-[9px] md:rounded-[12px] text-[10px] md:text-base border border-secondary_dark px-4 py-3 md:py-[18px]">
      <span className="text-secondary_dark">showing:</span>
      <select
        name="filter"
        id="time-select"
        className="bg-transparent font-bold text-white"
      >
        <option value="us">This Year</option>
        <option value="ca">This Month</option>
        <option value="gb">This Week</option>
      </select>
    </button>
  );
};

export default Hero;
