import React from 'react'

import Pic1 from '../../assets/orderBuildPics/cardIMG2.jpg'
import Pic2 from '../../assets/orderBuildPics/cardIMG4.jpg'

const CurrentOrderPanel = () => {
    return (

        <section className="w-[480px] h-[642px] rounded-[16px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] ">

            <section className="w-[480px] h-[74px] border-[1px] pt-[20px] pb-[16px] px-[20px] border-[#FFFFFF14] rounded-t-[16px]">

                <div className="flex justfy-between items-center">
                    <div className="flex-1">
                        <h1 className="font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%] text-white">Current Order</h1>
                        <p className="font-[DM_Sans] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">3 items · Table 04</p>
                    </div>

                    <div className="w-[100px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#F39C121F] border-[#F39C124D]">
                        <h1 className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22] text-center">T-04 Section A</h1>
                    </div>

                </div>


            </section>

            <section className="w-[480px] h-[338px] border-b-[1px] p-[20px] border-[#FFFFFF14] flex flex-col gap-[16px]">

                <div className="w-[440px] h-[82px] border-b-[1px] gap-[16px] bg-[#1C2A38] border-[#FFFFFF14] flex">

                    <div className="w-[40px] h-[37px] bg-[#D9D9D9] rounded-[8px]">
                        <img src={Pic1} alt="" className="rounded-[8px] w-full h-full object-cover" />
                    </div>

                    <div className="w-[261px] h-[37px] border-b-[1px] gap-[2px] flex flex-col border-[#FFFFFF14]">
                        <h1 className="w-[150px] h-[21px] font-[DM_Sans] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Garden Fresh Salad</h1>
                        <p className="w-[105px] h-[14px] font-[DM_Sans] font-light text-[11px] leading-[100%] tracking-[0%] text-[#556070]">Special instructions...</p>

                    </div>

                    <div className="w-[67px] h-[42px] gap-[2px] flex flex-col">

                        <div className="w-[67px] h-[22px] rounded-[999px] bg-[#1A2535] flex justify-between items-center">
                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">-</p>
                            </div>

                            <p className="w-[5px] h-[18px] font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF] text-center pt-[3px]">1</p>

                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#FFFFFF]">+</p>
                            </div>
                        </div>

                        <div className="w-[67px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#E67E22] flex justify-end ">LKR 650</div>

                    </div>

                </div>

                <div className="w-[440px] h-[82px] border-b-[1px] gap-[16px] bg-[#1C2A38] border-[#FFFFFF14] flex">

                    <div className="w-[40px] h-[37px] bg-[#D9D9D9] rounded-[8px]">
                        <img src={Pic2} alt="" className="rounded-[8px] w-full h-full object-cover" />
                    </div>

                    <div className="w-[261px] h-[37px] border-b-[1px] gap-[2px] flex flex-col border-[#FFFFFF14]">
                        <h1 className="w-[150px] h-[21px] font-[DM_Sans] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Garden Fresh Salad</h1>
                        <p className="w-[105px] h-[14px] font-[DM_Sans] font-light text-[11px] leading-[100%] tracking-[0%] text-[#556070]">Special instructions...</p>

                    </div>

                    <div className="w-[67px] h-[42px] gap-[2px] flex flex-col">

                        <div className="w-[67px] h-[22px] rounded-[999px] bg-[#1A2535] flex justify-between items-center">
                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">-</p>
                            </div>

                            <p className="w-[5px] h-[18px] font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF] text-center pt-[3px]">2</p>

                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#FFFFFF]">+</p>
                            </div>
                        </div>

                        <div className="w-[67px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#E67E22] flex justify-end ">LKR 1200</div>

                    </div>

                </div>

                <div className="w-[440px] h-[82px] border-b-[1px] gap-[16px] bg-[#1C2A38] border-[#FFFFFF14] flex">

                    <div className="w-[40px] h-[37px] bg-[#D9D9D9] rounded-[8px]">
                        <img src={Pic2} alt="" className="rounded-[8px] w-full h-full object-cover" />
                    </div>

                    <div className="w-[261px] h-[37px] border-b-[1px] gap-[2px] flex flex-col border-[#FFFFFF14]">
                        <h1 className="w-[150px] h-[21px] font-[DM_Sans] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Garden Fresh Salad</h1>
                        <p className="w-[105px] h-[14px] font-[DM_Sans] font-light text-[11px] leading-[100%] tracking-[0%] text-[#556070]">Special instructions...</p>

                    </div>

                    <div className="w-[67px] h-[42px] gap-[2px] flex flex-col">

                        <div className="w-[67px] h-[22px] rounded-[999px] bg-[#1A2535] flex justify-between items-center">
                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF]">-</p>
                            </div>

                            <p className="w-[5px] h-[18px] font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#FFFFFF] text-center pt-[3px]">2</p>

                            <div className="w-[22px] h-[22px] bg-[#243447] rounded-full flex items-center justify-center">
                                <p className="font-[DM_Sans] font-medium text-[11px] leading-[100%] tracking-[0%] text-[#FFFFFF]">+</p>
                            </div>
                        </div>

                        <div className="w-[67px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#E67E22] flex justify-end ">LKR 1050</div>

                    </div>

                </div>




            </section>

            <section className="w-[480px] h-[230px] border-b-[1px] p-[20px] border-[#FFFFFF14] rounded-b-[16px]">

                <section className="border-b-[1px] border-[#FFFFFF14] mb-2">

                    <div className="w-[440px] h-[27px] py-[5px] px-[10px] flex justify-between gap-[10px]">
                        <p className="w-[347px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Subtotal</p>
                        <p className="w-[63px] h-[17px] font-medium font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 4,990</p>
                    </div>

                    <div className="w-[440px] h-[27px] py-[5px] px-[10px] flex justify-between gap-[10px]">
                        <p className="w-[347px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Tax(10%)</p>
                        <p className="w-[63px] h-[17px] font-medium font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 499</p>
                    </div>

                    <div className="w-[440px] h-[27px] py-[5px] px-[10px] flex justify-between gap-[10px]">
                        <p className="w-[347px] h-[17px] font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Service Charge(5%)</p>
                        <p className="w-[63px] h-[17px] font-medium font-[DM_Sans] text-[13px] leading-[100%] tracking-[0%] text-[#8A9BB0] text-end">LKR 250</p>
                    </div>

                </section>

                <section className="w-[440px] h-[101px] gap-[20px] flex flex-col">

                    <div className="w-[440px] h-[41px] py-[5px] px-[10px] flex justify-between gap-[10px]">
                        <h1 className="w-[336px] h-[21px] font-[DM_Sans] font-bold text-[16px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Total</h1>
                        <h2 className="w-[84px] h-[21px] font-semibold font-[DM_Sans] text-[16px] leading-[100%] tracking-[0%] text-[#E67E22] text-end">LKR 5,739</h2>
                    </div>

                    <div className="w-[440px] h-[40px] gap-[8px] flex">
                        <button className="w-[216px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#243447] border-[#FFFFFF24]">
                            <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center">Hold Order</p>
                        </button>

                        <button className="w-[216px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#E67E22] border-[#FFFFFF24]">
                            <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center">Send to Kitchen</p>
                        </button>

                    </div>

                </section>


            </section>


        </section>
    )
}

export default CurrentOrderPanel
