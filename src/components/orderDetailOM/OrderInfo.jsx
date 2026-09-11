import React from 'react'

const OrderInfo = () => {
    return (
        <section className="w-[330px] h-[437px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]">

            <div className="w-[330px] h-[53px] rounded-t-[14px] border-[1px] border-[#FFFFFF14] pt-[20px] pl-[20px] pr-[20px] pb-[10px] gap-[10px] flex flex-col">
                <h1 className="w-[89px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Order Info</h1>
            </div>

            {/* Header */}
            <div className="w-[330px] h-[384px] p-[20px] gap-[10px] flex flex-col" >
                <div className="w-[290px] h-[344px] py-[10px] gap-[12px] flex flex-col">

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Order ID</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">ORD-2024-0412</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Table</h2>
                        <h1 className="w-[120px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">Table 04 - Section A</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Waiter</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">Kasun Perera</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Guests</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">3 Pax</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Placed At</h2>
                        <h1 className="w-[104px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-end">7:12 PM · 20 May</h1>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between items-center">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Status</h2>
                        <button className="w-[62px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex flex-col bg-[#E67E220F] border-[#E67E224D]">
                            <p className="w-[44px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22] text-center">Cooking</p>
                        </button>
                    </div>

                    <div className="w-[290px] h-[36px] border-b-[1px] py-[10px] gap-[10px] border-[#FFFFFF14] flex justify-between items-center">
                        <h2 className="w-[176px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Payment</h2>
                        <button className="w-[62px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex flex-col bg-[#E67E220F] border-[#E67E224D]">
                            <p className="w-[44px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22] text-center">Pending</p>
                        </button>               
                     </div>



                </div>
            </div>

        </section>
    )
}

export default OrderInfo
