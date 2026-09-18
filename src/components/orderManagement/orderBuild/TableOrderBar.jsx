import React from 'react'

import { IoIosArrowDown } from "react-icons/io";


const TableOrderBar = () => {
  return (
    
    <section className="w-[1132px] h-[40px] gap-[10px] mt-5 flex justify-between">

        <div className="flex gap-3 ">

            <div className="flex gap-2 justify-center items-center">
                <h1 className="w-[32px] h-[18px] fonr-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#556070]">Table:</h1>
                <button className="w-[148px] h-[40px] rounded-[10px] border-[1px] p-[10px] gap-[61px] bg-[#243447] border-[#FFFFFF14]">
                    <div className="flex justify-between items-center text-[#F0F4F8]">
                        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%]">Table 07 - B</h1>
                        <IoIosArrowDown size={16}/>
                    </div>
                </button>

            </div>

            <div className="flex gap-2 justify-center items-center">
                <h1 className="w-[32px] h-[18px] fonr-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#556070]">Waiter</h1>
                <button className="w-[148px] h-[40px] rounded-[10px] border-[1px] p-[10px] gap-[61px] bg-[#243447] border-[#FFFFFF14]">
                    <div className="flex justify-between items-center text-[#F0F4F8]">
                        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%]">Kasun Perera</h1>
                        <IoIosArrowDown size={16}/>
                    </div>
                </button>

            </div>

        </div>

        <div className="w-[80px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#F39C121F] border-[#F39C124D]">
            <h1 className="w-[62px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#F39C12]">Draft Order</h1>
        </div>

    </section>

  )
}

export default TableOrderBar
