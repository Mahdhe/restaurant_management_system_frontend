import React from 'react'

import Pic1 from '../../assets/orderBuildPics/cardIMG1.jpg'
import Pic2 from '../../assets/orderBuildPics/cardIMG2.jpg'
import Pic3 from '../../assets/orderBuildPics/cardIMG3.jpg'
import Pic4 from '../../assets/orderBuildPics/cardIMG4.jpg'

const MenuArea = () => {
    return (

        <section className="w-[632px] h-[885px] gap-[10px] flex flex-col ">

            <section className="w-[638px] h-[100px] rounded-[14px] gap-[15px] flex flex-col">

                <div className="">
                    <input type="text" className="w-[622px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] bg-[#243447] border-[#FFFFFF24] font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#556070]" placeholder='Search Menu Items' />

                </div>

                <div className="w-[339px] h-[32px] gap-[8px] flex">

                    <button className="w-[41px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#E67E2214] border-[#E67E224D] flex items-center justify-center">
                        <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#E67E22]">All</p>
                    </button>

                    <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                        <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Available</p>
                    </button>

                    <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                        <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Unavailable</p>
                    </button>

                    <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                        <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Veg</p>
                    </button>

                    <button className="w-[75px] h-[32px] rounded-[999px] border-[1px] px-[12px] gap-[10px] bg-[#243447] border-[#FFFFFF14] transition hover:bg-[#E67E2214] hover:border-[#E67E224D] flex items-center justify-center">
                        <p className="font-[DM_Sans] font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Spicy</p>
                    </button>

                </div>

            </section>

            <section className="w-[632px] py-[10px] gap-[10px] flex flex-wrap">

                {/* card */}
                <div className="w-[250px] h-[212px] rounded-[16px] p-[10px] bg-[#1C2A38] ">


                    <div className="w-[230px] h-[110px] rounded-t-[14px]">
                        <img src={Pic1} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[230px] h-[82px] rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] flex flex-wrap border-[#FFFFFF14]">

                        <div className="w-[210px] h-[18px] gap-[4px] flex items-center">
                            <p className="w-[188px] h-[18px] font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8] "  >Stawberry Cheese Cake</p>
                        </div>

                        <div className="w-[210px] h-[32px] gap-[4px] flex justify-between items-center">

                            <h1 className="w-[174px] h-[18px] font-[DM_Sans] font-bold text-[22px] leading-[18px] tracking-[0.8px] text-[#E67E22]">LKR 850</h1>

                            <button className="w-[32px] h-[32px] rounded-[999px] bg-[#E67E22] text-center text-[15px] flex justify-center items-center text-white">+</button>

                        </div>
                    </div>

                </div>

                {/* card */}
                <div className="w-[250px] h-[212px] rounded-[16px] p-[10px] bg-[#1C2A38] ">


                    <div className="w-[230px] h-[110px] rounded-t-[14px]">
                        <img src={Pic2} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[230px] h-[82px] rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] flex flex-wrap border-[#FFFFFF14]">

                        <div className="w-[210px] h-[18px] gap-[4px] flex items-center">
                            <p className="w-[188px] h-[18px] font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8] "  >Stawberry Cheese Cake</p>
                        </div>

                        <div className="w-[210px] h-[32px] gap-[4px] flex justify-between items-center">

                            <h1 className="w-[174px] h-[18px] font-[DM_Sans] font-bold text-[22px] leading-[18px] tracking-[0.8px] text-[#E67E22]">LKR 850</h1>

                            <button className="w-[32px] h-[32px] rounded-[999px] bg-[#E67E22] text-center text-[15px] flex justify-center items-center text-white">+</button>

                        </div>
                    </div>

                </div>

                {/* card */}
                <div className="w-[250px] h-[212px] rounded-[16px] p-[10px] bg-[#1C2A38] ">


                    <div className="w-[230px] h-[110px] rounded-t-[14px]">
                        <img src={Pic3} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[230px] h-[82px] rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] flex flex-wrap border-[#FFFFFF14]">

                        <div className="w-[210px] h-[18px] gap-[4px] flex items-center">
                            <p className="w-[188px] h-[18px] font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8] "  >Stawberry Cheese Cake</p>
                        </div>

                        <div className="w-[210px] h-[32px] gap-[4px] flex justify-between items-center">

                            <h1 className="w-[174px] h-[18px] font-[DM_Sans] font-bold text-[22px] leading-[18px] tracking-[0.8px] text-[#E67E22]">LKR 850</h1>

                            <button className="w-[32px] h-[32px] rounded-[999px] bg-[#E67E22] text-center text-[15px] flex justify-center items-center text-white">+</button>

                        </div>
                    </div>

                </div>

                {/* card */}
                <div className="w-[250px] h-[212px] rounded-[16px] p-[10px] bg-[#1C2A38] ">


                    <div className="w-[230px] h-[110px] rounded-t-[14px]">
                        <img src={Pic4} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[230px] h-[82px] rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] flex flex-wrap border-[#FFFFFF14]">

                        <div className="w-[210px] h-[18px] gap-[4px] flex items-center">
                            <p className="w-[188px] h-[18px] font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8] "  >Stawberry Cheese Cake</p>
                        </div>

                        <div className="w-[210px] h-[32px] gap-[4px] flex justify-between items-center">

                            <h1 className="w-[174px] h-[18px] font-[DM_Sans] font-bold text-[22px] leading-[18px] tracking-[0.8px] text-[#E67E22]">LKR 850</h1>

                            <button className="w-[32px] h-[32px] rounded-[999px] bg-[#E67E22] text-center text-[15px] flex justify-center items-center text-white">+</button>

                        </div>
                    </div>

                </div>

            </section>



        </section>
    )
}

export default MenuArea
