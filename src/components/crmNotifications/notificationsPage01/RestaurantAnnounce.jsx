import React from 'react'

const COLORS = {
    blue: { btn: 'bg-[#2980B91F] border-[#2980B94D]', text: 'text-[#2980B9]' },
    grey: { btn: 'bg-[#5560701F] border-[#5560704D]', text: 'text-[#556070]' },
    orange: { btn: 'bg-[#F39C121F] border-[#F39C124D]', text: 'text-[#F39C12]' },
    red: { btn: 'bg-[#E74C3C1F] border-[#E74C3C4D]', text: 'text-[#E74C3C]' },
    green: { btn: 'bg-[#27AE601F] border-[#27AE604D]', text: 'text-[#27AE60]' },
}

const HEADERS = [
    { label: 'TITLE', w: 'w-[300px]' },
    { label: 'TARGET', w: 'w-[152px]' },
    { label: 'PRIORITY', w: 'w-[152px]' },
    { label: 'DATE', w: 'w-[152px]' },
    { label: 'STATUS', w: 'w-[152px]' },
    { label: 'ACTIONS', w: 'w-[152px]' },
]

const ROWS = [
    {
        id: 1,
        title: 'Weekend Promotion',
        target: { label: 'Completed', w: 'w-[80px]', color: 'blue' },
        priority: { label: 'Normal', w: 'w-[57px]', color: 'grey' },
        date: '12 Jun 2025',
        status: { label: 'Sent', w: 'w-[43px]', color: 'green' },
        actions: [{ label: 'View', w: 'w-[53px]', style: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]' }],
    },
    {
        id: 2,
        title: 'Kitchen maintenance Notice',
        target: { label: 'All Staff', w: 'w-[61px]', color: 'orange' },
        priority: { label: 'Critical', w: 'w-[58px]', color: 'red' },
        date: '11 Jun 2025',
        status: { label: 'Scheduled', w: 'w-[76px]', color: 'orange' },
        actions: [
            { label: 'Edit', w: 'w-[59px]', style: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]' },
            { label: 'Delete', w: 'w-[76px]', style: 'bg-[#E74C3C1F] border-[#E74C3C26] text-[#E74C3C]' },
        ],
    },
    {
        id: 3,
        title: 'Holiday Hours Update ',
        target: { label: 'Completed', w: 'w-[80px]', color: 'blue' },
        priority: { label: 'Important', w: 'w-[73px]', color: 'orange' },
        date: '12 Jun 2025',
        status: { label: 'Sent', w: 'w-[43px]', color: 'green' },
        actions: [{ label: 'View', w: 'w-[53px]', style: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]' }],
    },
    {
        id: 4,
        title: 'New Menu Launch',
        target: { label: 'Completed', w: 'w-[80px]', color: 'blue' },
        priority: { label: 'Normal', w: 'w-[57px]', color: 'grey' },
        date: '12 Jun 2025',
        status: { label: 'Sent', w: 'w-[43px]', color: 'green' },
        actions: [{ label: 'View', w: 'w-[53px]', style: 'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8]' }],
    },
]

const Pill = ({ w, color, label }) => (
    <div className="w-[152px] h-[24px] shrink-0 gap-[10px] flex items-center">
        <button type="button" className={`${w} h-[24px] shrink-0 box-border rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] ${COLORS[color].btn}`}>
            <span className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${COLORS[color].text}`}>{label}</span>
        </button>
    </div>
)

const RestaurantAnnounce = () => {
    return (

        <section className="w-[1200px] max-w-full min-w-0 h-[490px] gap-[10px] flex my-4 box-border">
            <section className="w-[1200px] max-w-full min-w-0 h-[490px] gap-[20px] flex">
                <div className="w-[1200px] max-w-full min-w-0 h-[490px] rounded-[16px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

                    {/* header */}
                    <div className="w-[1092px] max-w-full h-[64px] shrink-0 gap-[16px] flex justify-between items-center">
                        <div className="w-[1092px] max-w-full min-w-0 h-[64px] py-[12px] gap-[10px] flex items-center justify-between box-border">

                            <div className="w-[1015px] max-w-full min-w-0 h-[36px] gap-[10px] flex items-center">
                                <div className="w-[36px] h-[36px] shrink-0 rounded-[12px] bg-[#E67E220F] flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                                        <rect x="2" y="7" width="20" height="14" rx="2" fill="#E67E22" fillOpacity="0.35" />
                                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <path d="M2 13h20" />
                                    </svg>
                                </div>

                                <div className="flex flex-col w-[195px] flex-1 min-w-0 h-[36px] gap-[2px] justify-center">
                                    <h1 className="w-[207px] max-w-full h-[18px] truncate font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[8%] text-[#FFFFFF]">Restaurant Announcement</h1>
                                    <p className="w-[301px] max-w-full h-[16px] truncate font-[DM_Sans] text-[12px] leading-[16px] tracking-[8%] text-[#8A9BB0]">History of sent and scheduled announcements</p>
                                </div>

                            </div>

                            <button type="button" className="w-[67px] h-[40px] shrink-0 box-border rounded-[10px] bg-[#243447] border-[1px] border-[#FFFFFF24] py-[8px] px-[16px] gap-[8px] flex items-center justify-center transition hover:bg-[#2D4157]">
                                <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Filter</span>
                            </button>

                        </div>
                    </div>

                    {/* table: scrolls sideways inside itself */}
                    <div className="w-[1092px] max-w-full min-w-0 h-[386px] shrink-0 py-[10px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">

                        {/* column headers */}
                        <div className="w-[1092px] h-[46px] shrink-0 gap-[10px] flex">
                            <div className="w-[1092px] h-[46px] shrink-0 p-[16px] bg-[#243447] flex items-center box-border">
                                {HEADERS.map((h) => (
                                    <p key={h.label} className={`${h.w} h-[14px] shrink-0 truncate font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]`}>{h.label}</p>
                                ))}
                            </div>
                        </div>

                        {/* rows */}
                        {ROWS.map((row) => (
                            <div key={row.id} className="w-[1092px] h-[80px] shrink-0 border-b-[1px] px-[16px] py-[20px] border-[#FFFFFF14] flex items-center box-border">

                                <p title={row.title} className="w-[300px] h-[18px] shrink-0 truncate pr-[16px] font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">{row.title}</p>

                                <Pill {...row.target} />
                                <Pill {...row.priority} />

                                <p className="w-[152px] h-[18px] shrink-0 whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">{row.date}</p>

                                <Pill {...row.status} />

                                <div className="w-[152px] h-[32px] shrink-0 gap-[10px] flex items-center">
                                    {row.actions.map((a) => (
                                        <button key={a.label} type="button" className={`${a.w} h-[32px] shrink-0 box-border rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] transition hover:brightness-110 ${a.style}`}>
                                            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%]">{a.label}</span>
                                        </button>
                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </section>

    )
}

export default RestaurantAnnounce