import React from 'react'

import { CiStopwatch } from "react-icons/ci";

import card1 from "../../../assets/orderMenuBrowsePics/cardIMG1.jpg"
import card2 from "../../../assets/orderMenuBrowsePics/cardIMG2.jpg"
import card3 from "../../../assets/orderMenuBrowsePics/cardIMG3.jpg"
import card4 from "../../../assets/orderMenuBrowsePics/cardIMG4.jpg"
import card5 from "../../../assets/orderMenuBrowsePics/cardIMG5.jpg"
import card6 from "../../../assets/orderMenuBrowsePics/cardIMG6.jpg"

const menuItems = [
    { img: card1, name: "Strawberry Cheese Cake", desc: "Creamy cheesecake topped with fresh strawberry glaze.", price: "LKR 650", time: "5 min", available: true },
]

const Cards = () => {
    return (

        <section className="w-[370px] max-w-full min-w-0 h-[415px] grid grid-cols-1 content-start gap-6 pt-4 box-border">
            {menuItems.map((item, i) => (
                <div key={i} className="min-w-0 bg-[#1C2A38] p-4 max-sm:p-[14px] rounded-[16px] box-border">

                    <h1 className="w-[252px] max-w-full h-[23px] truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8] border-b-[1px] border-[#FFFFFF14] mb-2">Live Preview</h1>

                    {/* image + status badge */}
                    <div className="w-full h-[160px] shrink-0 rounded-t-[16px] p-[12px] gap-[10px] bg-[#243447] relative overflow-hidden box-border">

                        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />

                        {item.available ? (
                            <div className="w-[77px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#0D2217CC] border-[#3BB273] flex items-center justify-center gap-1 relative z-10 box-border">
                                <span className="w-[6px] h-[6px] shrink-0 rounded-full bg-[#3BB273]"></span>
                                <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8]">Available</p>
                            </div>
                        ) : (
                            <div className="w-[90px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#E74C3C80] border-[#E74C3C] flex items-center justify-center gap-1 relative z-10 box-border">
                                <span className="w-[6px] h-[6px] shrink-0 rounded-full bg-[#E74C3C]"></span>
                                <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8]">Unavailable</p>
                            </div>
                        )}

                    </div>

                    {/* info */}
                    <div className="w-full h-auto rounded-b-[16px] border-[1px] pb-[12px] px-[10px] gap-[8px] border-[#FFFFFF14] box-border">

                        <div className="w-full min-w-0 pb-[10px] gap-[4px] mt-3 flex flex-col">
                            <h2 className="font-[DM_Sans] font-semibold text-[16px] max-sm:text-[15px] leading-[18px] tracking-[0.8px] text-[#F0F4F8] truncate">{item.name}</h2>
                            <p className="min-h-[36px] font-[DM_Sans] text-[12px] leading-[18px] tracking-[0.8px] text-[#8A9BB0] line-clamp-2">{item.desc}</p>
                        </div>

                        <div className="w-full h-[28px] shrink-0 border-t-[1px] gap-[4px] flex justify-between items-center border-[#FFFFFF14] mb-2 pt-1 box-border">
                            <h1 className="min-w-0 truncate whitespace-nowrap font-[DM_Sans] font-bold text-[24px] max-sm:text-[22px] leading-[24px] tracking-[0.8px] text-[#E67E22]">{item.price}</h1>
                        </div>

                        <div className="flex gap-[10px] w-[310px] max-w-full h-[40px] shrink-0 justify-between items-center">

                            <button type="button" className="w-[78.5px] h-[24px] shrink-0 rounded-[10px] py-[8px] px-[8px] gap-[8px] bg-[#2980B91F] border-[#2980B94D] border-[1px] flex justify-center items-center text-center box-border">
                                <p className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[16px] tracking-[0%] text-[#2980B9]">Starters</p>
                            </button>

                            <button type="button" className="w-[72px] h-[40px] shrink-0 rounded-[10px] py-[8px] px-[8px] gap-[8px] bg-[#E67E22] border-[1px] border-[#FFFFFF24] flex justify-center items-center text-center box-border transition hover:brightness-110">
                                <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[16px] tracking-[0%] text-[#F0F4F8]">+ Add</span>
                            </button>

                        </div>

                    </div>

                </div>
            ))}
        </section>
    )
}

export default Cards