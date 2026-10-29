import React from 'react'

const AlertIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#E74C3C" />
        <line x1="12" y1="7" x2="12" y2="13" stroke="#140202" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.4" fill="#140202" />
    </svg>
)

const ChefHatIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E74C3C" strokeOpacity="0.85" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
        <path d="M6 17h12" />
    </svg>
)

const CriticalAlerts = () => {
  return (
    <section className="w-[300px] h-[452px] rounded-[14px] border-[1px] p-[20px] bg-[#E74C3C0F] border-[#E74C3C73] gap-[10px] flex flex-col">

    <div className="w-[260px] h-[56px] rounded-t-[14px] pb-[10px] gap-[10px] flex">
        <div className="w-[260px] h-[53px] gap-[10px] flex">
            <div className="w-[36px] h-[36px] rounded-[6px] bg-[#E74C3C1F] flex items-center justify-center">
                <AlertIcon />
            </div>
            <div className="w-[195px] h-[34px]">
                <h1 className="w-[109px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[8%] text-[#E74C3C]">Critical Alerts</h1>
                <p className="w-[172px] h-[18px] font-[DM Sans] text-[12px] leading-[100%] tracking-[8%] text-[#8A9BB0]">Requires Immediate action</p>
            </div>
        </div>
    </div>

    <div className="w-[260px] h-[79px] rounded-[12px] border-[1px] p-[10px] bg-[#E74C3C14] border-[#E74C3C3D] gap-[10px] flex items-center">

        <div className="w-[37px] h-[37px] rounded-[6px] bg-[#E74C3C1F] flex items-center justify-center">
            <ChefHatIcon />
        </div>

        <div className="w-[114px] h-[55px] flex flex-col">
            <h1 className="w-[114px] h-[32px] font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[6%] text-[#F0F4F8]">Kitchen Queue Display</h1>
            <p className="w-[69px] h-[23px] font-[DM Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#E74C3C]">24 mins</p>
        </div>

        <div className="w-[69px] h-[32px]">
            <button className="w-[69px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] bg-[#E74C3C1F] border-[#E74C3C26] gap-[8px] flex flex-col justify-center items-center">
                <p className="font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#E74C3C]">Resolve</p>
            </button>
        </div>

    </div>

    <div className="w-[260px] h-[79px] rounded-[12px] border-[1px] p-[10px] bg-[#E74C3C14] border-[#E74C3C3D] gap-[10px] flex items-center">

        <div className="w-[37px] h-[37px] rounded-[6px] bg-[#E74C3C1F] flex items-center justify-center">
            <ChefHatIcon />
        </div>

        <div className="w-[114px] h-[55px] flex flex-col">
            <h1 className="w-[114px] h-[32px] font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[6%] text-[#F0F4F8]">Low Stock- Chicken Breast</h1>
            <p className="w-[100px] h-[23px] font-[DM Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F39C12]">2.3 Kg left</p>
        </div>

        <div className="w-[69px] h-[32px]">
            <button className="w-[69px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] bg-[#243447] border-[#FFFFFF24] gap-[8px] flex flex-col justify-center items-center">
                <p className="font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Resolve</p>
            </button>
        </div>

    </div>

    <div className="w-[260px] h-[79px] rounded-[12px] border-[1px] p-[10px] bg-[#E74C3C14] border-[#E74C3C3D] gap-[10px] flex items-center">

        <div className="w-[37px] h-[37px] rounded-[6px] bg-[#E74C3C1F] flex items-center justify-center">
            <ChefHatIcon />
        </div>

        <div className="w-[114px] h-[55px] flex flex-col">
            <h1 className="w-[114px] h-[32px] font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[6%] text-[#F0F4F8]">Payment Failure</h1>
            <p className="w-[100px] h-[23px] font-[DM Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F39C12]">ORD-0409</p>
        </div>

        <div className="w-[49px] h-[32px]">
            <button className="w-[49px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] bg-[#243447] border-[#FFFFFF24] gap-[8px] flex flex-col justify-center items-center">
                <p className="font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Retry</p>
            </button>
        </div>

    </div>

    <div className="w-[260px] h-[79px] rounded-[12px] border-[1px] p-[10px] bg-[#E74C3C14] border-[#E74C3C3D] gap-[10px] flex items-center">

        <div className="w-[37px] h-[37px] rounded-[6px] bg-[#E74C3C1F] flex items-center justify-center">
            <ChefHatIcon />
        </div>

        <div className="w-[114px] h-[55px] flex flex-col">
            <h1 className="w-[114px] h-[32px] font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[6%] text-[#F0F4F8]">Reservation Conflict</h1>
            <p className="w-[100px] h-[23px] font-[DM Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F39C12]">Table T09</p>
        </div>

        <div className="w-[49px] h-[32px]">
            <button className="w-[49px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] border-[#FFFFFF14] gap-[8px] flex flex-col justify-center items-center">
                <p className="font-[DM Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">View</p>
            </button>
        </div>

    </div>

</section>
  )
}

export default CriticalAlerts
