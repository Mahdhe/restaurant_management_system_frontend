import React from 'react'

const FilterButtons = () => {
  return (
    <div className="w-fit h-[32px] gap-[8px] flex">

            <button className="w-[110px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#E67E2214] border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#E67E22]">All Customers</p>
            </button>

            <button className="w-[45px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">VIP</p>
            </button>

            <button className="w-[80px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Frequent</p>
            </button>

            <button className="w-[45px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">New</p>
            </button>

            <button className="w-[60px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Inactive</p>
            </button>

            <button className="w-[70px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Walk-In</p>
            </button>

            <button className="w-[85px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Reservation</p>
            </button>


        </div>
  )
}

export default FilterButtons
