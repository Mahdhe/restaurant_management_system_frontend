import React from 'react'

const Actions = () => {
  return (
    <section className="w-[330px] h-[229px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

      <div className="w-[330px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex flex-col border-[#FFFFFF14]">
        <h1 className="w-[68px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Actions</h1>
      </div>

      <div className="w-[330px] h-[176px] p-[20px] gap-[10px] flex flex-col">
        <div className="w-[290px] h-[136px] gap-[8px] flex flex-col">

          <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] bg-[#243447] border-[#FFFFFF24] flex justify-center items-center">
            <p className="w-[87px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Print Receipt</p>
          </button>

          <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] bg-[#243447] border-[#FFFFFF24] flex justify-center items-center">
            <p className="w-[87px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Email Receipt</p>
          </button>

          <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] bg-[#E74C3C1F] border-[#E74C3C26] flex justify-center items-center">
            <p className="w-[200px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#E74C3C]">Refund/ Cancel Payment</p>
          </button>


        </div>
      </div>

    </section>
  )
}

export default Actions
