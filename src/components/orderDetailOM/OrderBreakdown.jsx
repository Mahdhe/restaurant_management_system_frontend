import React from 'react'

import pic1 from '../../assets/orderBuildPics/cardIMG2.jpg'

const OrderBreakdown = () => {
    return (
        <section className="w-[782px] h-[420px]">

            <section className="w-[782px] h-[420px] rounded-[14px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14]">

                <div className="w-[742px] h-[57px] pt-[10px] pb-[24px] gap-[10px] flex justify-between">
                    <h1 className="w-[631px] h-[23px] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Order Breakdown</h1>
                    <h2 className="w-[101px] h-[18px] font-[DM_Sans] font-regular text-[14px] leading-[100%] tracking-[0%] text-[#556070]">5 items 3 guest</h2>
                </div>

                <div className="w-[742px] h-[36px] gap-[12px] flex items-center">
                    <div className="w-[742px] h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[10px] flex items-center">

                        <div className="flex items-center gap-2">
                            <img src={pic1} alt="" className="object-cover w-[24px] h-[24px] rounded-[6px]" />
                            <h1 className="w-[118px] h-[13px] gap-[12px] flex font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Garden Fresh Salad</h1>
                        </div>

                        <div className="flex w-[518px] h-[18px] gap-[10px]">
                            <button className="w-[22px] font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x1</button>
                        </div>

                        <div className="flex">
                            <p className="w-[52px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22]">LKR 650</p>
                        </div>

                    </div>
                </div>

                <div className="w-[742px] h-[36px] gap-[12px] flex items-center">
                    <div className="w-[742px] h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[10px] flex items-center">

                        <div className="flex items-center gap-2">
                            <img src={pic1} alt="" className="object-cover w-[24px] h-[24px] rounded-[6px]" />
                            <h1 className="w-[118px] h-[13px] gap-[12px] flex font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Garden Fresh Salad</h1>
                        </div>

                        <div className="flex w-[518px] h-[18px] gap-[10px]">
                            <button className="w-[22px] font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x1</button>
                        </div>

                        <div className="flex">
                            <p className="w-[52px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22]">LKR 650</p>
                        </div>

                    </div>
                </div>

                <div className="w-[742px] h-[36px] gap-[12px] flex items-center">
                    <div className="w-[742px] h-[36px] gap-[10px] border-b-[1px] border-[#FFFFFF14] py-[10px] flex items-center">

                        <div className="flex items-center gap-2">
                            <img src={pic1} alt="" className="object-cover w-[24px] h-[24px] rounded-[6px]" />
                            <h1 className="w-[118px] h-[13px] gap-[12px] flex font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Garden Fresh Salad</h1>
                        </div>

                        <div className="flex w-[518px] h-[18px] gap-[10px]">
                            <button className="w-[22px] font-[DM_Sans] font-regular text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] bg-[#243447] rounded-[999px]">x1</button>
                        </div>

                        <div className="flex">
                            <p className="w-[52px] h-[17px] font-[DM_Sans] font-semibold text-[13px] leading-[100%] tracking-[0%] text-[#E67E22]">LKR 650</p>
                        </div>

                    </div>
                </div>


                <section className="w-[742px] h-[211px] pt-[24px] gap-[10px] flex">
                    <div className="w-[742px] h-[187px] rounded-[14px] p-[10px] gap-[10px] bg-[#243447]">
                        <div className="w-[722px] h-[167px] p-[20px]">

                            <div className="w-[682px] h-[27px] bt-[1px] py-[5px] px-[10px] gap-[10px] flex">
                                <h2 className="w-[589px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Subtotal</h2>
                                <p className="w-[63px] h-[17px] font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">LKR 4,990</p>
                            </div>

                            <div className="w-[682px] h-[27px] bt-[1px] py-[5px] px-[10px] gap-[10px] flex">
                                <h2 className="w-[589px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Tax</h2>
                                <p className="w-[63px] h-[17px] font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">LKR 4,990</p>
                            </div>

                            <div className="w-[682px] h-[27px] border-b-[1px] border-[#FFFFFF14] py-[5px] px-[10px] gap-[10px] flex">
                                <h2 className="w-[589px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Subtotal</h2>
                                <p className="w-[63px] h-[17px] font-[DM_Sans] font-medium text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">LKR 4,990</p>
                            </div>

                            <div className="w-[682px] h-[41px] gap-[20px] flex">
                                <div className="w-[682px] h-[41px] p-[10px] gap-[10px] flex">
                                    <h2 className="w-[577px] h-[21px] font-[DM_Sans] font-bold text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Grand Total</h2>
                                    <p className="w-[75px] h-[21px] font-[DM_Sans] font-bold text-[16px] leading-[100%] tracking-[0%] text-[#E67E22]">LKR 4,990</p>
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
