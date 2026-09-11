import React from 'react'

const ReservationList = () => {
    return (

        <section className="w-[1132px] h-[50px] rounded-[14px] my-6">

            <div className="flex justify-between items-center">

                <div className="flex gap-2">
                    <h1 className="font-[JetBrains_Mono] font-bold text-[24px] leading-[100%] tracking-[0%] text-[#F0F4F8]">ORD-2024-0412</h1>
                    <div className="rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#E67E220F] text-[#E67E224D]">
                        <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22] text-center">Cooking</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="rounded-[10px] border-[1px] border-[#FFFFFF24]">
                        <p className="py-[8px] px-[16px] font-[DM_Sans] font-semibold text-[14px] leading-[100p%] tracking-[0%] text-[#8A9BB0] text-center">Transfer Table</p>
                    </button>
                    <button className="rounded-[10px] border-[1px] border-[#FFFFFF24]">
                        <p className="py-[8px] px-[16px] font-[DM_Sans] font-semibold text-[14px] leading-[100p%] tracking-[0%] text-[#8A9BB0] text-center">Merge Tables</p>
                    </button>
                    <button className="rounded-[10px] border-[1px] border-[#E74C3C26] bg-[#E74C3C1F]">
                        <p className="py-[8px] px-[16px] font-[DM_Sans] font-semibold text-[14px] leading-[100p%] tracking-[0%] text-[#E74C3C] text-center"> Cancel Order</p>
                    </button>
                    <button className="rounded-[10px] border-[1px] border-[#FFFFFF24] bg-[#E67E22]">
                        <p className="py-[8px] px-[16px] font-[DM_Sans] font-semibold text-[14px] leading-[100p%] tracking-[0%] text-[#F0F4F8] text-center">Request Bill</p>
                    </button>
            
                </div>

            </div>

        </section>


    )
}

export default ReservationList
