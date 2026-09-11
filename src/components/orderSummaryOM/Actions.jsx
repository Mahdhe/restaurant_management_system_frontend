import React from 'react'

const Actions = () => {
  return (
    <section className="w-[330px] h-[327px] rounded-[14px] border-[1px] p-[20px] gap-[10px] flex flex-col bg-[#1C2A38] border-[#FFFFFF14]">

      <div className="w-[290px] h-[287px] rounded-[14px] gsp-[12px] flex flex-col">
        <div className="w-[290px] h-[43px] border-b-[1px] gap-[10px] flex flex-col border-[#FFFFFF14]">
          <div className="w-[290px] h-[43px] p-[10px] gap-[10px] flex">
            <h1 className="w-[68px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Actions</h1>
          </div>
        </div>

        <div className="w-[290px] h-[232px] gap-[8px] flex flex-col">
          <div className="w-[290px] h-[40px] gap-[8px] flex flex-col py-2">
            <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex flex-col border-[#FFFFFF24] justify-center items-center bg-[#E67E22]">
              <h1 className="w-[103px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center ">Request Bill</h1>
            </button>
          </div>
        </div>

        <div className="w-[290px] h-[232px] gap-[8px] flex flex-col">
          <div className="w-[290px] h-[40px] gap-[8px] flex flex-col py-2">
            <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex flex-col border-[#FFFFFF24] justify-center items-center bg-[#243447]">
              <h1 className="w-[103px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center ">Edit Order</h1>
            </button>
          </div>
        </div>

        

        <div className="w-[290px] h-[232px] gap-[8px] flex flex-col">
          <div className="w-[290px] h-[40px] gap-[8px] flex flex-col py-2">
            <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex flex-col border-[#FFFFFF24] justify-center items-center">
              <h1 className="w-[103px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-center ">Transfer Tables</h1>
            </button>
          </div>
        </div>

        <div className="w-[290px] h-[232px] gap-[8px] flex flex-col">
          <div className="w-[290px] h-[40px] gap-[8px] flex flex-col py-2">
            <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex flex-col border-[#FFFFFF24] justify-center items-center">
              <h1 className="w-[103px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-center ">Merge Tables</h1>
            </button>
          </div>
        </div>

        <div className="w-[290px] h-[232px] gap-[8px] flex flex-col">
          <div className="w-[290px] h-[40px] gap-[8px] flex flex-col py-2">
            <button className="w-[290px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] gap-[8px] flex flex-col border-[#E74C3C26] justify-center items-center bg-[#E74C3C1F]">
              <h1 className="w-[103px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#E74C3C] text-center ">Cancel Order</h1>
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Actions
