import React from 'react'

const DeliveryStats = () => {
  return (
    <section className="w-[300px] lg:w-full max-w-full min-w-0 h-[275px] rounded-[14px] bg-[#1C2A38] border-[1px] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

        {/* Header */}
        <div className="w-[300px] lg:w-full max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center border-[#FFFFFF14] box-border">
            <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[22px] tracking-[0%] text-[#FFFFFF]">Delivery Stats</h1>
        </div>

        {/* Body */}
        <div className="w-[300px] lg:w-full max-w-full min-w-0 h-[184px] min-h-0 py-[10px] px-[20px] max-sm:px-[14px] gap-[10px] flex box-border">

            <div className="w-[260px] lg:w-full max-w-full min-w-0 h-[164px] py-[10px] box-border">

                <div className="w-[260px] lg:w-full max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                    <p className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Push Notifications</p>
                    <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#3BB273] text-end">98.4% delivered</p>
                </div>

                <div className="w-[260px] lg:w-full max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                    <p className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">SMS Alerts</p>
                    <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#2980B9] text-end">47 sent today</p>
                </div>

                <div className="w-[260px] lg:w-full max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                    <p className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Email Announcements</p>
                    <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#E67E22] text-end">12 delivered</p>
                </div>

                <div className="w-[260px] lg:w-full max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                    <p className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">Failed Deliveries</p>
                    <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#E74C3C] text-end">2 failed</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default DeliveryStats