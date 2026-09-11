import React from 'react'

const PaymentInfo = () => {
    return (
        <section className="w-[330px] h-[293px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[330px] h-[53px] rounded-t-[14px] border-[1px] border-[#FFFFFF14] pt-[20px] pl-[20px] pr-[20px] pb-[10px] gap-[10px] flex flex-col">
                <h1 className="w-[150px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Payment Info</h1>
            </div>

            {/* Header */}
            <div className="w-[330px] h-[240px] p-[20px] gap-[10px] flex flex-col" >
                <div className="w-[290px] h-[344px] py-[10px] gap-[12px] flex flex-col">

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Method</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">Card</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Amount paid</h2>
                        <h1 className="w-[120px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">LKR 5,739</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Auth No.</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">#44821</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Status</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">Paid</h1>
                    </div>

                  

                </div>
            </div>

        </section>
    )
}

export default PaymentInfo
