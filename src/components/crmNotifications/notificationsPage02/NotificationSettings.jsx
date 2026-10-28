import React from 'react'

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#E67E22',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#E67E22" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

const ClipboardIcon = () => (
  <svg {...iconProps}>
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
)

const ChefHatIcon = () => (
  <svg {...iconProps}>
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>
)

const CalendarIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
)

const BoxIcon = () => (
  <svg {...iconProps}>
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="m7.5 4.27 9 5.15" />
  </svg>
)

const StaffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#E67E22">
    <circle cx="9" cy="8" r="4" />
    <path d="M1.5 21v-1.5a6 6 0 0 1 6-6h3a6 6 0 0 1 6 6V21z" />
    <circle cx="17.5" cy="9" r="2.8" />
    <path d="M17 13.6a5 5 0 0 1 5.5 4.9V21H18v-1.5c0-2-.5-3.9-1-5.9z" />
  </svg>
)

const NotificationSettings = () => {
  return (
        <section className="w-[300px] h-[520px] rounded-[16px] p-[20px] bg-[#1C2A38] gap-[10px] flex flex-col">

            <div className="w-[260px] h-[65px] pb-[20px] border-b-[1px] bg-[#1C2A38] gap-[10px] text-[#556070] flex">
                <div className="w-[260px] h-[50px] gap-[10px] flex">
                    <div className="w-[36px] h-[36px] rounded-[6px] bg-[#E67E220F] flex items-center justify-center">
                        <BellIcon />
                    </div>

                    <div className="w-[195px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[160px] h-[18px] font-semibold text-[14px] leading-[100%] tracking-[8%] text-[#F0F4F8]">Notification Settings</h1>
                        <p className="w-[162px] h-[16px] text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Manage what you receive</p>
                    </div>
                </div>
            </div>



            <div className="w-[260px] h-[55px] border-b-[1px] pb-[10px] border-[#FFFFFF0A] gap-[10px] flex">

                <div className="w-[260px] h-[50px] gap-[10px] flex items-center">
                    <div className="w-[16px] h-[16px]">
                        <ClipboardIcon />
                    </div>

                    <div className="w-[170px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[134px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[2%] text-[#F0F4F8]">Order Notifications</h1>
                        <p className="w-[146px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[2%] text-[#8A9BB0]">New, delayed, Completed</p>
                    </div>

                    <div className="w-[54px] h-[28px] rounded-[999px] p-[4px] pl-[30px] gap-[1px] flex bg-[#E67E22]">
                        <div className="w-[20px] h-[20px] rounded-[999px] p-[10px] gap-[1px] flex bg-[#F0F4F8]"></div>
                    </div>

                </div>

            </div>


            <div className="w-[260px] h-[55px] border-b-[1px] pb-[10px] border-[#FFFFFF0A] gap-[10px] flex">

                <div className="w-[260px] h-[50px] gap-[10px] flex items-center">
                    <div className="w-[16px] h-[16px]">
                        <ChefHatIcon />
                    </div>

                    <div className="w-[170px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[134px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[2%] text-[#F0F4F8]">Order Notifications</h1>
                        <p className="w-[146px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[2%] text-[#8A9BB0]">New, delayed, Completed</p>
                    </div>

                    <div className="w-[54px] h-[28px] rounded-[999px] p-[4px] pl-[30px] gap-[1px] flex bg-[#E67E22]">
                        <div className="w-[20px] h-[20px] rounded-[999px] p-[10px] gap-[1px] flex bg-[#F0F4F8]"></div>
                    </div>

                </div>

            </div>


            <div className="w-[260px] h-[55px] border-b-[1px] pb-[10px] border-[#FFFFFF0A] gap-[10px] flex">

                <div className="w-[260px] h-[50px] gap-[10px] flex items-center">
                    <div className="w-[16px] h-[16px]">
                        <CalendarIcon />
                    </div>

                    <div className="w-[170px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[134px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[2%] text-[#F0F4F8]">Order Notifications</h1>
                        <p className="w-[146px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[2%] text-[#8A9BB0]">New, delayed, Completed</p>
                    </div>

                    <div className="w-[54px] h-[28px] rounded-[999px] p-[4px] pl-[30px] gap-[1px] flex bg-[#E67E22]">
                        <div className="w-[20px] h-[20px] rounded-[999px] p-[10px] gap-[1px] flex bg-[#F0F4F8]"></div>
                    </div>

                </div>

            </div>


            <div className="w-[260px] h-[55px] border-b-[1px] pb-[10px] border-[#FFFFFF0A] gap-[10px] flex">

                <div className="w-[260px] h-[50px] gap-[10px] flex items-center">
                    <div className="w-[16px] h-[16px]">
                        <BoxIcon />
                    </div>

                    <div className="w-[170px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[134px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[2%] text-[#F0F4F8]">Order Notifications</h1>
                        <p className="w-[146px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[2%] text-[#8A9BB0]">New, delayed, Completed</p>
                    </div>

                    <div className="w-[54px] h-[28px] rounded-[999px] p-[4px] pl-[30px] gap-[1px] flex bg-[#E67E22]">
                        <div className="w-[20px] h-[20px] rounded-[999px] p-[10px] gap-[1px] flex bg-[#F0F4F8]"></div>
                    </div>

                </div>

            </div>


            <div className="w-[260px] h-[55px] border-b-[1px] pb-[10px] border-[#FFFFFF0A] gap-[10px] flex">

                <div className="w-[260px] h-[50px] gap-[10px] flex items-center">
                    <div className="w-[16px] h-[16px]">
                        <StaffIcon />
                    </div>

                    <div className="w-[170px] h-[35px] gap-[1px] flex flex-col">
                        <h1 className="w-[134px] h-[18px] font-[DM Sans] font-semibold text-[14px] leading-[100%] tracking-[2%] text-[#F0F4F8]">Order Notifications</h1>
                        <p className="w-[146px] h-[16px] font-[DM Sans] text-[12px] leading-[100%] tracking-[2%] text-[#8A9BB0]">New, delayed, Completed</p>
                    </div>

                    <div className="w-[54px] h-[28px] rounded-[999px] p-[4px] pl-[30px] gap-[1px] flex bg-[#E67E22]">
                        <div className="w-[20px] h-[20px] rounded-[999px] p-[10px] gap-[1px] flex bg-[#F0F4F8]"></div>
                    </div>

                </div>

            </div>



             <div className="w-[260px] h-[80px] py-[20px] gap-[10px] flex">
                <button className="w-[260px] h-[40px] rounded-[10px] py-[8px] px-[16px] bg-[#E67E22] gap-[8px] flex justify-center items-center">
                    <p className="font-[DM Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] text-center">Save Settings</p>
                </button>
             </div>

        </section>
  )
}

export default NotificationSettings