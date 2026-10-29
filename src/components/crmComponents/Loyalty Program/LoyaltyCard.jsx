import React from 'react'

// Each tier keeps the exact width classes from your original markup
const TIERS = [
    {
        id: 1,
        name: 'Silver',
        range: '0 - 999 points',
        card: 'bg-[#243447] border-[#FFFFFF14]',
        badge: { label: 'Completed', w: 'w-[79px]', style: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]' },
        fill: { w: 'w-[311px]', color: 'bg-[#27AE60]', phone: 'max-sm:max-w-full' },
        rows: [
            { label: 'Points Required', value: '1,000', color: 'text-[#3BB273]' },
            { label: 'Available Rewards', value: 'Free Dessert', color: 'text-[#3BB273]' },
        ],
    },
    {
        id: 2,
        name: 'Silver',
        range: '1,000 - 2,499 points',
        card: 'bg-[#243447] border-[#FFFFFF14]',
        badge: { label: 'Completed', w: 'w-[79px]', style: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]' },
        fill: { w: 'w-[311px]', color: 'bg-[#27AE60]', phone: 'max-sm:max-w-full' },
        rows: [
            { label: 'Points Required', value: '2,500', color: 'text-[#3BB273]' },
            { label: 'Available Rewards', value: '10% Bill Discount', color: 'text-[#3BB273]' },
        ],
    },
    {
        id: 3,
        name: 'Platinum',
        range: '2,500+ points',
        card: 'bg-[#E67E220F] border-[#D3540073]',
        badge: { label: 'Current', w: 'w-[69px]', style: 'bg-[#E67E220F] border-[#E67E224D] text-[#E67E22]' },
        fill: { w: 'w-[172.66668701171875px]', color: 'bg-[#E67E22]', phone: 'max-sm:max-w-[55.6%]' },
        rows: [
            { label: 'Points Required', value: '1,240 / 2,500', color: 'text-[#E67E22]' },
            { label: 'Available Rewards', value: 'Free Meal, Priority Table', color: 'text-[#3BB273]' },
        ],
    },
]

const LoyaltyCard = () => {
    return (
        <section className="w-[1200px] max-w-full min-w-0 h-[340px] max-[1439px]:h-auto rounded-[16px] p-[20px] max-sm:p-[14px] gap-[10px] flex flex-col bg-[#1C2A38] box-border">

            {/* Header */}
            <div className="flex justify-between items-center w-[1200px] max-w-full min-w-0 h-[52px] shrink-0 pb-[12px] gap-[10px] box-border">
                <h1 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[2px] max-sm:tracking-[1px] text-[#FFFFFF]">Loyalty Card</h1>

                <button type="button" className="flex justify-center items-center w-[178px] h-[40px] shrink-0 rounded-[10px] py-[8px] px-[16px] max-sm:px-[12px] gap-[8px] bg-[#E67E22] box-border transition hover:brightness-110">
                    <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">+ Create Loyalty Card</span>
                </button>
            </div>

            {/* Tiers: wrap below the full desktop width */}
            <div className="w-[1200px] max-w-full min-w-0 h-[238px] max-[1439px]:h-auto p-[10px] max-sm:px-0 gap-[40px] flex flex-wrap content-start box-border">

                {TIERS.map((t) => (
                    <div
                        key={t.id}
                        className={`w-[350.6666564941406px] max-w-full min-w-0 h-[203px] shrink-0 rounded-[14px] border-[1px] flex flex-col overflow-hidden box-border ${t.card}`}
                    >

                        {/* card header */}
                        <div className="w-[350.6666564941406px] max-w-full h-[71px] shrink-0 rounded-t-[14px] p-[20px] max-sm:px-[14px] pb-[10px] gap-[2px] max-sm:gap-[8px] flex justify-between items-start box-border">

                            <div className="w-[229.66665649414062px] min-w-0 h-[41px] gap-[2px] flex flex-col">
                                <h3 className="truncate font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[0%] text-[#3BB273]">{t.name}</h3>
                                <p className="truncate font-[DM_Sans] text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">{t.range}</p>
                            </div>

                            <div className="w-[79px] h-[24px] shrink-0 gap-[10px] flex justify-end">
                                <span className={`${t.badge.w} h-[24px] shrink-0 gap-[10px] flex justify-center items-center rounded-[999px] border-[1px] py-[4px] px-[9px] box-border ${t.badge.style}`}>
                                    <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">{t.badge.label}</span>
                                </span>
                            </div>

                        </div>

                        {/* card body */}
                        <div className="w-[350.6666564941406px] max-w-full min-w-0 h-[132px] min-h-0 py-[10px] px-[20px] max-sm:px-[14px] gap-[10px] flex flex-col box-border">

                            {/* progress bar */}
                            <div className="w-[310.6666564941406px] max-w-full h-[10px] shrink-0 rounded-[999px] pr-[138px] max-sm:pr-0 gap-[10px] flex flex-col bg-[#5560704D] overflow-hidden">
                                <div className={`${t.fill.w} ${t.fill.phone} h-[10px] shrink-0 rounded-[999px] ${t.fill.color}`}></div>
                            </div>

                            {/* info rows */}
                            <div className="w-[310.6666564941406px] max-w-full min-w-0 h-[92px] shrink-0 py-[10px] box-border">
                                {t.rows.map((r) => (
                                    <div key={r.label} className="w-[310.6666564941406px] max-w-full h-[36px] shrink-0 border-b-[1px] py-[10px] gap-[10px] flex justify-between items-center border-[#FFFFFF14] box-border">
                                        <p className="shrink-0 whitespace-nowrap font-[DM_Sans] text-[13px] max-sm:text-[12px] leading-[15px] tracking-[0%] text-[#8A9BB0]">{r.label}</p>
                                        <p title={r.value} className={`min-w-0 truncate font-[DM_Sans] font-semibold text-[13px] max-sm:text-[12px] leading-[15px] tracking-[0%] text-end ${r.color}`}>{r.value}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default LoyaltyCard