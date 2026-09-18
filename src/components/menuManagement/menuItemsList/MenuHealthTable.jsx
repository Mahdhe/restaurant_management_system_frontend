import React from 'react'

const MenuHealthTable = () => {
  return (
    <section className="w-[292px] h-[260px] bg-[#1C2A38] rounded-[14px] border border-[#FFFFFF14]">
      
      {/* Header */}
      <div className="w-full h-[54px] p-[20px] pb-[10px] flex items-center rounded-t-[14px] border-b border-[#FFFFFF14]">
        <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] text-[#FFFFFF]">
          Menu Health
        </h1>
      </div>

      {/* Body */}
      <div className="w-full flex flex-col gap-[10px] p-[20px]">

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">No image</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#E74C3C] text-end">3 items</p>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">No image</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#E67E22] text-end">5 items</p>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">No image</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#E74C3C] text-end">6 items</p>
        </div>

        <div className="w-full flex items-center justify-between py-[10px] border-b border-[#FFFFFF14]">
          <h3 className="font-[DM_Sans] font-normal text-[13px] leading-[100%] text-[#8A9BB0]">No image</h3>
          <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] text-[#F0F4F8] text-end">2 items</p>
        </div>

      </div>
    </section>
  )
}

export default MenuHealthTable