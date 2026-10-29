import React from 'react'

// Bar size classes copied exactly from your original markup
const BARS = [
  { day: 'Mon', size: 'w-[138.4px] h-[96px] mt-[53px]' },
  { day: 'Tue', size: 'w-[138.4px] h-[149px]' },
  { day: 'Wed', size: 'w-[138.4px] h-[128px] mt-[21px]' },
  { day: 'Thu', size: 'w-[138.4px] h-[68px] mt-[81px]' },
  { day: 'Fri', size: 'w-[138.4px] h-[128px] mt-[21px]' },
]

const CustomerGrowth = () => {
  return (
    <section className="w-[812px] lg:w-full max-w-full min-w-0 h-[351px] rounded-[14px] p-[20px] max-sm:p-[14px] gap-[20px] flex flex-col border-[1px] bg-[#1C2A38] border-[#FFFFFF14] box-border overflow-hidden">

      {/* Header */}
      <div className="w-[772px] lg:w-full max-w-full min-w-0 h-[36px] shrink-0 py-[6px] px-[5px] gap-[10px] flex justify-between items-center box-border">

        <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Customer Growth</h1>

        <button type="button" className="shrink-0 rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex items-center justify-center bg-[#2980B91F] border-[#2980B94D] box-border">
          <span className="whitespace-nowrap text-[#2980B9] font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">This Week</span>
        </button>

      </div>

      {/* Chart */}
      <div className="w-[772px] lg:w-full max-w-full min-w-0 h-[256px] rounded-[14px] border-[1px] pt-[40px] px-[20px] max-sm:px-[10px] pb-[20px] gap-[20px] flex flex-col bg-[#243447] border-[#FFFFFF14] box-border overflow-hidden">

        {/* Bars */}
        <div className="w-[732px] lg:w-full max-w-full min-w-0 h-[149px] shrink-0 rounded-t-[10px] gap-[18px] max-sm:gap-[8px] flex items-start">
          {BARS.map((b) => (
            <div
              key={b.day}
              role="img"
              aria-label={`${b.day} customer growth`}
              className={`${b.size} lg:flex-1 min-w-0 rounded-t-[8px] bg-[#E67E22] transition hover:brightness-110`}
            ></div>
          ))}
        </div>

        {/* Day labels */}
        <div className="w-[732px] lg:w-full max-w-full min-w-0 h-[22px] shrink-0 py-[4px] gap-[10px] flex box-border">
          <div className="w-[732px] lg:w-full max-w-full min-w-0 h-[14px] gap-[18px] max-sm:gap-[8px] flex">
            {BARS.map((b) => (
              <div
                key={b.day}
                className="w-[132px] lg:flex-1 min-w-0 h-[14px] whitespace-nowrap font-[DM_Sans] font-medium text-[11px] leading-[14px] tracking-[0%] text-[#8A9BB0] flex justify-center items-center"
              >
                {b.day}
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  )
}

export default CustomerGrowth