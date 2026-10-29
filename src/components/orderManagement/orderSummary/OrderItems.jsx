import React from 'react'

const OrderItems = () => {
    return (
        <section className="w-[900px] max-w-full h-[557px] rounded-[14px] border-[1px] py-[10px] bg-[#1C2A38] border-[#FFFFFF14] gap-[16px] flex flex-col box-border overflow-hidden">

            {/* section-01 */}
            <section className="w-[782px] max-w-full h-[60px] py-[10px] px-[20px] max-sm:px-[12px] gap-[10px] flex justify-between items-center mx-auto box-border">

                <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]" >Order Items</h1>
                <button className="w-[105px] h-[40px] shrink-0 rounded-[10px] border-[1px] py-[13px] px-[16px] border-[#FFFFFF24] gap-[8px] flex items-center justify-center box-border">
                    <p className="font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-center whitespace-nowrap">Edit Items</p>
                </button>

            </section>

            {/* section-02 */}
            <section className="w-[782px] max-w-full h-[258px] py-[10px] flex flex-col mx-auto box-border overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                <div className="w-[782px] h-[46px] shrink-0 border-b-[1px] py-[16px] bg-[#243447] border-[#FFFFFF14] flex items-center box-border">

                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0] text-center">ITEM</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0] text-center">QTY</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0] text-center">UNIT PRICE</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0] text-center">TOTAL</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[12px] leading-[100%] tracking-[0.8%] text-[#8A9BB0] text-center">NOTE</h2>

                </div>

                <div className="w-[782px] h-[64px] shrink-0 border-b-[1px] py-[16px] border-[#FFFFFF14] flex items-center box-border">

                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">Garden Fresh Salad</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">1</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 650</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 650</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">-</h2>

                </div>

                <div className="w-[782px] h-[64px] shrink-0 border-b-[1px] py-[16px] border-[#FFFFFF14] flex items-center box-border">

                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">Grilled Chicken</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">2</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 600</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 1200</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">Extra Sauce</h2>

                </div>

                <div className="w-[782px] h-[64px] shrink-0 border-b-[1px] py-[16px] border-[#FFFFFF14] flex items-center box-border">

                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">Fresh Lime Juice</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">2</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 525</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">LKR 1050</h2>
                    <h2 className="w-[156.4px] shrink-0 px-[8px] truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] text-center">-</h2>

                </div>

            </section>

            {/* section-03 */}
            <section className="w-[782px] max-w-full h-[187px] px-[20px] max-sm:px-[12px] gap-[10px] flex flex-col mx-auto box-border">

                <div className="w-[742px] max-w-full h-[187px] rounded-[14px] gap-[10px] bg-[#243447] flex flex-col box-border">

                    <div className="w-[722px] max-w-full h-[167px] p-[20px] max-sm:p-[12px] mx-auto my-auto box-border">

                        <div className="flex justify-between w-[682px] max-w-full h-[27px] py-[5px] px-[10px] gap-[10px] box-border">
                            <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Subtotal</h2>
                            <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 4,990</p>
                        </div>

                        <div className="flex justify-between w-[682px] max-w-full h-[27px] py-[5px] px-[10px] gap-[10px] box-border">
                            <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Tax (10%)</h2>
                            <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 499</p>
                        </div>

                        <div className="flex justify-between w-[682px] max-w-full h-[27px] border-b-[1px] border-[#FFFFFF14] pt-[5px] pb-[10px] px-[10px] gap-[10px] box-border">
                            <h2 className="min-w-0 truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Service Charge (5%)</h2>
                            <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 250</p>
                        </div>

                        <div className="flex justify-between items-center w-[682px] max-w-full h-[41px] p-[10px] gap-[10px] box-border">
                            <h2 className="min-w-0 truncate font-[DM_Sans] font-bold text-[16px] max-sm:text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Grand Total</h2>
                            <p className="shrink-0 whitespace-nowrap font-[DM_Sans] font-bold text-[16px] max-sm:text-[14px] leading-[100%] tracking-[0%] text-[#E67E22] text-end">LKR 5,739</p>
                        </div>

                    </div>

                </div>

            </section>

        </section>
    )
}

export default OrderItems