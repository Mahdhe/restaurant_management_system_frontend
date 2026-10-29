import React from 'react'

import { GiCheckMark } from "react-icons/gi";

const StatusTimeline = () => {
  return (
    <section className="w-[900px] max-w-full h-[508px] rounded-[14px] p-[20px] max-sm:p-[12px] gap-[16px] flex flex-col bg-[#1C2A38] box-border">

        <div className="w-[742px] max-w-full h-[43px] shrink-0 mx-auto border-b-[1px] py-[10px] px-[5px] gap-[10px] border-[#FFFFFF14] flex items-center box-border">
            <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Status Timeline</h1>
        </div>

        <div className="w-[742px] max-w-full h-[734px] mx-auto flex items-start">

            {/* timeline rail */}
            <div className="relative w-[73px] h-[372px] shrink-0 rounded-l-[14px] border-b-[1px] border-[#FFFFFF14] py-[15px] px-[24px] gap-[30px] flex flex-col items-center bg-[#243447] box-border">

                <div className="absolute top-[31px] bottom-[31px] left-1/2 -translate-x-1/2 w-[2px] bg-[#556070] z-0"></div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] bg-[#27AE60] p-2 text-white flex items-center justify-center box-border">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] bg-[#27AE60] p-2 text-white flex items-center justify-center box-border">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] bg-[#E67E22] p-2 text-white flex items-center justify-center box-border">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] border-[1px] border-[#556070] bg-[#243447] flex items-center justify-center box-border">
                    <div className="w-[6px] h-[6px] rounded-[999px] border-[1px] border-[#556070] box-border"></div>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] border-[1px] border-[#556070] bg-[#243447] flex items-center justify-center box-border">
                    <div className="w-[6px] h-[6px] rounded-[999px] border-[1px] border-[#556070] box-border"></div>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] shrink-0 rounded-[999px] border-[1px] border-[#556070] bg-[#243447] flex items-center justify-center box-border">
                    <div className="w-[6px] h-[6px] rounded-[999px] border-[1px] border-[#556070] box-border"></div>
                </div>

            </div>

            {/* step details */}
            <div className="w-[669px] min-w-0 h-[372px] rounded-r-[14px] border-b-[1px] border-[#FFFFFF14] p-[12px] gap-[24px] flex flex-col bg-[#243447] box-border">

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Order Placed</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:12 PM · Kasun Perera</p>
                </div>

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Send to Kitchen</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:13 PM · Auto</p>
                </div>

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Cooking in Progress</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:15 PM · Est. 10 min</p>
                </div>

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Ready to Serve</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Waiting....</p>
                </div>

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Served</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">-</p>
                </div>

                <div className="flex flex-col justify-center gap-[4px] px-[12px] max-sm:px-[8px] w-[645px] max-w-full h-[38px] shrink-0 box-border">
                    <h1 className="truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Payment Completed</h1>
                    <p className="truncate font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">-</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default StatusTimeline