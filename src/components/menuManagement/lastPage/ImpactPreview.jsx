import React from 'react'

const ImpactPreview = () => {
  return (
    <section className="w-[302px] h-[221px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] ">

        <div className="w-[302px] h-[53px] rounded-t-[14px] border-[1px] border-[#FFFFFF14] p-[20px] pb-[10px] gap-[10px] flex">
           <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Impact Preview</h1> 
        </div>

        <div className="w-[302px] h-[168px] p-[20px] gap-[10px] flex">
             <div className="w-[262px] h-[128px] py-[10px] flex flex-col">

                <div className="w-[262px] h-[36px] py-[10px] gap-[10px] flex border-b-[1px] border-[#FFFFFF14] flex justify-between items-center">
                    <h3 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Staff POS </h3>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#27AE60]">Visible during time</p>
                </div>

                <div className="w-[262px] h-[36px] py-[10px] gap-[10px] flex border-b-[1px] border-[#FFFFFF14] flex justify-between items-center">
                    <h3 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Staff POS </h3>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22]">Scheduled</p>
                </div>

                <div className="w-[262px] h-[36px] py-[10px] gap-[10px] flex border-b-[1px] border-[#FFFFFF14] flex justify-between items-center">
                    <h3 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Staff POS </h3>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22]">Auto hide</p>
                </div>

             </div>
        </div>

    </section>
  )
}

export default ImpactPreview
