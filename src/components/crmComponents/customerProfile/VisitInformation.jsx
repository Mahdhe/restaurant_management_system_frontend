import React from 'react'

const ROWS = [
  { label: 'First Visit', value: '12 Jan 2023' },
  { label: 'Last Visit', value: 'Today' },
  { label: 'Total Visits', value: '32' },
  { label: 'Average Spend', value: 'LKR 4,200' },
  { label: 'Favorite Table', value: 'Table 12 (Window)' },
  { label: 'Favorite Menu Item', value: 'Grilled Chicken Kottu' },
]

const VisitInformation = () => {
  return (
    <section className="w-[812px] max-w-full min-w-0 h-[309px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

      {/* Header */}
      <div className="w-[812px] max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center border-[#FFFFFF14] box-border">
        <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Visit Information</h1>
      </div>

      {/* Body */}
      <div className="w-[812px] max-w-full min-w-0 h-[256px] min-h-0 py-[10px] px-[20px] max-sm:px-[14px] gap-[10px] flex box-border">
        <div className="w-[772px] max-w-full min-w-0 h-[236px] py-[10px] box-border">

          {ROWS.map((row) => (
            <div key={row.label} className="w-[772px] max-w-full h-[36px] shrink-0 py-[10px] border-b-[1px] gap-[10px] border-[#FFFFFF14] flex justify-between items-center box-border">
              <p className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">{row.label}</p>
              <p title={row.value} className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#3BB273] text-end">{row.value}</p>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default VisitInformation