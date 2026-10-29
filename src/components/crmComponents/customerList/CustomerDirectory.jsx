import React from 'react'

// Column widths copied exactly from your original markup
const COLS = [
  { label: 'CUSTOMER', w: 'w-[117.77777862548828px]' },
  { label: 'CUSTOMER ID', w: 'w-[117.77777862548828px]' },
  { label: 'PHONE', w: 'w-[117.77777862548828px]' },
  { label: 'EMAIL', w: 'w-[150px]' },
  { label: 'VISITS', w: 'w-[84px]', center: true },
  { label: 'LAST VISIT', w: 'w-[117.77777862548828px]' },
  { label: 'LOYALTY POINTS', w: 'w-[117.77777862548828px]' },
  { label: 'STATUS', w: 'w-[117.77777862548828px]' },
  { label: 'ACTIONS', w: 'w-[117.77777862548828px]' },
]

const STATUS = {
  vip: { label: 'VIP', w: 'w-[36px]', btn: 'bg-[#E67E220F] border-[#E67E224D]', text: 'text-[#E67E22]' },
  active: { label: 'Active', w: 'w-[53px]', btn: 'bg-[#27AE601F] border-[#27AE604D]', text: 'text-[#27AE60]' },
}

// cells = customer, id, phone, email, visits, last visit, loyalty points
const ROWS = [
  { id: 1, cells: ['John Silva', 'CUS-1042', '0770654321', 'john.silva@gmail.com', '32', 'Today', '1,240'], status: 'vip' },
  { id: 2, cells: ['Nimali Fernando', 'CUS-1043', '0770694320', 'john.silva@gmail.com', '17', 'Today', '640'], status: 'active' },
  { id: 3, cells: ['Akila Perera', 'CUS-1044', '0750654329', 'john.silva@gmail.com', '27', 'Yesterday', '980'], status: 'active' },
  { id: 4, cells: ['Kasun Silva', 'CUS-1045', '074065434', 'john.silva@gmail.com', '9', '2 days ago', '310'], status: 'vip' },
]

const CustomerDirectory = () => {
  return (
    <section className="w-[1200px] max-w-full min-w-0 h-[462px] gap-[20px] flex my-4 box-border">
      <div className="w-[1200px] max-w-full min-w-0 h-[462px] rounded-[16px] border-[1px] p-[20px] max-sm:p-[14px] bg-[#1C2A38] border-[#FFFFFF14] box-border overflow-hidden">

        {/* header */}
        <div className="w-[1200px] max-w-full h-[52px] shrink-0 gap-[16px] flex justify-between items-center box-border">

          <h1 className="min-w-0 truncate font-[DM_Sans] font-semibold text-[18px] max-sm:text-[16px] leading-[23px] tracking-[2px] max-sm:tracking-[1px] text-[#FFFFFF]">Customer Directory</h1>

          <button type="button" className="w-[138px] h-[40px] shrink-0 box-border rounded-[10px] bg-[#E67E22] py-[8px] px-[16px] max-sm:px-[12px] gap-[8px] flex items-center justify-center transition hover:brightness-110">
            <span className="whitespace-nowrap font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] text-[#F0F4F8]">+ Add Customer</span>
          </button>

        </div>

        {/* table: scrolls sideways inside itself */}
        <div className="w-[1200px] max-w-full min-w-0 h-[370px] shrink-0 py-[10px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">

          {/* column headers */}
          <div className="w-[1200px] h-[46px] shrink-0 rounded-[10px] gap-[10px] flex overflow-hidden">
            <div className="w-[1200px] h-[46px] shrink-0 p-[16px] bg-[#243447] flex items-center box-border">
              {COLS.map((c) => (
                <p key={c.label} className={`${c.w} h-[14px] shrink-0 truncate font-[DM_Sans] font-semibold text-[11px] leading-[14px] tracking-[0.8%] text-[#8A9BB0] ${c.center ? 'text-center' : ''}`}>{c.label}</p>
              ))}
            </div>
          </div>

          {/* rows */}
          {ROWS.map((row) => {
            const s = STATUS[row.status]
            return (
              <div key={row.id} className="w-[1200px] h-[76px] shrink-0 border-b-[1px] py-[16px] px-[16px] border-[#FFFFFF14] flex items-center box-border">

                {row.cells.map((value, i) => (
                  <p
                    key={i}
                    title={value}
                    className={`${COLS[i].w} h-[18px] shrink-0 truncate pr-[8px] box-border font-[DM_Sans] ${i === 0 ? 'font-bold' : 'font-semibold'} text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0.8%] text-[#3BB273] ${COLS[i].center ? 'text-center pr-0' : ''}`}
                  >
                    {value}
                  </p>
                ))}

                <div className="w-[117.77778625488281px] h-[24px] shrink-0 gap-[10px] flex items-center">
                  <button type="button" className={`${s.w} h-[24px] shrink-0 box-border rounded-[999px] border-[1px] py-[4px] px-[9px] flex justify-center items-center gap-[10px] ${s.btn}`}>
                    <span className={`whitespace-nowrap font-[DM_Sans] font-semibold text-[11px] leading-[18px] tracking-[0.8%] ${s.text}`}>{s.label}</span>
                  </button>
                </div>

                <div className="w-[117.77778625488281px] h-[32px] shrink-0 gap-[10px] flex items-center">
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

export default CustomerDirectory