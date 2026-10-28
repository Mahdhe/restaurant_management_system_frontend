import React from 'react'

// Status / tag pills now size themselves from their text (no fixed widths)
const ROWS = [
    {
        id: 1,
        name: 'Garden Fresh Salad',
        category: 'Starters',
        price: 'LKR 650',
        status: { label: 'Available', cls: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]' },
        tag: { label: 'Veg', cls: 'bg-[#8E44AD1F] border-[#8E44AD4D] text-[#8E44AD]' },
        prep: '5 min',
        on: true,
    },
    {
        id: 2,
        name: 'Grilled Chicken',
        category: 'Grills',
        price: 'LKR 1850',
        status: { label: 'Available', cls: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]' },
        tag: { label: 'Spicy', cls: 'bg-[#8E44AD1F] border-[#8E44AD4D] text-[#8E44AD]' },
        prep: '18 min',
        on: true,
    },
    {
        id: 3,
        name: 'Spaghetti Carbonara',
        category: 'Pasta',
        price: 'LKR 1200',
        status: { label: 'Unavailable', cls: 'bg-[#E74C3C1F] border-[#E74C3C4D] text-[#E74C3C]' },
        tag: { label: 'Low Stock', cls: 'bg-[#F39C121F] border-[#F39C124D] text-[#F39C12]' },
        prep: '15 min',
        on: false,
    },
    {
        id: 4,
        name: 'Strawberry Fresh Splash',
        category: 'Drinks',
        price: 'LKR 680',
        status: { label: 'Available', cls: 'bg-[#27AE601F] border-[#27AE604D] text-[#27AE60]' },
        tag: { label: 'Cold', cls: 'bg-[#8E44AD1F] border-[#8E44AD4D] text-[#8E44AD]' },
        prep: '3 min',
        on: true,
    },
]

const HEADERS = ['ITEM', 'CATEGORY', 'PRICE', 'STATUS', 'TAGS', 'PREP TIME', 'AVAILABILITY', 'ACTIONS']

// One column template shared by header + rows, so they always line up
const COLS = 'grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,0.8fr)]'

const MenuItemTable = () => {
    return (
        <section className="w-[880px] max-w-full min-w-0 h-[450px] rounded-[16px] p-[20px] max-sm:p-[12px] gap-[10px] flex flex-col bg-[#1C2A38] box-border">

            {/* title + bulk edit */}
            <div className="w-full h-[40px] shrink-0 gap-[10px] flex justify-between items-center">
                <h1 className="min-w-0 truncate text-[#F0F4F8] font-[DM_Sans] font-bold text-[18px] max-sm:text-[16px] leading-[100%] tracking-[0%]">Menu Items Table</h1>
                <button type="button" className="w-[92px] h-[40px] shrink-0 gap-[12px] flex items-center justify-center border-[1px] border-[#FFFFFF24] bg-[#243447] rounded-lg box-border transition hover:bg-[#2D4157]">
                    <span className="whitespace-nowrap text-[#F0F4F8] font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0%]">Bulk Edit</span>
                </button>
            </div>

            {/* table area: takes the remaining card height; scrolls only if the screen is too narrow */}
            <div className="w-full min-h-0 flex-1 overflow-auto [scrollbar-width:thin] [scrollbar-color:#243447_transparent] box-border">

                <div className="w-full min-w-[720px] py-[10px] gap-[8px] flex flex-col">

                    {/* header row */}
                    <div className={`w-full h-[40px] shrink-0 grid ${COLS} items-center gap-x-[12px] px-[16px] bg-[#243447] rounded-[8px] box-border`}>
                        {HEADERS.map((label) => (
                            <p key={label} className="min-w-0 truncate font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]">{label}</p>
                        ))}
                    </div>

                    {/* data rows */}
                    {ROWS.map((row) => (
                        <div key={row.id} className={`w-full h-[64px] shrink-0 grid ${COLS} items-center gap-x-[12px] px-[16px] border-b-[1px] border-[#FFFFFF14] box-border`}>

                            {/* item name: up to 2 lines */}
                            <h3 title={row.name} className="min-w-0 font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[16px] tracking-[0.8%] text-[#F0F4F8]">
                                <span className="line-clamp-2 break-words">{row.name}</span>
                            </h3>

                            <h3 className="min-w-0 truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">{row.category}</h3>

                            <h3 className="min-w-0 truncate font-[DM_Sans] font-medium text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">{row.price}</h3>

                            {/* status */}
                            <div className="min-w-0 flex items-center">
                                <span className={`${row.status.cls} h-[24px] max-w-full inline-flex items-center rounded-[999px] border-[1px] px-[9px] box-border`}>
                                    <span className="truncate font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">{row.status.label}</span>
                                </span>
                            </div>

                            {/* tag */}
                            <div className="min-w-0 flex items-center">
                                <span className={`${row.tag.cls} h-[24px] max-w-full inline-flex items-center rounded-[999px] border-[1px] px-[9px] box-border`}>
                                    <span className="truncate font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%]">{row.tag.label}</span>
                                </span>
                            </div>

                            <h3 className="min-w-0 truncate font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[100%] tracking-[0.8%] text-[#F0F4F8]">{row.prep}</h3>

                            {/* availability toggle */}
                            <div className="min-w-0 flex items-center">
                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={row.on}
                                    aria-label={`${row.name} availability`}
                                    className={`w-[54px] h-[28px] shrink-0 flex items-center rounded-[999px] p-[4px] box-border ${row.on ? 'pl-[30px] bg-[#E67E22]' : 'pr-[30px] bg-[#243447]'}`}
                                >
                                    <span className="w-[20px] h-[20px] shrink-0 block rounded-[999px] bg-[#F0F4F8]"></span>
                                </button>
                            </div>

                            {/* actions */}
                            <div className="min-w-0 flex items-center">
                                <button type="button" className="h-[36px] shrink-0 rounded-[10px] px-[14px] border-[1px] border-[#FFFFFF14] flex items-center justify-center box-border transition hover:bg-[#243447]">
                                    <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#8A9BB0]">Edit</span>
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default MenuItemTable