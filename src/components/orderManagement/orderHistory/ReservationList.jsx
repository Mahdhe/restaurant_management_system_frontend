import React, { useRef } from 'react'

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F0F4F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A9BB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F0F4F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <line x1="12" y1="4" x2="12" y2="15" />
    <polyline points="7 11 12 16 17 11" />
    <line x1="5" y1="20" x2="19" y2="20" />
  </svg>
)

const ReservationList = () => {
  const dateRef = useRef(null)

  return (
    <section className="w-[1132px] max-w-full h-[50px] max-[1439px]:h-auto max-[1439px]:flex-wrap rounded-[14px] gap-[8px] flex">

      <div className="w-[278px] max-w-full h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] bg-[#243447] border-[#FFFFFF24] flex items-center text-center">
        <input
          type="text"
          className="flex-1 min-w-0 bg-transparent outline-none text-left font-[DM_Sans] text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] placeholder:text-[#556070]"
          placeholder='Order ID /table/ waiter...'
        />
      </div>

      <div className="w-[128px] max-w-full h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center cursor-pointer">
        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] ">All Status</h1>
        <ChevronDown />
      </div>

      <div className="w-[148px] max-w-full h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center cursor-pointer">
        <h1 className="font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] ">All Waiters</h1>
        <ChevronDown />
      </div>

      <div className="w-[140px] max-w-full h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] bg-[#243447] border-[#FFFFFF14] text-[#F0F4F8] items-center">
        <input
          ref={dateRef}
          type="date"
          defaultValue="2026-05-26"
          className="flex-1 min-w-0 bg-transparent outline-none font-[DM_Sans] font-medium text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
        />
        <button type="button" onClick={() => dateRef.current?.showPicker?.()} className="flex items-center">
          <CalendarIcon />
        </button>
      </div>

      <button className="w-[68px] max-w-full h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] py-[8px] px-[16px] border-[#FFFFFF14] items-center bg-transparent cursor-pointer">
        <p className="font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Clear</p>
      </button>

      <button className="w-[124.19px] max-w-full h-[40px] gap-[10px] flex justify-between rounded-[10px] border-[1px] p-[10px] border-[#FFFFFF14] bg-[#243447] items-center cursor-pointer">
        <DownloadIcon />
        <p className="font-[DM_Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">Export CSV</p>
      </button>

    </section>
  )
}

export default ReservationList