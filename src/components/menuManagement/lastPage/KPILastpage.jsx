import React from 'react'

const KPILastpage = () => {
  return (

    <section className="w-[1200px] max-w-full h-[120px] max-[1439px]:h-auto rounded-[14px] border-[1px] gap-[16px] flex flex-wrap min-[1440px]:flex-nowrap max-sm:justify-center bg-[#0F1923] border-[#0F1923] my-5 box-border">

        {/* card 1 */}
        <div className="w-[291px] max-w-full min-w-0 h-[120px] shrink-0 min-[1440px]:shrink rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

            <div className="w-[239px] max-w-full h-[14px] shrink-0 gap-[10px] flex items-center">
                <h1 className="w-[100px] h-[14px] whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]">SCHEDULED ITEMS</h1>
            </div>

            <div className="w-[103px] h-[56px] shrink-0 gap-[4px] flex flex-col">
                <h1 className="w-[37px] h-[36px] font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] leading-[36px] tracking-[0.8%] text-[#E67E22]">14</h1>
                <p className="w-[120px] h-[16px] whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0.8%] text-white">Time Based</p>
            </div>

        </div>

        {/* card 2 */}
        <div className="w-[291px] max-w-full min-w-0 h-[120px] shrink-0 min-[1440px]:shrink rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

            <div className="w-[239px] max-w-full h-[14px] shrink-0 gap-[10px] flex items-center">
                <h1 className="w-[100px] h-[14px] whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]">LUNCH ONLY</h1>
            </div>

            <div className="w-[200px] max-w-full h-[56px] shrink-0 gap-[4px] flex flex-col">
                <h1 className="w-[200px] max-w-full h-[36px] truncate font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] leading-[36px] tracking-[0.8%] text-white">8</h1>
                <p className="w-[140px] h-[16px] whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0.8%] text-white">12 - 3 PM</p>
            </div>

        </div>

        {/* card 3 */}
        <div className="w-[291px] max-w-full min-w-0 h-[120px] shrink-0 min-[1440px]:shrink rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

            <div className="w-[239px] max-w-full h-[14px] shrink-0 gap-[10px] flex items-center">
                <h1 className="w-[100px] h-[14px] whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]">WEEKEND ONLY</h1>
            </div>

            <div className="w-[103px] h-[56px] shrink-0 gap-[4px] flex flex-col">
                <h1 className="w-[37px] h-[36px] font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] leading-[36px] tracking-[0.8%] text-[#2980B9]">5</h1>
                <p className="w-[150px] h-[16px] whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0.8%] text-white">Sat / Sun</p>
            </div>

        </div>

        {/* card 4 */}
        <div className="w-[291px] max-w-full min-w-0 h-[120px] shrink-0 min-[1440px]:shrink rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

            <div className="w-[239px] max-w-full h-[14px] shrink-0 gap-[10px] flex items-center">
                <h1 className="w-[140px] h-[14px] whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]">CURRENTLY HIDDEN</h1>
            </div>

            <div className="w-[200px] max-w-full h-[56px] shrink-0 gap-[4px] flex flex-col">
                <h1 className="w-[200px] max-w-full h-[36px] truncate font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] leading-[36px] tracking-[0.8%] text-[#E74C3C]">6</h1>
                <p className="w-[120px] h-[16px] whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0.8%] text-[#E74C3C]">Out of Schedule</p>
            </div>

        </div>

    </section>

  )
}

export default KPILastpage