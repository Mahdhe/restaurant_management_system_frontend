import React from 'react'

const FilterButtons = () => {
  return (
    <div className="w-fit max-w-full h-[32px] gap-[8px] flex items-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <button type="button" className="w-[80px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#E67E2214] border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#E67E22]">All Items</p>
            </button>

            <button type="button" className="w-[75px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Available</p>
            </button>

            <button type="button" className="w-[80px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Unavailable</p>
            </button>

            <button type="button" className="w-[70px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Starters</p>
            </button>

            <button type="button" className="w-[52px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Rice</p>
            </button>

            <button type="button" className="w-[60px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Pasta</p>
            </button>

            <button type="button" className="w-[75px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Desserts</p>
            </button>

            <button type="button" className="w-[60px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Drinks</p>
            </button>

            <button type="button" className="w-[45px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Veg</p>
            </button>

            <button type="button" className="w-[50px] h-[32px] shrink-0 box-border rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[16px] tracking-[0%] whitespace-nowrap text-[#8A9BB0]">Spicy</p>
            </button>

        </div>
  )
}

export default FilterButtons