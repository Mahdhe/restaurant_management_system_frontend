import React from 'react'

const Publishing = () => {
  return (
    <section className="w-[370px] max-w-full min-w-0 h-[221px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

      {/* Header */}
      <div className="w-[370px] max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center border-[#FFFFFF14] box-border">
        <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#FFFFFF]">Publishing</h1>
      </div>

      {/* Body */}
      <div className="w-[370px] max-w-full min-w-0 h-auto flex-1 min-h-0 gap-[10px] flex flex-col p-[20px] max-sm:p-[14px] box-border">

        <div className="w-full gap-[10px] flex justify-between items-center py-[10px] border-b-[1px] border-[#FFFFFF14] box-border">
          <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Staff POS</h2>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#27AE60] text-end">Visible</p>
        </div>

        <div className="w-full gap-[10px] flex justify-between items-center py-[10px] border-b-[1px] border-[#FFFFFF14] box-border">
          <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Public Menu</h2>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#27AE60] text-end">Visible</p>
        </div>

        <div className="w-full gap-[10px] flex justify-between items-center py-[10px] border-b-[1px] border-[#FFFFFF14] box-border">
          <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Online Order</h2>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#27AE60] text-end">Visible</p>
        </div>

      </div>

    </section>
  )
}

export default Publishing