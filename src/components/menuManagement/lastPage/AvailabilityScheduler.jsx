import React from 'react'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const TOGGLE = {
    on: { label: 'ON', btn: 'bg-[#E67E220F] border-[#E67E2273]', text: 'text-[#E67E22]' },
    off: { label: 'OFF', btn: 'bg-[#24344773] border-[#556070]', text: 'text-[#8A9BB0]' },
}

// days = Mon..Sun, true = ON
const ROWS = [
    {
        id: 1,
        name: 'Item / Category',
        labelH: 'h-[36px]',
        days: [true, true, true, true, false, false, false],
        status: { label: 'Active', btn: 'bg-[#27AE601F] border-[#27AE604D]', text: 'text-[#27AE60]' },
    },
    {
        id: 2,
        name: 'Weekend / BBQ Platter',
        labelH: 'h-[36px]',
        days: [false, false, false, false, true, true, true],
        status: { label: 'Scheduled', btn: 'bg-[#F39C121F] border-[#F39C124D]', text: 'text-[#F39C12]' },
    },
    {
        id: 3,
        name: 'Mocktails',
        labelH: 'h-[26px]',
        days: [true, true, true, true, true, true, true],
        status: { label: 'Active', btn: 'bg-[#27AE601F] border-[#27AE604D]', text: 'text-[#27AE60]' },
    },
]

const AvailabilityScheduler = () => {
    return (
        <section className="w-[880px] max-w-full min-w-0 h-[418px] gap-[20px] flex">

            <div className="w-[880px] max-w-full min-w-0 h-[418px] gap-[10px] flex flex-col rounded-[16px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] box-border overflow-hidden">

                {/* Header */}
                <div className="w-[880px] max-w-full h-[40px] shrink-0 gap-[10px] flex justify-between items-center">
                    <h1 className="min-w-0 truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#F0F4F8]">Availability Scheduler</h1>

                    <button type="button" className="shrink-0 bg-[#E67E22] rounded-[10px] px-[16px] max-sm:px-[12px] py-[8px] flex items-center justify-center box-border transition hover:brightness-110">
                        <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Save Schedule</span>
                    </button>
                </div>

                {/* Table: scrolls sideways inside itself */}
                <div className="w-[880px] max-w-full min-w-0 h-[328px] shrink-0 py-[10px] flex overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">

                    <div className="w-[770px] min-w-max h-[68px] shrink-0 rounded-[8px] gap-0 flex flex-col">

                        {/* Column headers (same column widths as the rows below) */}
                        <div className="w-[770px] min-w-max h-[68px] shrink-0 p-[16px] rounded-t-[8px] bg-[#243447] gap-[10px] flex items-center box-border">

                            <p className="w-[82px] h-[36px] shrink-0 line-clamp-2 flex items-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Item / Category</p>

                            {DAYS.map((day) => (
                                <div key={day} className="w-[88px] shrink-0 flex items-center justify-center">
                                    <p className="w-[82px] h-[18px] whitespace-nowrap font-[DM_Sans] font-bold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#F0F4F8] text-center">{day}</p>
                                </div>
                            ))}

                            <div className="w-[83.5px] shrink-0 flex items-center justify-center">
                                <p className="w-[82px] h-[18px] whitespace-nowrap font-[DM_Sans] font-bold text-[14px] max-sm:text-[12px] leading-[18px] tracking-[0.8%] text-[#F0F4F8] text-center">Status</p>
                            </div>

                        </div>

                        {/* Rows */}
                        {ROWS.map((row) => (
                            <div key={row.id} className="w-[770px] min-w-max h-[80px] shrink-0 p-[16px] border-b-[1px] border-[#556070] rounded-t-[14px] gap-[10px] flex justify-start items-center box-border">

                                <p title={row.name} className={`w-[82px] ${row.labelH} shrink-0 line-clamp-2 break-words flex items-center font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]`}>{row.name}</p>

                                {row.days.map((on, i) => {
                                    const t = on ? TOGGLE.on : TOGGLE.off
                                    return (
                                        <button
                                            key={DAYS[i]}
                                            type="button"
                                            aria-pressed={on}
                                            aria-label={`${row.name} ${DAYS[i]} ${t.label}`}
                                            className={`w-[88px] h-[40px] shrink-0 box-border rounded-[999px] border-[1px] py-[10px] px-[16px] gap-[4px] flex items-center justify-center ${t.btn}`}
                                        >
                                            <span className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] ${t.text}`}>{t.label}</span>
                                        </button>
                                    )
                                })}

                                <button type="button" className={`w-[83.5px] h-[24px] shrink-0 box-border rounded-[999px] border-[1px] py-[4px] px-[9px] gap-[10px] flex items-center justify-center ${row.status.btn}`}>
                                    <span className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${row.status.text}`}>{row.status.label}</span>
                                </button>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AvailabilityScheduler