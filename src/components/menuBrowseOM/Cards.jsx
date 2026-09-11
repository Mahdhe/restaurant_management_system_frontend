import React from 'react'

import { CiStopwatch } from "react-icons/ci";

import card1 from "../../assets/orderMenuBrowsePics/cardIMG1.jpg"
import card2 from "../../assets/orderMenuBrowsePics/cardIMG2.jpg"
import card3 from "../../assets/orderMenuBrowsePics/cardIMG3.jpg"
import card4 from "../../assets/orderMenuBrowsePics/cardIMG4.jpg"
import card5 from "../../assets/orderMenuBrowsePics/cardIMG5.jpg"
import card6 from "../../assets/orderMenuBrowsePics/cardIMG6.jpg"

const menuItems = [
    { img: card1, name: "Garden Fresh Salad", desc: "Fresh mixed greens with cucumber and tomato", price: "LKR 650", time: "5 min", available: true },
    { img: card2, name: "Grilled Chicken", desc: "Tender grilled chicken served with herbs", price: "LKR 1850", time: "18 min", available: true },
    { img: card3, name: "Spaghetti Carbonara", desc: "Creamy pasta tossed with bacon,parmesan and rich carbonara sauce.", price: "LKR 1200", time: "15 min", available: false },
    { img: card4, name: "Stawberry Fresh Splash", desc: "Fresh strawberry juice served chilled and naturally sweet.", price: "LKR 680", time: "5 min", available: true },
    { img: card5, name: "Blue Lagoon Mocktail", desc: "Refreshing citrus blend with blue curaçao flavor and ice.", price: "LKR 520", time: "5 min", available: false },
    { img: card6, name: "Stawberry Cheese Cake", desc: "Creamy cheesecake topped with fresh strawberry glaze.", price: "LKR 850", time: "20 min", available: true },
]

const Cards = () => {
    return (
        
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
                <div key={i} className="bg-[#1C2A38] p-2 rounded-[16px]">

                    <div className="w-full h-[160px] rounded-t-[16px] p-[12px] gap-[10px] bg-[#243447] relative overflow-hidden">

                        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />

                        {item.available ? (
                            <div className="w-[77px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#0D2217CC] border-[#3BB273] flex items-center gap-1 relative z-10">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#3BB273]"></span>
                                <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8]">Available</p>
                            </div>
                        ) : (
                            <div className="w-[90px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] bg-[#E74C3C80] border-[#E74C3C] flex items-center gap-1 relative z-10">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#E74C3C]"></span>
                                <p className="font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8px] text-center text-[#F0F4F8]">Unavailable</p>
                            </div>
                        )}

                    </div>

                    <div className="w-full h-auto rounded-b-[16px] border-[1px] py-[12px] px-[10px] gap-[8px] border-[#FFFFFF14]">

                        <div className="w-full pb-[10px] gap-[4px] mt-3">
                            <h2 className="font-[DM_Sans] font-semibold text-[16px] leading-[18px] tracking-[0.8px] text-[#F0F4F8] truncate">{item.name}</h2>
                            <p className="font-[DM_Sans] text-[12px] leading-[18px] tracking-[0.8px] text-[#8A9BB0] line-clamp-2">{item.desc}</p>
                        </div>

                        <div className="w-full h-[28px] border-y-[1px] p-[10px] gap-[4px] flex justify-between items-center border-[#FFFFFF14] mb-2">
                            <h1 className="font-[DM_Sans] font-bold text-[24px] leading-[18px] tracking-[0.8px] text-[#E67E22]">{item.price}</h1>

                            <div className="flex text-[#556070] items-center gap-[1px] shrink-0">
                                <CiStopwatch size={14} />
                                <p className="font-[DM_Sans] text-[12px] leading-[18px] tracking-[0.8px] text-[#556070]">
                                    {item.time}
                                </p>
                            </div>
                        </div>

                        <button className="w-full h-[34px] rounded-[10px] py-[8px] px-[16px] gap-[8px] bg-[#E67E22] flex justify-center items-center text-center">
                            <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">+ Add Item</p>
                        </button>

                    </div>

                </div>
            ))}
        </section>
    )
}

export default Cards