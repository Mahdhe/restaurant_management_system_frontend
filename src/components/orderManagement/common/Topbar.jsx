import React from 'react'

const Topbar = () => {
    return (
        <section className="w-full">
            {/* Top-bar */}
            <section className="w-full gap-[10px] flex flex-col">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-white w-full p-2 gap-4">

                    <div>
                        <h1 className="font-[DM_Sans] font-bold text-[22px] sm:text-[28px] leading-[100%] tracking-[0%] text-[#F0F4F8]">
                            Order Management
                        </h1>
                        <p className="font-[DM_Sans] text-[14px] sm:text-[16px] leading-[100%] tracking-[0%] text-[#556070]">
                            Manage, track, and process all restaurant orders
                        </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <button className="border-[1px] border-[#243447] py-[8px] px-[16px] bg-[#243447] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] rounded-[10px]">
                            Export
                        </button>
                        <button className="py-[8px] px-[16px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] bg-[#E67E22] rounded-[10px]">
                            + New Order
                        </button>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Topbar