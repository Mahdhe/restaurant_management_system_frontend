import React from 'react'

const ReservationList = () => {
  return (
    <section className="w-[1132px] h-[50px] rounded-[14px] gap-[8px] flex">

      <div className="w-[278px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] flex items-center text-center">
        <input type="text" className="font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#556070]" placeholder='Order ID /table/ waiter...' />
      </div>

      <div className="w-[128px] h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center">
        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] ">All Status</h1>
        <></>
      </div>

      <div className="w-[148px] h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center">
        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] ">All Waiters</h1>
        <></>
      </div>

      <div className="w-[140px] h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center">
        <input type="date" className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] "/>
      </div>

      <button className="w-[68px] h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] py-[8px] px-[16px] border-[#FFFFFF14] items-center">
        <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Clear</p>
      </button>

      <div className="w-[124.19px] h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] border-[#FFFFFF14] bg-[#243447] items-center">
        <></>
        <p className="font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Export CSV</p>
      </div>

    </section>
  )
}

export default ReservationList
