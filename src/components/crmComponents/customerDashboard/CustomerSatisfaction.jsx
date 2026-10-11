import React from 'react'

const CustomerSatisfaction = () => {
  return (
    <section className="w-[300px] h-[207px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

        <div className="w-[300px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Customer Satisfaction</h1>
        </div>

        <div className="w-[300px] h-[154px] p-[20px]">

            <div className="w-[300px] h-[154px] py-[10px] gap-[4px] flex flex-col">

                <div className="">

                    
                </div>

                <div className="w-[260px] h-[28px] border-b-[1px] pb-[10px] border-[#FFFFFF14] flex justify-between items-center">
                    <h1 className="font-[DM_Sans] text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">Average Rating</h1>
                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[18px] tracking-[0.8%] text-[#3BB273] text-end">4.7 / 5</p>
                </div>

                <div className="w-[260px] h-[10px] rounded-[999px] pr-[13px] gap-[10px] flex bg-[#5560704D]">
                    <div className="w-[235px] h-[10px] rounded-[999px] bg-[#27AE60]"></div>
                </div>

                <div className="w-[260px] h-[28px] border-b-[1px] pb-[10px] border-[#FFFFFF14] flex justify-between items-center">
                    <h1 className="font-[DM_Sans] text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">Review Score</h1>
                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[18px] tracking-[0.8%] text-[#2980B9] text-end">89%</p>
                </div>

                <div className="w-[260px] h-[10px] rounded-[999px] pr-[13px] gap-[10px] flex bg-[#5560704D]">
                    <div className="w-[235px] h-[10px] rounded-[999px] bg-[#2980B9]"></div>
                </div>

            </div>

            

        </div>

    </section>

  )
}

export default CustomerSatisfaction
