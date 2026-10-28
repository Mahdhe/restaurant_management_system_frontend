import React from 'react'

const PaymentInfo = () => {
    return (
        <section className="w-[380px] max-w-full h-[293px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[380px] max-w-full h-[53px] rounded-t-[14px] border-[1px] border-[#FFFFFF14] pt-[20px] pl-[20px] pr-[20px] pb-[10px] gap-[10px] flex flex-col">
                <h1 className="w-[150px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Payment Info</h1>
            </div>

            {/* Header */}
            <div className="w-[380px] max-w-full h-[240px] p-[20px] gap-[10px] flex flex-col" >
                <div className="w-[380px] max-w-full h-[344px] py-[10px] gap-[12px] flex flex-col">

                    <div className="w-[350px] max-w-full h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] min-w-0 h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Method</h2>
                        <h1 className="w-[104px] shrink-0 h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">Card</h1>
                    </div>

                    <div className="w-[350px] max-w-full h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] min-w-0 h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Amount paid</h2>
                        <h1 className="w-[120px] shrink-0 h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22] text-end">LKR 5,739</h1>
                    </div>

                    <div className="w-[350px] max-w-full h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] min-w-0 h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Auth No.</h2>
                        <h1 className="w-[104px] shrink-0 h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">#44821</h1>
                    </div>

                    <div className="w-[350px] max-w-full h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between items-center">
                        <h2 className="w-[176px] min-w-0 h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Status</h2>

                        
                            <button className="w-[41px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex justify-center items-center">
                                <h1 className="font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[0%] text-[#27AE60] text-end">Paid</h1>
                            </button>
                        

                    </div>



                </div>
            </div>

        </section>
    )
}

export default PaymentInfo