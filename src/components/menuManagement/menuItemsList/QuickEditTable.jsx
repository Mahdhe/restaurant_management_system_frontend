import React from 'react'

const QuickEditTable = () => {
  return (
    <section className="w-[292px] h-[336px] bg-[#1C2A38] rounded-[14px] border-[1px] border-[#FFFFFF14]">
        <div className="w-[292px] h-[54px] gap-[10px] p-[20px] pb-[10px] flex rounded-t-[14px] border-[1px] border-[#FFFFFF14]">
            <h1 className="w-[176px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Quick Edit</h1>

            <button className="w-[66px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D]">
                <p className="w-[48px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60] justify-center text-center">Selected</p>
            </button>
        </div>

        <div className="w-[292px] gap-[10px] flex flex-col p-[20px]">

            <div className="w-[252px] gap-[12px] flex py-[10px]">
                <div className="w-[252px] h-[36px] border-b-[1px] border-[#FFFFFF14] gap-[10px] flex py-[10px] justify-between">
                    <h3 className="w-[120px] h-[17px] font-[DM_Sans] font-normal text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Item</h3>
                    <p className="w-[125px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Garden Fresh Salad</p>
                </div>
            </div>

            <div className="w-[252px] gap-[12px] flex py-[10px]">
                <div className="w-[252px] h-[36px] border-b-[1px] border-[#FFFFFF14] gap-[10px] flex py-[10px] justify-between">
                    <h3 className="w-[120px] h-[17px] font-[DM_Sans] font-normal text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Price</h3>
                    <p className="w-[125px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22] text-end">LKR 650</p>
                </div>
            </div>

            <div className="w-[252px] gap-[12px] flex py-[10px]">
                <div className="w-[252px] h-[36px] border-b-[1px] border-[#FFFFFF14] gap-[10px] flex py-[10px] justify-between">
                    <h3 className="w-[120px] h-[17px] font-[DM_Sans] font-normal text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Availability</h3>
                    <button className="w-[67px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#27AE601F] border-[#27AE604D]">
                                <p className="w-[49px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60] text-center">Available</p>
                     </button>
                </div>
            </div>

            <div className="w-[252px] gap-[12px] flex py-[10px]">
                <div className="w-[252px] h-[36px] border-b-[1px] border-[#FFFFFF14] gap-[10px] flex py-[10px] justify-between">
                    <h3 className="w-[120px] h-[17px] font-[DM_Sans] font-normal text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Public Website</h3>
                    <p className="w-[125px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">Visible</p>
                </div>
            </div>

            <button className="w-[252px] h-[40px] gap-[12px] flex items-center rounded-[10px] py-[8px] px-[16px] bg-[#E67E22] justify-center">
                <p className="w-[81px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center">Open Editor</p>
            </button>

        </div>
    </section>
  )
}

export default QuickEditTable