import React from 'react'

const CustomerGrowth = () => {
  return (
    <section className="w-[812px] h-[351px] rounded-[14px] p-[20px] gap-[20px] flex flex-col border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

      {/* Header */}
      <div className="w-[772px] h-[36px] py-[6px] px-[5px] gap-[10px] flex justify-between items-center">

        <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Customer Growth</h1>

        <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#2980B91F] border-[#2980B94D]">
          <span className="text-[#2980B9] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">This Week</span>
        </button>

      </div>



      <div className="w-[772px] h-[256px] rounded-[14px] border-[1px] pt-[40px] p-[20px] gap-[20px] flex flex-col bg-[#243447] border-[#FFFFFF14]">

        <div className="w-[732px] h-[149px] rounded-t-[10px] gap-[20px] flex">

          {/* Rectangle01 */}
          <div className="w-[138.4px] h-[96px] mt-[53px] rounded-t-[8px] bg-[#E67E22]"></div>

          {/* Rectangle01 */}
          <div className="w-[138.4px] h-[149px] rounded-t-[8px] bg-[#E67E22]"></div>

          {/* Rectangle01 */}
          <div className="w-[138.4px] h-[128px] mt-[21px] rounded-t-[8px] bg-[#E67E22]"></div>

          {/* Rectangle01 */}
          <div className="w-[138.4px] h-[68px] mt-[81px] rounded-t-[8px] bg-[#E67E22]"></div>

          {/* Rectangle01 */}
          <div className="w-[138.4px] h-[128px] mt-[21px] rounded-t-[8px] bg-[#E67E22]"></div>


        </div>



        <div className="w-[732px] h-[22px] py-[4px] gap-[10px] flex">
          <div className="w-[732px] h-[14px] gap-[18px] flex">

            {/* Monday */}
            <div className="w-[132px] h-[14px] font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8A9BB0] flex justify-center">Mon</div>

            {/* Monday */}
            <div className="w-[132px] h-[14px] font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8A9BB0] flex justify-center">Tue</div>

            {/* Monday */}
            <div className="w-[132px] h-[14px] font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8A9BB0] flex justify-center">Wed</div>

            {/* Monday */}
            <div className="w-[132px] h-[14px] font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8A9BB0] flex justify-center">Thu</div>

            {/* Monday */}
            <div className="w-[132px] h-[14px] font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#8A9BB0] flex justify-center">Fri</div>


          </div>
        </div>

      </div>



    </section>
  )
}

export default CustomerGrowth
