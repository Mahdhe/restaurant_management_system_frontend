import React from 'react'

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const RecentOrderCard = () => {
    return (
        <section className="mt-3 w-[1190px] max-w-full h-[535px] max-[1439px]:h-auto rounded-[14px] ring-1 ring-[#FFFFFF14] bg-[#1C2A38] overflow-hidden box-border">

            {/* Scroll wrapper start */}
            <div className="overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* header row */}
            <div className="w-[1190px] h-[71px] shrink-0 rounded-t-[14px] border-b-[1px] bg-[#243447] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] bg-[#243447] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">ORDER ID</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">TABLE</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">WAITER</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">ITEMS</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">TOTAL</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">STATUS</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">TIME</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#8A9BB0]">ACTIONS</p>
                </div>
            </div>

            {/* row 1 */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0412</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · A</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Kasun P.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">3 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">LKR 5,739</p>
                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[62px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#F39C121F] border-[#F39C124D] flex items-center justify-center box-border">
                            <p className="w-[44px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#F39C12]">Pending</p>
                        </button>
                    </div>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0411</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · B</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Nimali S.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">5 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">LKR 8,120</p>
                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[41px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex items-center justify-center box-border">
                            <p className="w-[23px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#27AE60]">Paid</p>
                        </button>
                    </div>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 3 */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0409</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · A</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Kasun P.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">2 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">LKR 2,300</p>
                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[41px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex items-center justify-center box-border">
                            <p className="w-[23px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#27AE60]">Paid</p>
                        </button>
                    </div>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 4 (cancelled) */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0408</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · C</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Roshan M.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">6 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">LKR 11,500</p>
                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[72px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D] flex items-center justify-center box-border">
                            <p className="w-[1px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#E74C3C]">Cancelled</p>
                        </button>
                    </div>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                        <div className="w-[104px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[104px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#E74C3C26] bg-[#E74C3C1F] box-border">
                                <p className="w-[104px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#E74C3C]">Cancel Order</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 5 (paid, receipt) */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0407</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · A</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Nimali S.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">4 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">LKR 6,500</p>
                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[41px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#27AE601F] border-[#27AE604D] flex items-center justify-center box-border">
                            <p className="w-[23px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#27AE60]">Paid</p>
                        </button>
                    </div>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                        <div className="w-[69px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[69px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">Receipt</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* row 6 (served) */}
            <div className="w-[1190px] h-[64px] shrink-0 border-b-[1px] border-[#FFFFFF14] flex items-center box-border">

                <div className="flex items-center w-[1099px] h-[50px] ml-[10px] rounded-[10px] p-[16px] shrink-0 box-border">
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">ORD-2024-0407</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Table 04 · C</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Kasun P.</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7 Items</p>
                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">LKR 14,200</p>

                    <div className="w-[132.14px] h-[24px] gap-[10px] flex items-center shrink-0 mr-[1.24px]">
                        <button className="w-[56px] h-[24px] shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] bg-[#8E44AD1F] border-[#8E44AD4D] flex items-center justify-center box-border">
                            <p className="w-[1px] h-[18px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-center text-[#8E44AD]">Served</p>
                        </button>
                    </div>

                    <p className="w-[133.38px] h-[18px] shrink-0 truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">7:12 PM</p>

                    <div className="w-[120px] h-[32px] gap-[10px] flex items-center shrink-0">
                        <div className="w-[55px] h-[32px] gap-[10px] flex shrink-0">
                            <button className="w-[55px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[12px] gap-[8px] flex items-center justify-center border-[#FFFFFF14] box-border">
                                <p className="w-[31px] h-[16px] shrink-0 min-w-max whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-center text-[#556070]">View</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            {/* Scroll wrapper end */}

            {/* pagination footer */}
            <section className="flex flex-wrap max-sm:flex-col max-sm:flex-nowrap justify-between max-sm:justify-center items-center w-[1190px] max-w-full h-[80px] max-[1439px]:h-auto p-[24px] max-sm:p-[16px] gap-[10px] box-border">

                <h1 className="w-[817px] max-w-full h-[16px] min-w-0 font-[DM_Sans] font-medium text-[12px] max-sm:text-center leading-[16px] tracking-[0.8%] text-[#556070]">Showing 1–6 of 84 orders</h1>

                <div className="flex items-center gap-2">

                    <button className="w-[62px] h-[32px] shrink-0 rounded-[6px] border-[1px] p-[8px] gap-[4px] text-[#556070] flex items-center justify-center box-border">
                        <MdOutlineArrowBackIos size={12}/>
                        <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Prev</p>
                    </button>

                    <button className="w-[29px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[10px] gap-[8px] bg-[#FFFFFF14] border-[#FFFFFF24] flex items-center justify-center box-border">
                        <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">1</p>
                    </button>

                    <button className="w-[29px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[10px] gap-[8px] border-[#FFFFFF24] flex items-center justify-center box-border">
                        <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#556070]">2</p>
                    </button>

                    <button className="w-[29px] h-[32px] shrink-0 rounded-[6px] border-[1px] py-[6px] px-[10px] gap-[8px] border-[#FFFFFF24] flex items-center justify-center box-border">
                        <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#556070]">3</p>
                    </button>

                    <button className="w-[62px] h-[32px] shrink-0 rounded-[6px] border-[1px] p-[8px] gap-[4px] text-[#556070] flex items-center justify-center box-border">
                        <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Next</p>
                        <MdOutlineArrowForwardIos size={12}/>
                    </button>

                </div>

            </section>

        </section>
    )
}

export default RecentOrderCard