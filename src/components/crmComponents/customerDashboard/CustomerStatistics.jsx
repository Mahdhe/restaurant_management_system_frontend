import React from 'react'

const CustomerStatistics = () => {
  return (
    <section className="w-[300px] h-[237px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

        <div className="w-[300px] h-[53px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex border-[#FFFFFF14]">
            <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Customer Statistics</h1>
        </div>

        <div className="w-[300px] h-[184px] py-[10px] px-[20px] gap-[10px] flex">

            <div className="w-[260px] h-[164px] py-[10px]">

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Total Visits</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">18,240</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Average Spend</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">LKR 3,650</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Total Revenue</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#3BB273] text-end">LKR 12.4M</p>
                </div>

                <div className="w-[260px] h-[36px] border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">
                    <h1 className="font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">VIP Members</h1>
                    <p className="font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22] text-end">92</p>
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default CustomerStatistics
