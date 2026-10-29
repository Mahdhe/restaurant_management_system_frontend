import React from 'react'

const AlertHistory = () => {
    return (
        <section className="w-[1132px] h-[490px] gap-[10px] flex my-4">
            <section className="w-[1132px] h-[490px] gap-[20px] flex">
                <div className="w-[1132px] h-[490px] rounded-[16px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14]">

                    <div className="w-[1092px] h-[64px] gap-[16px] flex justify-between items-center">
                        <div className="w-[1092px] h-[64px] py-[12px] gap-[10px] flex">

                            <div className="w-[1015px] h-[36px] gap-[10px] flex">
                                <div className="w-[36px] h-[36px] rounded-[12px] bg-[#E67E220F] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#E67E22" />
                                        <path d="M12 6.5V12l3.5 2" stroke="#1C2A38" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col w-[195px] h-[36px] gap-[2px]">
                                    <h1 className="w-[207px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[8%] text-[#FFFFFF]">Alert History</h1>
                                    <p className="w-[301px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[8%] text-[#8A9BB0]">Today’s alert log</p>
                                </div>

                            </div>

                            <button className="w-[67px] h-[40px] rounded-[10px] bg-[#243447] border-[1px] border-[#FFFFFF24] py-[8px] px-[16px] gap-[8px] flex justify-center items-center">
                                <p className="font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Export</p>
                            </button>

                        </div>

                    </div>




                    <div className="w-[1092px] h-[386px] py-[10px]">

                        <div className="w-[1092px] h-[46px] gap-[10px] flex">

                            <div className="w-[1092px] h-[46px] p-[16px] bg-[#243447] flex items-center">

                                <h1 className="w-[167.80001831054688px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">TYPE</h1>
                                <h1 className="w-[221px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">DESCRIPTION</h1>
                                <h1 className="w-[167.80001831054688px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">TIME</h1>
                                <h1 className="w-[167.80001831054688px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">SEVERITY</h1>
                                <h1 className="w-[167.80001831054688px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">STATUS</h1>
                                <h1 className="w-[167.80001831054688px] h-[14px] font-[DM Sans] font-semibold text-[11px] leading-[100%] tracking-[0.8%] text-[#8A9BB0]">ACTIONS</h1>

                            </div>

                        </div>



                        <div className="w-[1092px] h-[80px] border-b-[1px] px-[16px] py-[20px] border-[#FFFFFF14] flex items-center">

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[60px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Kitchen</p>
                                </button>
                            </div>

                            <h1 className="w-[221px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Order ORD-0412 delayed</h1>
                            <h1 className="w-[167.8000030517578px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">12:10 PM</h1>


                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[43px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">High</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[67px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#27AE601F] border-[#27AE604D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Resolved</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[32px] gap-[10px] flex">
                                <button className="w-[53px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] bg-[#243447] border-[#FFFFFF24]">
                                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">View</p>
                                </button>
                            </div>

                        </div>

                        <div className="w-[1092px] h-[80px] border-b-[1px] px-[16px] py-[20px] border-[#FFFFFF14] flex items-center">

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[70px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E67E220F] border-[#E67E224D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22]">Inventory</p>
                                </button>
                            </div>

                            <h1 className="w-[221px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Fresh Lime below threshold</h1>
                            <h1 className="w-[167.8000030517578px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">11:45 AM</h1>


                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[62px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E67E220F] border-[#E67E224D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E67E22]">Medium</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[53px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Active</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[32px] gap-[10px] flex">
                                <button className="w-[86px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] bg-[#243447] border-[#FFFFFF24]">
                                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Reorder</p>
                                </button>
                            </div>

                        </div>

                        <div className="w-[1092px] h-[80px] border-b-[1px] px-[16px] py-[20px] border-[#FFFFFF14] flex items-center">

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[66px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#2980B91F] border-[#2980B94D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#2980B9]">Payment</p>
                                </button>
                            </div>

                            <h1 className="w-[221px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Card declined - Table T11</h1>
                            <h1 className="w-[167.8000030517578px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">11:20 AM</h1>


                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[43px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">High</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[67px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#27AE601F] border-[#27AE604D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#27AE60]">Resolved</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[32px] gap-[10px] flex">
                                <button className="w-[53px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] bg-[#243447] border-[#FFFFFF24]">
                                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#F0F4F8]">View</p>
                                </button>
                            </div>

                        </div>

                        <div className="w-[1092px] h-[80px] border-b-[1px] px-[16px] py-[20px] border-[#FFFFFF14] flex items-center">

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[60px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Kitchen</p>
                                </button>
                            </div>

                            <h1 className="w-[221px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">Double booking - Table T09</h1>
                            <h1 className="w-[167.8000030517578px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">10:30 AM</h1>


                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[58px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Critical</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[24px] gap-[10px] flex">
                                <button className="w-[53px] h-[24px] rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] bg-[#E74C3C1F] border-[#E74C3C4D]">
                                    <p className="font-[DM Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] text-[#E74C3C]">Active</p>
                                </button>
                            </div>

                            <div className="w-[167.8000030517578px] h-[32px] gap-[10px] flex">
                                <button className="w-[86px] h-[32px] rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] bg-[#E74C3C1F] border-[#E74C3C26]">
                                    <p className="font-[DM_Sans] font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#E74C3C]">Reorder</p>
                                </button>
                            </div>

                        </div>




                    </div>

                </div>
            </section>
        </section>
    )
}

export default AlertHistory
