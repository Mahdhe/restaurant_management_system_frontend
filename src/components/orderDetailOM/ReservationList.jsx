import React from 'react'

import { IoIosArrowRoundBack } from "react-icons/io";
import { MdPayment } from "react-icons/md";



const ReservationList = () => {
    return (
        <section className="w-[1132px] h-[50px] rounded-[14px] gap-[10px] flex items-center">

            <div className="w-[147.25px] h-[40px] rounded-[10px] gap-[10px] p-[10px] border-[1px] border-[#FFFFFF14] flex items-center">
                <IoIosArrowRoundBack size={20} className='text-white' />
                <p className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Back to History</p>
            </div>

            <div className="w-[172px] h-[29px] font-[DM_Sans] font-bold text-[22px] leading-[100%] tracking-[0%] text-[#F0F4F8] pt-1">
                ORD-2024-0411
            </div>

            <div className="w-[41px] h-[24px] rounded-[999px] gap-[10px] py-[4px] px-[9px] border-[1px] border-[#27AE604D] bg-[#27AE601F] flex items-center">
                <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Paid</p>
            </div>

            <div className="w-[115px] h-[24px] rounded-[999px] gap-[4px] py-[4px] px-[9px] bg-[#27AE6033] flex items-center">
                <MdPayment size={14} className='text-blue-400'/>
                <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Card Payment</p>
            </div>

        </section>
    )
}

export default ReservationList