import React from 'react'

import pic1 from '../../../assets/orderManagementImages/OrderDetailPic1.jpg'
import pic2 from '../../../assets/orderManagementImages/OrderDetailPic2.jpg'
import pic3 from '../../../assets/orderManagementImages/OrderDetailPic3.jpg'

const OrderBreakdown = () => {
    return (
        <section className="w-[782px] max-w-full h-[420px]">

            <section className="w-[782px] max-w-full h-[420px] rounded-[14px] border-[1px] p-[20px] max-sm:p-[12px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

                {/* header */}
                <div className="w-[742px] max-w-full h-[57px] shrink-0 pt-[10px] pb-[24px] gap-[10px] flex justify-between items-center box-border">
                    <h1 className="w-[631px] min-w-0 h-[23px] truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Order Breakdown</h1>
                    <h2 className="w-[101px] shrink-0 h-[18px] whitespace-nowrap text-right font-[DM_Sans] font-normal text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0%] text-[#556070]">5 items 3 guest</h2>
                </div>

                {/* item 1 */}
                <div className="w-[742px] max-w-full h-[36px] shrink-0 gap-[12px] flex items-center">
                    <div className="w-[742px] max-w-full h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[5px] flex items-center box-border">

                        <div className="flex items-center gap-2 min-w-0">
                            <img src={pic1} alt="" className="object-cover w-[24px] h-[24px] shrink-0 rounded-[6px]" />
                            <h1 className="w-[118px] min-w-0 max-w-full h-[13px] gap-[12px] block truncate whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Garden Fresh Salad</h1>
                        </div>

                        <div className="flex flex-1 w-[518px] min-w-[22px] h-[18px] gap-[10px]">
                            <button className="w-[22px] shrink-0 flex items-center justify-center whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x1</button>
                        </div>

                        <div className="flex shrink-0">
                            <p className="w-[52px] h-[17px] shrink-0 whitespace-nowrap text-end font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#E67E22]">LKR 650</p>
                        </div>

                    </div>
                </div>

                {/* item 2 */}
                <div className="w-[742px] max-w-full h-[36px] shrink-0 gap-[12px] flex items-center">
                    <div className="w-[742px] max-w-full h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[5px] flex items-center box-border">

                        <div className="flex items-center gap-2 min-w-0">
                            <img src={pic2} alt="" className="object-cover w-[24px] h-[24px] shrink-0 rounded-[6px]" />
                            <h1 className="w-[95px] min-w-0 max-w-full h-[13px] gap-[12px] block truncate whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Grilled Chicken</h1>
                        </div>

                        <div className="flex flex-1 w-[518px] min-w-[22px] h-[18px] gap-[10px]">
                            <button className="w-[22px] shrink-0 flex items-center justify-center whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x2</button>
                        </div>

                        <div className="flex shrink-0">
                            <p className="w-[57px] h-[17px] shrink-0 whitespace-nowrap text-end font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#E67E22]">LKR 1200</p>
                        </div>

                    </div>
                </div>

                {/* item 3 */}
                <div className="w-[742px] max-w-full h-[36px] shrink-0 gap-[12px] flex items-center">
                    <div className="w-[742px] max-w-full h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[5px] flex items-center box-border">

                        <div className="flex items-center gap-2 min-w-0">
                            <img src={pic3} alt="" className="object-cover w-[24px] h-[24px] shrink-0 rounded-[6px]" />
                            <h1 className="w-[101px] min-w-0 max-w-full h-[13px] gap-[12px] block truncate whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Fresh Lime Juice</h1>
                        </div>

                        <div className="flex flex-1 w-[518px] min-w-[22px] h-[18px] gap-[10px]">
                            <button className="w-[22px] shrink-0 flex items-center justify-center whitespace-nowrap font-[DM_Sans] font-normal text-[13px] max-sm:text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x2</button>
                        </div>

                        <div className="flex shrink-0">
                            <p className="w-[59px] h-[17px] shrink-0 whitespace-nowrap text-end font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#E67E22]">LKR 1050</p>
                        </div>

                    </div>
                </div>

                {/* summary */}
                <section className="w-[742px] max-w-full h-[211px] shrink-0 pt-[24px] gap-[10px] flex box-border">
                    <div className="w-[742px] max-w-full h-[187px] rounded-[14px] p-[10px] gap-[10px] bg-[#243447] box-border">
                        <div className="w-[722px] max-w-full h-[167px] p-[20px] max-sm:p-[12px] mx-auto box-border">

                            <div className="w-[682px] max-w-full h-[27px] py-[5px] px-[10px] max-sm:px-[6px] gap-[10px] flex items-center box-border">
                                <h2 className="w-[589px] min-w-0 h-[17px] truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0]">Subtotal</h2>
                                <p className="w-[63px] shrink-0 h-[17px] whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0] text-end">LKR 4,990</p>
                            </div>

                            <div className="w-[682px] max-w-full h-[27px] py-[5px] px-[10px] max-sm:px-[6px] gap-[10px] flex items-center box-border">
                                <h2 className="w-[589px] min-w-0 h-[17px] truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0]">Tax (10%)</h2>
                                <p className="w-[63px] shrink-0 h-[17px] whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0] text-end">LKR 499</p>
                            </div>

                            <div className="w-[682px] max-w-full h-[27px] border-b-[1px] border-[#FFFFFF14] py-[5px] px-[10px] max-sm:px-[6px] gap-[10px] flex items-center box-border">
                                <h2 className="w-[589px] min-w-0 h-[17px] truncate font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0]">Service Charge (5%)</h2>
                                <p className="w-[63px] shrink-0 h-[17px] whitespace-nowrap font-[DM_Sans] font-medium text-[13px] max-sm:text-[12px] leading-[17px] tracking-[0%] text-[#8A9BB0] text-end">LKR 250</p>
                            </div>

                            <div className="w-[682px] max-w-full h-[41px] gap-[20px] flex">
                                <div className="w-[682px] max-w-full h-[41px] p-[10px] max-sm:px-[6px] gap-[10px] flex items-center box-border">
                                    <h2 className="w-[577px] min-w-0 h-[21px] truncate font-[DM_Sans] font-bold text-[16px] max-sm:text-[14px] leading-[21px] tracking-[0%] text-[#F0F4F8]">Grand Total</h2>
                                    <p className="w-[80px] shrink-0 h-[21px] whitespace-nowrap font-[DM_Sans] font-bold text-[16px] max-sm:text-[14px] leading-[21px] tracking-[0%] text-[#E67E22] text-end">LKR 5,739</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </section>

        </section>
    )
}

export default OrderBreakdown