import React from 'react'

// Column widths copied exactly from your original markup
const COLS = [
  { label: 'INVOICE NUMBER', w: 'w-[132.5px]' },
  { label: 'ORDER DATE', w: 'w-[132.5px]' },
  { label: 'ITEMS ORDERED', w: 'w-[132.5px]' },
  { label: 'ORDER TYPE', w: 'w-[132.5px]' },
  { label: 'BILL AMOUNT', w: 'w-[132.5px]' },
  { label: 'PAYMENT METHOD', w: 'w-[132.5px]' },
  { label: 'STATUS', w: 'w-[132.5px]' },
  { label: 'ACTIONS', w: 'w-[132.5px]' },
]

const STATUS = {
  completed: { label: 'Completed', w: 'w-[80px]', btn: 'bg-[#27AE601F] border-[#27AE604D]', text: 'text-[#27AE60]' },
  cancelled: { label: 'Cancelled', w: 'w-[70px]', btn: 'bg-[#E74C3C1F] border-[#E74C3C4D]', text: 'text-[#E74C3C]' },
}

// cells = invoice, date, items, order type, amount, payment method
const ROWS = [
  { id: 1, cells: ['INV-8821', 'Today', 'Grilled Chicken, Fresh Lime Juice', 'Dine in', 'LKR 4,850', 'Card'], status: 'completed' },
  { id: 2, cells: ['INV-8798', 'Yesterday', 'Chicken Kottu, Coke', 'Dine in', 'LKR 3,850', 'Cash'], status: 'completed' },
  { id: 3, cells: ['INV-8764', '3 days ago', 'Rice & Curry Set', 'Takeaway', 'LKR 3,200', 'Card'], status: 'completed' },
  { id: 4, cells: ['INV-8708', '1 week ago', 'Seafood Platter, Wine', 'Dine in', 'LKR 9,400', 'Card'], status: 'cancelled' },
]

const OrderHistoryTable = () => {
  return (
    <section className="w-[1200px] max-w-full min-w-0 h-[462px] gap-[20px] flex my-4 box-border">
      <div className="w-[1200px] max-w-full min-w-0 h-[462px] rounded-[16px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border overflow-hidden">

        {/* header */}
        <div className="w-[1200px] max-w-full h-[52px] shrink-0 gap-[16px] flex justify-between items-center box-border">

          <h1 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[2px] max-sm:tracking-[1px] text-[#FFFFFF]">
            Order History -{' '}
            <span className="text-[#3BB273]">John Silva</span>
          </h1>

          <button type="button" className="w-[138px] h-[40px] shrink-0 box-border rounded-[10px] bg-[#243447] border-[1px] border-[#FFFFFF24] py-[8px] px-[16px] max-sm:px-[12px] gap-[8px] flex items-center justify-center transition hover:bg-[#2D4157]">
            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">Export Orders</span>
          </button>

        </div>

        {/* table: scrolls sideways inside itself */}
        <div className="w-[1200px] max-w-full min-w-0 h-[370px] shrink-0 py-[10px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">

          {/* column headers */}
          <div className="w-[1200px] h-[46px] shrink-0 rounded-[10px] gap-[10px] flex overflow-hidden">
            <div className="w-[1200px] h-[46px] shrink-0 p-[16px] bg-[#243447] flex items-center box-border">
              {COLS.map((c) => (
                <p key={c.label} className={`${c.w} h-[14px] shrink-0 truncate pr-[8px] box-border font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0]`}>{c.label}</p>
              ))}
            </div>
          </div>

          {/* rows */}
          {ROWS.map((row) => {
            const s = STATUS[row.status]
            return (
              <div key={row.id} className="w-[1092px] h-[76px] shrink-0 border-b-[1px] py-[16px] px-[16px] border-[#FFFFFF14] flex items-center box-border">

                {row.cells.map((value, i) => (
                  <p
                    key={i}
                    title={value}
                    className={`${COLS[i].w} h-[18px] shrink-0 truncate pr-[8px] box-border font-[DM_Sans] ${i === 0 ? 'font-bold' : 'font-semibold'} text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#3BB273]`}
                  >
                    {value}
                  </p>
                ))}

                <div className="w-[132.5px] h-[24px] shrink-0 gap-[10px] flex items-center">
                  <button type="button" className={`${s.w} h-[24px] shrink-0 box-border rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] ${s.btn}`}>
                    <span className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${s.text}`}>{s.label}</span>
                  </button>
                </div>

                <div className="w-[132.5px] h-[32px] shrink-0 gap-[10px] flex items-center">
                  <button type="button" className="w-[53px] h-[32px] shrink-0 box-border rounded-[6px] border-[1px] py-[6px] px-[12px] flex justify-center items-center gap-[8px] bg-[#243447] border-[#FFFFFF24] transition hover:bg-[#2D4157]">
                    <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[12px] leading-[16px] tracking-[0%] text-[#8A9BB0]">View</span>
                  </button>
                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default OrderHistoryTable