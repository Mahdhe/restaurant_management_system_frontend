import React from 'react'

const MenuHeader = () => {
  return (
    <section className="w-[1132px] h-[61px] px-[10px] gap-[10px] flex">
        <section className="flex w-[1112px] h-[61px] gap-[10px] ">

            <div className="flex flex-col w-[824px] h-[61px] gap-[4px]">
                <h1 className="w-[264px] h-[36px] font-[DM_Sans] font-bold text-[28px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Menu Management </h1>
                <p className="w-[686px] h-[21px] font-[DM_Sans] text-[16px] leading-[100%] tracking-[0%] text-[#556070]">Manage menu items, categories, prices, availability, dietary tags, and scheduled item visibility</p>
            </div>

            <div className="flex w-[300px] h-[40px] gap-[12px]">
                
                <div className="w-[130px] h-[40px] gap-[12px] flex">
                    <button className="w-[130px] h-[40px] gap-[8px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#243447] border-[#FFFFFF24] flex justify-center items-center">
                        <p className="w-[88px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Export Menu</p>
                    </button>
                </div>

                <div className="w-[150px] h-[40px] gap-[12px] flex">
                    <button className="w-[150px] h-[40px] gap-[8px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#E67E22] border-[#FFFFFF24] flex justify-center items-center">
                        <p className="w-[120px] h-[18px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">+ Add Menu Item</p>
                    </button>
                </div>
            </div>

        </section>
    </section>
  )
}

export default MenuHeader