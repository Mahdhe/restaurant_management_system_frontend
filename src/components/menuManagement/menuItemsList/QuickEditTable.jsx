import React from 'react'

const QuickEditTable = () => {
  return (
    <section className="w-[370px] max-w-full min-w-0 h-[336px] bg-[#1C2A38] rounded-[14px] border border-[#FFFFFF14] mt-4 flex flex-col overflow-hidden box-border">

      {/* Header */}
      <div className="w-full h-[54px] shrink-0 p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center justify-between rounded-t-[14px] border-b border-[#FFFFFF14] box-border">
        <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] text-[#FFFFFF]">
          Quick Edit
        </h1>

        <button type="button" className="shrink-0 flex items-center justify-center h-[24px] rounded-[999px] border border-[#27AE604D] py-[4px] px-[9px] bg-[#27AE601F] box-border">
          <p className="font-[DM_Sans] font-semibold text-[11px] leading-[16px] tracking-[0.8%] text-[#27AE60] whitespace-nowrap">
            Selected
          </p>
        </button>
      </div>

      {/* Body */}
      <div className="w-full min-w-0 flex-1 min-h-0 flex flex-col gap-[10px] p-[20px] max-sm:p-[14px] box-border">

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="shrink-0 font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Item</h3>
          <p className="min-w-0 font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#F0F4F8] text-end truncate max-w-[150px]">
            Garden Fresh Salad
          </p>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="shrink-0 font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Price</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#E67E22] text-end">
            LKR 650
          </p>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="shrink-0 font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Availability</h3>
          <button type="button" className="shrink-0 flex items-center justify-center h-[24px] rounded-[999px] border border-[#27AE604D] py-[3px] px-[9px] bg-[#27AE601F] box-border">
            <p className="font-[DM_Sans] font-semibold text-[11px] leading-[16px] tracking-[0.8%] text-[#27AE60] whitespace-nowrap">
              Available
            </p>
          </button>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="shrink-0 font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Public Website</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#3BB273] text-end">
            Visible
          </p>
        </div>

        <button type="button" className="w-full h-[40px] shrink-0 mt-auto flex items-center justify-center gap-[12px] rounded-[10px] py-[8px] px-[16px] bg-[#E67E22] box-border transition hover:brightness-110">
          <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] text-[#F0F4F8] text-center">
            Open Editor
          </p>
        </button>

      </div>
    </section>
  )
}

export default QuickEditTable