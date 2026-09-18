import React from 'react'

import { GiCheckMark } from "react-icons/gi";



const StatusTimeline = () => {
  return (
    <section className="w-[782px] h-[508px] rounded-[14px] p-[20px] gap-[16px] flex flex-col bg-[#1C2A38]">

        <div className="w-[742px] h-[43px] border-b-[1px] py-[10px] px-[5px] gap-[10px] border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Status Timeline</h1>
        </div>

        <div className="w-[742px] h-[734px] flex">

            <div className="relative w-[73px] h-[372px] rounded-l-[14px] py-[10px] px-[24px] gap-[30px] flex flex-col items-center bg-[#243447]">

                <div className="absolute top-[30px] bottom-[30px] left-1/2 -translate-x-1/2 w-[2px] bg-[#556070] z-0"></div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] bg-[#27AE60] p-2 text-white">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] bg-[#27AE60] p-2 text-white">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] bg-[#E67E22] p-2 text-white">
                    <GiCheckMark size={16}/>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] border-[1px] border-[#556070] bg-[#243447]">
                    <div className="w-[6px] h-[6px] mt-[13px] ml-[13px] rounded-[999px] border-[1px] border-[#556070]"></div>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] border-[1px] border-[#556070] bg-[#243447]">
                    <div className="w-[6px] h-[6px] mt-[13px] ml-[13px] rounded-[999px] border-[1px] border-[#556070]"></div>
                </div>

                <div className="relative z-10 w-[32px] h-[32px] rounded-[999px] border-[1px] border-[#556070] bg-[#243447]">
                    <div className="w-[6px] h-[6px] mt-[13px] ml-[13px] rounded-[999px] border-[1px] border-[#556070]"></div>
                </div>

            </div>

            <div className="w-[669px] h-[372px] rounded-r-[14px] border-b-[1px] p-[12px] gap-[24px] flex flex-col bg-[#243447]">
                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Order Placed</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:12 PM · Kasun Perera</p>
                </div>

                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Send to Kitchen</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:13 PM · Auto</p>
                </div>

                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Cooking in Progress</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">7:15 PM · Est. 10 min</p>
                </div>

                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Ready to Serve</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Waiting....</p>
                </div>

                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Served</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">-</p>
                </div>

                <div className="flex flex-col gap-[4px] px-[12px] w-[645px] h-[38px]">
                    <h1 className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Payment Completed</h1>
                    <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">-</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default StatusTimeline