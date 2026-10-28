import React from 'react'

const MemberDetails = () => {
  return (
    <section className="w-[300px] max-w-full min-w-0 h-[329px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] py-[20px] px-[10px] flex flex-col items-center justify-center overflow-hidden box-border">

      <div className="w-[240px] max-w-full min-w-0 py-[10px] flex flex-col items-center gap-[4px]">

        {/* Avatar */}
        <div className="w-[90px] h-[90px] shrink-0 rounded-full bg-[#556070] flex items-center justify-center">
          <h2 aria-hidden="true" className="font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] text-[#E67E22] leading-[100%] tracking-[2px] pl-[2px]">
            JS
          </h2>
        </div>

        {/* Details */}
        <div className="w-full min-w-0 pt-[8px] pb-[10px] gap-[8px] flex flex-col items-center justify-center text-center">

          <h1 className="max-w-full truncate font-[DM_Sans] font-bold text-[16px] max-sm:text-[15px] text-[#3BB273] leading-[100%] tracking-[2px] max-sm:tracking-[1px]">
            John Silva
          </h1>

          <p className="max-w-full truncate font-[DM_Sans] font-bold text-[12px] text-[#8A9BB0] leading-[100%] tracking-[2px] max-sm:tracking-[1px]">
            Member Since Jan 2023
          </p>

          <button type="button" className="w-[150px] h-[26px] shrink-0 rounded-full border border-[#E67E224D] bg-[#E67E220F] px-[9px] py-[4px] flex items-center justify-center box-border">
            <span className="font-[DM_Sans] font-semibold text-[11px] text-[#E67E22] leading-[100%] tracking-[2px] max-sm:tracking-[1px] whitespace-nowrap">
              Platinum Member
            </span>
          </button>

        </div>
      </div>

      {/* Stats */}
      <div className="w-[280px] max-w-full min-w-0 h-[82px] shrink-0 p-[10px] flex items-center justify-center gap-[10px] box-border">

        <div className="w-[125px] min-w-0 h-[62px] py-[10px] px-[8px] rounded-[12px] flex flex-col items-center justify-center gap-[6px] bg-[#243447] overflow-hidden box-border">
          <h4 className="max-w-full font-[DM_Sans] font-bold text-[16px] max-sm:text-[15px] text-[#E67E22] leading-[18px] tracking-[0.1px] whitespace-nowrap">
            1,240
          </h4>
          <p className="max-w-full font-[DM_Sans] text-[12px] max-sm:text-[11px] text-[#8A9BB0] leading-[18px] tracking-[0.1px] whitespace-nowrap">
            LOYALTY POINTS
          </p>
        </div>

        <div className="w-[125px] min-w-0 h-[62px] py-[10px] px-[8px] rounded-[12px] flex flex-col items-center justify-center gap-[6px] bg-[#243447] overflow-hidden box-border">
          <h4 className="max-w-full font-[DM_Sans] font-bold text-[16px] max-sm:text-[15px] text-[#27AE60] leading-[18px] tracking-[0.1px] whitespace-nowrap">
            LKR 134K
          </h4>
          <p className="max-w-full font-[DM_Sans] text-[12px] max-sm:text-[11px] text-[#8A9BB0] leading-[18px] tracking-[0.1px] whitespace-nowrap">
            LIFETIME SPEND
          </p>
        </div>

      </div>

    </section>
  )
}

export default MemberDetails