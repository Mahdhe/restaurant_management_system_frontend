import React from 'react'

const CustomerOverview = () => {
  return (
    <section className="w-[812px] h-[398px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

        {/* header */}
        <div className="w-[812px] h-[54px] rounded-t-[14px] border-[1px] p-[20px] pb-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14]">

            <h1 className="font-[DM_Sans] font-bold text-[18px] text-[#FFFFFF] leading-[100%] tracking-[0%]">Customer Overview</h1>

            <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#2980B91F] border-[#2980B94D]">
                <span className="text-[#2980B9] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">Live</span>
            </button>

        </div>

        <section className="">

            <div className="w-[772px] h-[78px] py-[10px] px-[20px] gap-[4px] flex flex-col">

                <div className="w-[772px] h-[42px]">
                    <h1 className="text-[#3BB273] font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%]">New Customers</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-[#8A9BB0] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%]">214 customers this month</p>
                        <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#27AE601F] border-[#27AE604D]">
                            <span className="text-[#27AE60] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">22%</span>
                        </button>
                    </div>

                </div>

                <button className="w-[772px] h-[10px] rounded-[999px] pr-[138px] gap-[10px] flex bg-[#5560704D] mt-1">
                    <button className="w-[148px] h-[10px] rounded-[999px] bg-[#E67E22]"></button>
                </button>

            </div>

            <div className="w-[772px] h-[78px] py-[10px] px-[20px] gap-[4px] flex flex-col">

                <div className="w-[772px] h-[42px]">
                    <h1 className="text-[#3BB273] font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%]">New Customers</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-[#8A9BB0] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%]">214 customers this month</p>
                        <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#27AE601F] border-[#27AE604D]">
                            <span className="text-[#27AE60] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">68%</span>
                        </button>
                    </div>

                </div>

                <button className="w-[772px] h-[10px] rounded-[999px] pr-[138px] gap-[10px] flex bg-[#5560704D] mt-1">
                    <button className="w-[428px] h-[10px] rounded-[999px] bg-[#27AE60]"></button>
                </button>

            </div>

            <div className="w-[772px] h-[78px] py-[10px] px-[20px] gap-[4px] flex flex-col">

                <div className="w-[772px] h-[42px]">
                    <h1 className="text-[#3BB273] font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%]">New Customers</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-[#8A9BB0] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%]">214 customers this month</p>
                        <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#2980B91F] border-[#2980B94D]">
                            <span className="text-[#2980B9] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">12%</span>
                        </button>
                    </div>

                </div>

                <button className="w-[772px] h-[10px] rounded-[999px] pr-[138px] gap-[10px] flex bg-[#5560704D] mt-1">
                    <button className="w-[91px] h-[10px] rounded-[999px] bg-[#2980B9]"></button>
                </button>

            </div>

            <div className="w-[772px] h-[78px] py-[10px] px-[20px] gap-[4px] flex flex-col">

                <div className="w-[772px] h-[42px]">
                    <h1 className="text-[#3BB273] font-[DM_Sans] font-semibold text-[14px] leading-[18px] tracking-[0.8%]">New Customers</h1>
                    <div className="flex justify-between items-center">
                        <p className="text-[#8A9BB0] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%]">214 customers this month</p>
                        <button className="rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex bg-[#E67E220F] border-[#E67E224D]">
                            <span className="text-[#E67E22] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">23%</span>
                        </button>
                    </div>

                </div>

                <button className="w-[772px] h-[10px] rounded-[999px] pr-[138px] gap-[10px] flex bg-[#5560704D] mt-1">
                    <button className="w-[197px] h-[10px] rounded-[999px] bg-[#E67E22]"></button>
                </button>

            </div>

        </section>

    </section>
  )
}

export default CustomerOverview
