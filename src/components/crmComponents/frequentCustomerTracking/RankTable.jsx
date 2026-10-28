import React from 'react'

const customers = [
  { rank: 1, name: 'Dilani Rathnayake', visits: 44, reservations: 12, orders: 44, avgSpend: 'LKR 5,600', favorite: 'Seafood Platter', clv: 'LKR 246K' },
  { rank: 2, name: 'Kasun Perera', visits: 39, reservations: 10, orders: 39, avgSpend: 'LKR 5,100', favorite: 'Chicken Kottu', clv: 'LKR 199K' },
  { rank: 3, name: 'Nimali Fernando', visits: 36, reservations: 9, orders: 36, avgSpend: 'LKR 4,800', favorite: 'Crab Curry', clv: 'LKR 173K' },
  { rank: 4, name: 'Tharindu Silva', visits: 33, reservations: 8, orders: 33, avgSpend: 'LKR 4,500', favorite: 'Devilled Prawns', clv: 'LKR 149K' },
  { rank: 5, name: 'Sanduni Jayawardena', visits: 31, reservations: 7, orders: 31, avgSpend: 'LKR 4,200', favorite: 'Fried Rice', clv: 'LKR 130K' },
  { rank: 6, name: 'Ruwan Gunasekara', visits: 28, reservations: 7, orders: 28, avgSpend: 'LKR 4,000', favorite: 'Grilled Fish', clv: 'LKR 112K' },
  { rank: 7, name: 'Ishara Wickramasinghe', visits: 26, reservations: 6, orders: 26, avgSpend: 'LKR 3,900', favorite: 'Lamprais', clv: 'LKR 101K' },
  { rank: 8, name: 'Chamath Bandara', visits: 24, reservations: 5, orders: 24, avgSpend: 'LKR 3,600', favorite: 'Beef Steak', clv: 'LKR 86K' },
  { rank: 9, name: 'Hiruni Senanayake', visits: 21, reservations: 4, orders: 21, avgSpend: 'LKR 3,400', favorite: 'Pasta Alfredo', clv: 'LKR 71K' },
  { rank: 10, name: 'Dinesh Abeysekara', visits: 19, reservations: 4, orders: 19, avgSpend: 'LKR 3,200', favorite: 'Mixed Grill', clv: 'LKR 61K' },
]

// Column widths copied exactly from your original markup
// wrap = text may use 2 lines (long names), otherwise it stays on one line
const COLS = [
  { key: 'rank', label: 'RANK', w: 'w-[48px]' },
  { key: 'name', label: 'CUSTOMER', w: 'w-[108.4px]', wrap: true },
  { key: 'visits', label: 'VISITS', w: 'w-[50px]' },
  { key: 'reservations', label: 'RESERVATIONS', w: 'w-[100px]' },
  { key: 'orders', label: 'TOTAL ORDERS', w: 'w-[108.4px]' },
  { key: 'avgSpend', label: 'AVERAGE SPEND', w: 'w-[108.4px]' },
  { key: 'favorite', label: 'FAVORITE MENU ITEM', w: 'w-[108.4px]', wrap: true },
  { key: 'clv', label: 'CLV', w: 'w-[108.4px]' },
]

const cellBase =
  'font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.01em] text-[#3BB273]'

const RankTable = () => {
  return (
    <section className="w-[900px] max-w-full min-w-0 flex">
      <div className="w-[900px] max-w-full min-w-0 rounded-[16px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border">

        {/* header */}
        <div className="w-[900px] max-w-full min-w-0 h-[38px] shrink-0 gap-[16px] flex justify-between items-center box-border">
          <h1 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[2px] max-sm:tracking-[1px] text-[#FFFFFF]">Top 10 Customer Ranking</h1>

          <button type="button" className="w-[107px] h-[26px] shrink-0 box-border rounded-[10px] bg-[#2980B91F] border-[1px] border-[#2980B94D] py-[8px] px-[8px] gap-[8px] flex items-center justify-center">
            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] text-[#2980B9]">This Month</span>
          </button>
        </div>

        {/* table: scrolls sideways inside itself */}
        <div className="w-[900px] max-w-full min-w-0 py-[10px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">

          {/* Heading-Row */}
          <div className="w-[900px] h-[60px] shrink-0 rounded-[10px] p-[16px] bg-[#243447] flex items-center box-border">
            {COLS.map((c) => (
              <p
                key={c.key}
                title={c.label}
                className={`${c.w} shrink-0 pr-[8px] box-border line-clamp-2 break-words font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.01em] text-[#8A9BB0]`}
              >
                {c.label}
              </p>
            ))}
          </div>

          {/* Sub-Rows */}
          {customers.map((c) => (
            <div
              key={c.rank}
              className="w-[900px] h-[76px] shrink-0 border-b-[1px] py-[16px] px-[16px] border-[#FFFFFF14] flex items-center box-border"
            >
              {COLS.map((col) => {
                const value = col.key === 'rank' ? `#${c.rank}` : c[col.key]
                return (
                  <p
                    key={col.key}
                    title={String(value)}
                    className={`${col.w} shrink-0 pr-[8px] box-border ${
                      col.wrap ? 'line-clamp-2 break-words' : 'truncate'
                    } ${
                      col.key === 'rank'
                        ? 'font-[DM_Sans] font-bold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.01em] text-[#E67E22]'
                        : cellBase
                    }`}
                  >
                    {value}
                  </p>
                )
              })}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default RankTable