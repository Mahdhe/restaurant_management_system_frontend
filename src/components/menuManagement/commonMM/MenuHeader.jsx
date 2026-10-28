import React from 'react'

const MenuHeader = () => {
  return (
    <section className="w-[1200px] max-w-full h-[61px] max-[1439px]:h-auto px-[1px] gap-[10px] flex box-border">
        <section className="flex w-[1200px] max-w-full min-w-0 h-[61px] max-[1439px]:h-auto gap-[10px] max-[1439px]:gap-[16px] items-center max-[1439px]:items-start max-[1439px]:flex-col">

            {/* title + description */}
            <div className="flex flex-col w-[800px] max-w-full min-w-0 h-[61px] max-[1439px]:h-auto gap-[4px]">
                <h1 className="w-[264px] max-w-full h-[36px] whitespace-nowrap font-[DM_Sans] font-bold text-[28px] max-sm:text-[22px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Menu Management</h1>
                <p className="w-[686px] max-w-full h-[21px] max-[1439px]:h-auto min-[1440px]:whitespace-nowrap font-[DM_Sans] text-[16px] max-sm:text-[13px] leading-[100%] max-[1439px]:leading-[150%] tracking-[0%] text-[#556070]">Manage menu items, categories, prices, availability, dietary tags, and scheduled item visibility</p>
            </div>

            {/* action buttons */}
            <div className="flex flex-wrap w-[400px] max-w-full shrink-0 h-[40px] max-sm:h-auto gap-[12px] justify-end max-[1439px]:justify-start">

                <div className="w-[130px] h-[40px] shrink-0 gap-[12px] flex">
                    <button className="w-[130px] h-[40px] shrink-0 gap-[8px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#243447] border-[#FFFFFF24] flex justify-center items-center box-border">
                        <p className="w-[88px] h-[18px] shrink-0 whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Export Menu</p>
                    </button>
                </div>

                <div className="w-[150px] h-[40px] shrink-0 gap-[12px] flex">
                    <button className="w-[150px] h-[40px] shrink-0 gap-[8px] rounded-[10px] border-[1px] py-[8px] px-[16px] bg-[#E67E22] border-[#FFFFFF24] flex justify-center items-center box-border">
                        <p className="w-[120px] h-[18px] shrink-0 whitespace-nowrap text-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">+ Add Menu Item</p>
                    </button>
                </div>
            </div>

        </section>
    </section>
  )
}

export default MenuHeader