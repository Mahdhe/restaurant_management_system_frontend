import React from 'react'

const KPIrow = () => {
  return (

    <section className="w-[1132px] h-[120px] rounded-[14px] border-[1px] gap-[16px] flex bg-[#0F1923] border-[#0F1923] my-5">

        <div className="w-[271px] h-[120px] rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[239px] h-[14px] gap-[10px] flex">
                <h1 className="w-[100px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">TOTAL ITEM</h1>
            </div>

            <div className="w-[103px] h-[56px] gap-[4px] flex flex-col">
                <h1 className="w-[37px] h-[36px] font-[DM_Sans] font-bold text-[28px] leading-[100%] tracking-[0.8%] text-[#E67E22]">45</h1>
                <p className="w-[120px] h-[16px] font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">Across 8 Categories </p>
            </div>

        </div>

        <div className="w-[271px] h-[120px] rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[239px] h-[14px] gap-[10px] flex">
                <h1 className="w-[100px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">AVAILABLE</h1>
            </div>

            <div className="w-[200px] h-[56px] gap-[4px] flex flex-col">
                <h1 className="w-[200px] h-[36px] font-[DM_Sans] font-bold text-[28px] leading-[100%] tracking-[0.8%] text-[#27AE60]">38</h1>
                <p className="w-[140px] h-[16px] font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">Visible to Staff/ Public</p>
            </div>

        </div>

        <div className="w-[271px] h-[120px] rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[239px] h-[14px] gap-[10px] flex">
                <h1 className="w-[100px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">UNAVAILABLE</h1>
            </div>

            <div className="w-[103px] h-[56px] gap-[4px] flex flex-col">
                <h1 className="w-[37px] h-[36px] font-[DM_Sans] font-bold text-[28px] leading-[100%] tracking-[0.8%] text-[#E74C3C]">7</h1>
                <p className="w-[150px] h-[16px] font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">Hidden from Ordering</p>
            </div>

        </div>

        <div className="w-[271px] h-[120px] rounded-[14px] border-[1px] p-[16px] flex flex-col gap-[8px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[239px] h-[14px] gap-[10px] flex">
                <h1 className="w-[140px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">LOW STOCK LINKED</h1>
            </div>

            <div className="w-[200px] h-[56px] gap-[4px] flex flex-col">
                <h1 className="w-[200px] h-[36px] font-[DM_Sans] font-bold text-[28px] leading-[100%] tracking-[0.8%] text-[#2980B9]">6</h1>
                <p className="w-[120px] h-[16px] font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0.8%] text-[#2980B9]">Inventory Alerts</p>
            </div>

        </div>

    </section>

  )
}

export default KPIrow