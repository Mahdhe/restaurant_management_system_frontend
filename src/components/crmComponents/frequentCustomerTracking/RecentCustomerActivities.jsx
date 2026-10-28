import React from 'react'

const ROWS = [
    { name: 'Dilani R.', action: 'New Reservation' },
    { name: 'John S.', action: 'Completed Payment' },
    { name: 'Akila P.', action: 'Earned Points' },
]

const RecentCustomerActivities = () => {
  return (
    <section className="w-[300px] max-w-full min-w-0 h-[201px] rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col overflow-hidden box-border">

        {/* Header */}
        <div className="w-[300px] max-w-full h-[53px] shrink-0 rounded-t-[14px] border-b-[1px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[10px] flex items-center border-[#FFFFFF14] box-border">
            <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#FFFFFF]">Recent Customer Activities</h1>
        </div>

        {/* Body */}
        <div className="w-[300px] max-w-full min-w-0 h-[184px] min-h-0 py-[10px] px-[20px] max-sm:px-[14px] gap-[10px] flex box-border">

            <div className="w-[260px] max-w-full min-w-0 h-[164px] py-[10px] box-border">

                {ROWS.map((row) => (
                    <div key={row.name} className="w-[260px] max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                        <p className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">{row.name}</p>
                        <p title={row.action} className="min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[16px] tracking-[0%] text-[#3BB273] text-end">{row.action}</p>
                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default RecentCustomerActivities