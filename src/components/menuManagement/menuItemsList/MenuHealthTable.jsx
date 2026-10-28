import React from 'react'

const MenuHealthTable = () => {
  return (
    <section className="w-[370px] max-w-full min-w-0 h-[260px] bg-[#1C2A38] rounded-[14px] border border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

      {/* Header */}
      <div className="w-full h-[54px] shrink-0 p-[20px] max-sm:px-[14px] pb-[10px] flex items-center rounded-t-[14px] border-b border-[#FFFFFF14] box-border">
        <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] text-[#FFFFFF]">
          Menu Health
        </h1>
      </div>

      {/* Body */}
      <div className="w-full min-w-0 flex-1 min-h-0 flex flex-col gap-[10px] p-[20px] max-sm:p-[14px] box-border">

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="min-w-0 truncate font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">No image</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#E74C3C] text-end">3 items</p>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="min-w-0 truncate font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">No description</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#E67E22] text-end">5 items</p>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="min-w-0 truncate font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Low Stock</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#E74C3C] text-end">6 items</p>
        </div>

        <div className="w-full gap-[10px] flex items-center justify-between py-[10px] border-b border-[#FFFFFF14] box-border">
          <h3 className="min-w-0 truncate font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[16px] text-[#8A9BB0]">Scheduled Off</h3>
          <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] text-[#F0F4F8] text-end">2 items</p>
        </div>

      </div>
    </section>
  )
}

export default MenuHealthTable