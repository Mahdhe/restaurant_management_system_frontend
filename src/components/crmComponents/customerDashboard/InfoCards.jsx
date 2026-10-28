import React from 'react'

const cards = [
  { label: 'TOTAL CUSTOMERS', value: '3,482',   trend: '↑ 6.2% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
  { label: 'NEW CUSTOMERS',    value: '214',   trend: 'This month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3498DB]', trendColor: 'text-[#3BB273]' },
  { label: 'FREQUENT CUSTOMERS',         value: '586', trend: '5+ visits',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3BB273]', trendColor: 'text-[#3BB273]' },
  { label: 'VIP CUSTOMERS',  value: '92',      trend: 'Top-tier members',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
  { label: 'CUSTOMER SATISFACTION',    value: '4.7 / 5',     trend: 'Based on 1,240 reviews',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3BB273]', trendColor: 'text-[#3BB273]' },
  { label: 'AVERAGE SPEND',      value: 'LKR 3,650',      trend: 'Per visit',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
  { label: 'RETURNING CUSTOMERS',   value: '68%',      trend: 'Of total base',        labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#2980B9]', trendColor: 'text-[#3BB273]' },
  { label: 'RESERVATIONS TODAY',       value: '27',      trend: '6 pending confirmation',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
]

const InfoCards = () => {
  return (
    <section className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="min-h-[120px] rounded-[14px] border p-4 flex flex-col gap-2 bg-[#1C2A38] border-[#FFFFFF14]"
        >
          <p className={`font-[DM_Sans] font-semibold text-[11px] tracking-[0.8%] leading-none ${card.labelColor}`}>
            {card.label}
          </p>

          <h2 className={`font-[DM_Sans] font-bold text-[28px] tracking-[0.8%] leading-none ${card.valueColor}`}>
            {card.value}
          </h2>

          <p className={`font-[DM_Sans] font-semibold text-[12px] tracking-[0.8%] leading-none ${card.trendColor}`}>
            {card.trend}
          </p>
        </div>
      ))}
    </section>
  )
}

export default InfoCards