import React from 'react'

import { IoIosArrowRoundUp } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className="flex flex-wrap gap-[10px] w-full max-w-[790px] h-auto rounded-[14px] my-5 items-center">

      <div className="w-full sm:w-[280px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] flex items-center">
        <input type="text" className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#556070] w-full bg-transparent outline-none" placeholder='Search Menu Items' />
      </div>

      <div className="flex flex-wrap gap-[8px] items-center">

        <div className="flex items-center h-[32px] rounded-[999px] border-[1px] px-[12px] bg-[#E67E2214] border-[#E67E224D] shrink-0 cursor-pointer hover:bg-[#E67E2224] transition-colors duration-150">
          <button className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#E67E22] whitespace-nowrap"> All </button>
        </div>

        <div className="flex items-center h-[32px] rounded-[999px] border-[1px] px-[12px] bg-[#243447] border-[#FFFFFF14] shrink-0 cursor-pointer hover:bg-[#2C3E52] hover:border-[#FFFFFF24] transition-colors duration-150 group">
          <button className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] group-hover:text-[#F0F4F8] whitespace-nowrap transition-colors duration-150"> Available </button>
        </div>

        <div className="flex items-center h-[32px] rounded-[999px] border-[1px] px-[12px] bg-[#243447] border-[#FFFFFF14] shrink-0 cursor-pointer hover:bg-[#2C3E52] hover:border-[#FFFFFF24] transition-colors duration-150 group">
          <button className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] group-hover:text-[#F0F4F8] whitespace-nowrap transition-colors duration-150"> Unavailable </button>
        </div>

        <div className="flex items-center h-[32px] rounded-[999px] border-[1px] px-[12px] bg-[#243447] border-[#FFFFFF14] shrink-0 cursor-pointer hover:bg-[#2C3E52] hover:border-[#FFFFFF24] transition-colors duration-150 group">
          <button className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] group-hover:text-[#F0F4F8] whitespace-nowrap transition-colors duration-150"> Veg </button>
        </div>
        <div className="flex items-center h-[32px] rounded-[999px] border-[1px] px-[12px] bg-[#243447] border-[#FFFFFF14] shrink-0 cursor-pointer hover:bg-[#2C3E52] hover:border-[#FFFFFF24] transition-colors duration-150 group">
          <button className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] group-hover:text-[#F0F4F8] whitespace-nowrap transition-colors duration-150"> Spicy </button>
        </div>

      </div>

      <div className="w-[140px] h-[40px] rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF24] flex items-center justify-between sm:ml-auto shrink-0 cursor-pointer hover:bg-[#2C3E52] transition-colors duration-150">
        <p className="flex items-center font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-white">
          Sort: Price
          <IoIosArrowRoundUp size={22} />
        </p>
        <IoChevronDown size={14} className="text-[#8A9BB0]" />
      </div>

    </div>
  )
}

export default Searchbar