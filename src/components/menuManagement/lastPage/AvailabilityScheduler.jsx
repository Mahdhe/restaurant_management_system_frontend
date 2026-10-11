import React from 'react'

const AvailabilityScheduler = () => {
  return (
    <section className="w-[810px] h-[418px] gap-[20px] flex">

        <div className="w-[810px] h-[418px] gap-[10px] flex flex-col rounded-[16px] p-[20px] bg-[#1C2A38]">

            {/* Header */}
            <div className="w-[770px] h-[40px] gap-[10px] flex justify-between items-center">
                <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Availability Scheduler</h1>

                <button className="bg-[#E67E22] rounded-[10px] px-[16px] py-[8px] flex justify-center">
                    <span className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Save Schedule</span>
                </button>

            </div>


            <div className="w-[770px] h-[328px] py-[10px] flex">

                <div className="w-[770px] h-[68px] rounded-[8px] gap-[10px] flex flex-col">

                    <div className="w-[770px] h-[68px] p-[16px] bg-[#243447] flex items-center">

                        <h1 className="w-[82px] h-[36px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Item / Category</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Mon</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Tue</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Wed</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Thu</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Fri</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Sat</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Sun</h1>
                        <h1 className="w-[82px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Status</h1>

                    </div>

                    <div className="w-[770px] h-[80px] p-[16px] border-b-[1px] border-[#556070] rounded-t-[14px] gap-[10px] flex justify-center items-center">

                        <h1 className="w-[82px] h-[36px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Item / Category</h1>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[83.5px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Active</span>
                        </button>

                    </div>

                    <div className="w-[770px] h-[80px] p-[16px] border-b-[1px] border-[#556070] rounded-t-[14px] gap-[10px] flex justify-center items-center">

                        <h1 className="w-[82px] h-[36px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Item / Category</h1>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#24344773] border-[#556070] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">OFF</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>


                        <button className="w-[83.5px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#F39C121F] border-[#F39C124D] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#F39C12]">Scheduled</span>
                        </button>

                    </div>

                    <div className="w-[770px] h-[80px] p-[16px] border-b-[1px] border-[#556070] rounded-t-[14px] gap-[10px] flex justify-center items-center">

                        <h1 className="w-[82px] h-[36px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Item / Category</h1>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>

                        <button className="w-[88px] h-[40px] rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] bg-[#E67E220F] border-[#E67E2273] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%] text-[#E67E22]">ON</span>
                        </button>
                    

                        <button className="w-[83.5px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex justify-center">
                            <span className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Active</span>
                        </button>

                    </div>



                </div>

            </div>


        </div>

    </section>
  )
}

export default AvailabilityScheduler
