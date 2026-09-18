import React from 'react'

const QuickEditTable = () => {
  return (
    <section className="w-[292px] h-[336px] bg-[#1C2A38] rounded-[14px] border border-[#FFFFFF14] mt-4">
      
      {/* Header */}
      <div className="w-full h-[54px] p-[20px] pb-[10px] flex items-center justify-between rounded-t-[14px] border-b border-[#FFFFFF14]">
        <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] text-[#FFFFFF]">
          Quick Edit
        </h1>

        <button className="flex items-center justify-center h-[24px] rounded-[999px] border border-[#27AE604D] py-[4px] px-[9px] bg-[#27AE601F]">
          <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60] whitespace-nowrap">
            Selected
          </p>
        </button>
      </div>

      {/* Body */}
      <div className="w-full flex flex-col gap-[10px] p-[20px]">

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">Item</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#F0F4F8] text-end truncate max-w-[150px]">
            Garden Fresh Salad
          </p>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">Price</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#E67E22] text-end">
            LKR 650
          </p>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">Availability</h3>
          <button className="flex items-center justify-center h-[24px] rounded-[999px] border border-[#27AE604D] py-[3px] px-[9px] bg-[#27AE601F]">
            <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60] whitespace-nowrap">
              Available
            </p>
          </button>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">Public Website</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#3BB273] text-end">
            Visible
          </p>
        </div>

        <button className="w-full h-[40px] flex items-center justify-center gap-[12px] rounded-[10px] py-[8px] px-[16px] bg-[#E67E22]">
          <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] text-[#F0F4F8] text-center">
            Open Editor
          </p>
        </button>

      </div>
    </section>
  )
}

export default QuickEditTable