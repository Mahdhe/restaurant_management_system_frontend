import React from 'react'

const ImpactPreview = () => {
  return (
    <section className="w-[370px] max-w-full min-w-0 h-[221px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

        {/* Header */}
        <div className="w-[370px] max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] border-[#FFFFFF14] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center box-border">
           <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#FFFFFF]">Impact Preview</h1>
        </div>

        {/* Body */}
        <div className="w-[370px] max-w-full min-w-0 h-[168px] min-h-0 p-[20px] max-sm:p-[14px] gap-[10px] flex box-border">
             <div className="w-[370px] max-w-full min-w-0 h-[128px] py-[10px] flex flex-col box-border">

                <div className="w-[330px] max-w-full h-[36px] shrink-0 py-[10px] gap-[10px] border-b-[1px] border-[#FFFFFF14] flex justify-between items-center box-border">
                    <h3 className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Staff POS</h3>
                    <p className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#27AE60] text-end">Visible during time</p>
                </div>

                <div className="w-[330px] max-w-full h-[36px] shrink-0 py-[10px] gap-[10px] border-b-[1px] border-[#FFFFFF14] flex justify-between items-center box-border">
                    <h3 className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Public Menu</h3>
                    <p className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#E67E22] text-end">Scheduled</p>
                </div>

                <div className="w-[330px] max-w-full h-[36px] shrink-0 py-[10px] gap-[10px] border-b-[1px] border-[#FFFFFF14] flex justify-between items-center box-border">
                    <h3 className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Online Ordering</h3>
                    <p className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#E67E22] text-end">Auto hide</p>
                </div>

             </div>
        </div>

    </section>
  )
}

export default ImpactPreview