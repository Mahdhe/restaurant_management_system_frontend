
import React from 'react'

// Column configuration
const COLS = [
  { label: 'DATE' },
  { label: 'REWARD' },
  { label: 'POINTS USED' },
  { label: 'STATUS' },
]

const STATUS = {
  completed: {
    label: 'Completed',
    badge: 'bg-[#27AE601F] border-[#27AE604D]',
    text: 'text-[#27AE60]',
  },
  pending: {
    label: 'Pending',
    badge: 'bg-[#F39C121F] border-[#F39C124D]',
    text: 'text-[#F39C12]',
  },
}

// Reward history data
const ROWS = [
  { id: 1, cells: ['2 days ago', 'Free Dessert', '150'], status: 'completed' },
  { id: 2, cells: ['3 weeks ago', '10% Bill Discount', '300'], status: 'completed' },
  { id: 3, cells: ['2 months ago', 'Free Meal', '800'], status: 'completed' },
  { id: 4, cells: ['3 months ago', 'Priority Table', '200'], status: 'pending' },
]

const RewardHistory = () => {
  return (
    <section className="w-full min-w-0 my-3 box-border">
      <div className="w-full min-w-0 h-[360px] rounded-2xl border border-[#FFFFFF14] p-5 max-sm:p-3 bg-[#1C2A38] box-border overflow-hidden">

        {/* Header */}
        <div className="h-10 flex items-center justify-between gap-3 mb-3">
          <h2 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[2px] max-sm:tracking-[1px] text-[#FFFFFF]">
            Reward History
          </h2>

          <button
            type="button"
            className="h-9 shrink-0 rounded-[10px] bg-[#243447] border border-[#FFFFFF24] px-3 sm:px-4 flex items-center justify-center transition hover:bg-[#2D4157]"
          >
            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[13px] sm:text-[14px] leading-[18px] text-[#F0F4F8]">
              Export Orders
            </span>
          </button>
        </div>

        {/* Table - scrollbar hidden */}
        <div className="w-full min-w-0 h-[260px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          <div className="min-w-[620px]">

            {/* Column headers */}
            <div className="grid grid-cols-4 h-[40px] rounded-[10px] bg-[#243447] px-4 items-center">
              {COLS.map((col) => (
                <p
                  key={col.label}
                  className="min-w-0 truncate pr-2 box-border font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-wide text-[#8A9BB0]"
                >
                  {col.label}
                </p>
              ))}
            </div>

            {/* Reward rows */}
            {ROWS.map((row) => {
              const status = STATUS[row.status]

              return (
                <div
                  key={row.id}
                  className="grid grid-cols-4 min-h-[58px] px-4 items-center border-b border-[#FFFFFF14] box-border"
                >
                  {/* Date, reward and points */}
                  {row.cells.map((value, i) => (
                    <p
                      key={i}
                      title={value}
                      className={`min-w-0 truncate pr-2 box-border font-[DM_Sans] ${
                        i === 0 ? 'font-bold' : 'font-semibold'
                      } text-[13px] sm:text-[14px] leading-[18px] tracking-wide text-[#3BB273]`}
                    >
                      {value}
                    </p>
                  ))}

                  {/* Status badge */}
                  <div className="min-w-0 flex items-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-full border px-2.5 py-1 ${status.badge}`}
                    >
                      <span
                        className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[16px] ${status.text}`}
                      >
                        {status.label}
                      </span>
                    </span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default RewardHistory
