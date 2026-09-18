import React from 'react'

const MenuItemTable = () => {
    return (
        <section className="w-[810px] h-[500px] rounded-[16px] p-[20px] gap-[10px] flex flex-col bg-[#1C2A38]">

            <div className="w-[770px] h-[40px] gap-[10px] flex justify-between items-center">
                <h1 className="text-[#F0F4F8] font-[DM_Sans] font-bold text-[18px] leading-[100%] tracking-[0%]">Menu Items Table</h1>
                <button className="w-[92px] h-[40px] gap-[12px] flex items-center justify-center border-[1px] border-[#FFFFFF24] bg-[#243447] rounded-lg">
                    <h1 className="text-[#F0F4F8] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0%]">Bulk Edit</h1>
                </button>
            </div>

            <div className="w-[770px] h-[386px] py-[10px] gap-[12px] flex flex-col">
                <div className="w-[770px] h-[46px] rounded-[8px] gap-[10px] flex">
                    <div className="w-[770px] h-[46px] p-[16px] bg-[#243447] rounded-[8px] flex">
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">ITEM</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">CATEGORY</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">PRICE</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">STATUS</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">TAGS</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">PREP TIME</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">AVAILABILITY</h1>
                        <h1 className="w-[92.25px] h-[14px] font-[DM_Sans] font-semibold text-[11px] leading-[100%] travking-[0.8%] text-[#8A9BB0]">ACTIONS</h1>

                    </div>
                </div>

                <div className="w-[770px] h-[80px] rounded-t-[14px] gap-[10px] items-center flex">
                    <div className="w-[770px] h-[80px] border-b-[1px] py-[20px] px-[16px] border-[#FFFFFF14] flex items-center justify-between">

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">Garden Fresh Salad</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">Starters</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">LKR 650</h3>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[67px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#27AE601F] border-[#27AE604D]">
                                <p className="w-[49px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Available</p>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[40px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#8E44AD1F] border-[#8E44AD4D]">
                                <p className="w-[22px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#8E44AD]">Veg</p>
                            </button>
                        </div>

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">5 min</h3>

                        <div className="w-[92.25px] h-[28px] gap-[10px] flex items-center">
                            <button className="w-[54px] h-[28px] gap-[10px] flex items-center rounded-[999px] p-[4px] pl-[30px] bg-[#E67E22]">
                                <button className="w-[20px] h-[20px] p-[10px] gap-[10px] rounded-[999px] bg-[#F0F4F8]"></button>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[40px] gap-[10px] flex items-center">
                            <button className="w-[92.25px] h-[40px] gap-[12px] flex items-center">
                                <button className="w-[59px] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-[8px] border-[1px] border-[#FFFFFF14] flex items-center justify-center">
                                    <p className="w-[27px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Edit</p>
                                </button>
                            </button>
                        </div>

                    </div>
                </div><div className="w-[770px] h-[80px] rounded-t-[14px] gap-[10px] items-center flex">
                    <div className="w-[770px] h-[80px] border-b-[1px] py-[20px] px-[16px] border-[#FFFFFF14] flex items-center justify-between">

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">Garden Fresh Salad</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">Starters</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">LKR 650</h3>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[67px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#27AE601F] border-[#27AE604D]">
                                <p className="w-[49px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Available</p>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[40px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#8E44AD1F] border-[#8E44AD4D]">
                                <p className="w-[32px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#8E44AD]">Spicy</p>
                            </button>
                        </div>

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">18 min</h3>

                        <div className="w-[92.25px] h-[28px] gap-[10px] flex items-center">
                            <button className="w-[54px] h-[28px] gap-[10px] flex items-center rounded-[999px] p-[4px] pl-[30px] bg-[#E67E22]">
                                <button className="w-[20px] h-[20px] p-[10px] gap-[10px] rounded-[999px] bg-[#F0F4F8]"></button>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[40px] gap-[10px] flex items-center">
                            <button className="w-[92.25px] h-[40px] gap-[12px] flex items-center">
                                <button className="w-[59px] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-[8px] border-[1px] border-[#FFFFFF14] flex items-center justify-center">
                                    <p className="w-[27px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Edit</p>
                                </button>
                            </button>
                        </div>

                    </div>

                </div>
                
                <div className="w-[770px] h-[80px] rounded-t-[14px] gap-[10px] items-center flex">
                    <div className="w-[770px] h-[80px] border-b-[1px] py-[20px] px-[16px] border-[#FFFFFF14] flex items-center justify-between">

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">Garden Fresh Salad</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">Starters</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">LKR 650</h3>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[75px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                <p className="w-[67px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Unavailable</p>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[80px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#F39C121F] border-[#F39C124D]">
                                <p className="w-[60px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#F39C12]">Low Stock</p>
                            </button>
                        </div>

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">15 min</h3>

                        <div className="w-[91.25px] h-[28px] gap-[10px] flex items-center">
                            <button className="w-[54px] h-[28px] gap-[10px] flex items-center rounded-[999px] p-[4px] pr-[30px] bg-[#243447]">
                                <button className="w-[20px] h-[20px] p-[10px] gap-[10px] rounded-[999px] bg-[#F0F4F8]"></button>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[40px] gap-[10px] flex items-center">
                            <button className="w-[92.25px] h-[40px] gap-[12px] flex items-center">
                                <button className="w-[59px] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-[8px] border-[1px] border-[#FFFFFF14] flex items-center justify-center">
                                    <p className="w-[27px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Edit</p>
                                </button>
                            </button>
                        </div>

                    </div>
                </div><div className="w-[770px] h-[80px] rounded-t-[14px] gap-[10px] items-center flex">
                    <div className="w-[770px] h-[80px] border-b-[1px] py-[20px] px-[16px] border-[#FFFFFF14] flex items-center justify-between">

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">Garden Fresh Salad</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">Starters</h3>
                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center font-medium">LKR 650</h3>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[67px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#27AE601F] border-[#27AE604D]">
                                <p className="w-[49px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Available</p>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[24px] gap-[10px] flex items-center">
                            <button className="w-[40px] h-[24px] gap-[10px] flex items-center justify-center rounded-[999px] border-[1px] py-[3px] px-[9px] bg-[#8E44AD1F] border-[#8E44AD4D]">
                                <p className="w-[28px] h-[18px] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#8E44AD]">Cold</p>
                            </button>
                        </div>

                        <h3 className="w-[92.25px] h-[24px] font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8] flex items-center">3 min</h3>

                        <div className="w-[92.25px] h-[28px] gap-[10px] flex items-center">
                            <button className="w-[54px] h-[28px] gap-[10px] flex items-center rounded-[999px] p-[4px] pl-[30px] bg-[#E67E22]">
                                <button className="w-[20px] h-[20px] p-[10px] gap-[10px] rounded-[999px] bg-[#F0F4F8]"></button>
                            </button>
                        </div>

                        <div className="w-[92.25px] h-[40px] gap-[10px] flex items-center">
                            <button className="w-[92.25px] h-[40px] gap-[12px] flex items-center">
                                <button className="w-[59px] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-[8px] border-[1px] border-[#FFFFFF14] flex items-center justify-center">
                                    <p className="w-[27px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Edit</p>
                                </button>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default MenuItemTable
