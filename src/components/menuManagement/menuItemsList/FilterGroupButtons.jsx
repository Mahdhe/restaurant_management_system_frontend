import React from 'react'

const FilterGroupButtons = () => {
    return (

        <div className="w-fit h-[32px] gap-[8px] flex">

            <button className="w-[80px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#E67E2214] border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#E67E22]">All Items</p>
            </button>

            <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Available</p>
            </button>

            <button className="w-[80px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Unavailable</p>
            </button>

            <button className="w-[70px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Starters</p>
            </button>

            <button className="w-[52px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Rice</p>
            </button>

            <button className="w-[60px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Pasta</p>
            </button>

            <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Desserts</p>
            </button>

            <button className="w-[60px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Drinks</p>
            </button>

            <button className="w-[45px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Veg</p>
            </button>

            <button className="w-[50px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Spicy</p>
            </button>


        </div>

    )
}

export default FilterGroupButtons