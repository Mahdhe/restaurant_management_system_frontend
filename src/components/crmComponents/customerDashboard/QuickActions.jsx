import React from 'react'

const QuickActions = () => {
  return (
    <section className="w-[300px] h-[277px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

        <div className="w-[300px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Quick Actions</h1>
        </div>

        <div className="flex flex-col w-[300px] h-[224px] gap-[10px] p-[20px]">

            <button className="w-[260px] h-[40px] rounded-[10px] gap-[8px] py-[8px] px-[16px] flex justify-center items-center bg-[#E67E22]">
                <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">+ Add Customers</p>
            </button>

            <button className="w-[260px] h-[40px] rounded-[10px] gap-[8px] py-[8px] px-[16px] flex justify-center items-center bg-[#243447] border-[1px] border-[#FFFFFF24]">
                <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Create Reservation</p>
            </button>

            <button className="w-[260px] h-[40px] rounded-[10px] gap-[8px] py-[8px] px-[16px] flex justify-center items-center bg-[#243447] border-[1px] border-[#FFFFFF24]">
                <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Add Loyalty Points</p>
            </button>

            <button className="w-[260px] h-[40px] rounded-[10px] gap-[8px] py-[8px] px-[16px] flex justify-center items-center bg-[#243447] border-[1px] border-[#FFFFFF24]">
                <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Export Data</p>
            </button>

        </div>

    </section>
  )
}

export default QuickActions
