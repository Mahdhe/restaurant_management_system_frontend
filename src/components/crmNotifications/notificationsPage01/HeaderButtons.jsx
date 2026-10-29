import React from 'react'

const HeaderButtons = () => {
    return (
        <section className="w-[1132px] max-w-full min-w-0 h-[40px] max-sm:h-auto gap-[12px] flex flex-wrap justify-end max-sm:justify-start items-center box-border">

            <div className="w-[130px] h-[40px] shrink-0 gap-[12px] flex">
                <button type="button" className="w-[130px] h-[40px] shrink-0 rounded-[10px] border-[1px] py-[8px] px-[16px] flex justify-center items-center gap-[10px] bg-[#243447] border-[#FFFFFF24] box-border transition hover:bg-[#2D4157]">
                    <p className="whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Mark All Read</p>
                </button>
            </div>

            <div className="w-[160px] h-[40px] shrink-0 gap-[12px] flex">
                <button type="button" className="w-[160px] h-[40px] shrink-0 rounded-[10px] border-[1px] py-[8px] px-[16px] flex justify-center items-center gap-[10px] bg-[#243447] border-[#FFFFFF24] box-border transition hover:bg-[#2D4157]">
                    <p className="whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Clear Notifications</p>
                </button>
            </div>

            <div className="w-[120px] h-[40px] shrink-0 gap-[12px] flex">
                <button type="button" className="w-[120px] h-[40px] shrink-0 rounded-[10px] border-[1px] py-[8px] px-[16px] flex justify-center items-center gap-[10px] bg-[#E67E22] border-[#FFFFFF24] box-border transition hover:brightness-110">
                    <p className="whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Export Logs</p>
                </button>
            </div>

        </section>
    )
}

export default HeaderButtons