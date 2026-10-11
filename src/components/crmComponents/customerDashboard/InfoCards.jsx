import React from 'react'

const cards = [
  { label: 'TOTAL CUSTOMERS', value: '3,482',   trend: '↑ 6.2% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
  { label: 'TOTAL ORDERS',    value: '1,254',   trend: '↑ 3.1% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3498DB]', trendColor: 'text-[#3BB273]' },
  { label: 'REVENUE',         value: '$24,580', trend: '↑ 8.4% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3BB273]', trendColor: 'text-[#3BB273]' },
  { label: 'PENDING ORDERS',  value: '48',      trend: '↓ 2.0% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F1C40F]', trendColor: 'text-[#E74C3C]' },
  { label: 'RESERVATIONS',    value: '312',     trend: '↑ 4.5% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#9B59B6]', trendColor: 'text-[#3BB273]' },
  { label: 'MENU ITEMS',      value: '86',      trend: '↑ 1.2% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#1ABC9C]', trendColor: 'text-[#3BB273]' },
  { label: 'STAFF MEMBERS',   value: '24',      trend: '→ No change',        labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E91E63]', trendColor: 'text-[#8A9BB0]' },
  { label: 'CANCELLED',       value: '17',      trend: '↓ 5.3% this month',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E74C3C]', trendColor: 'text-[#3BB273]' },
]

const InfoCards = () => {
  return (
    <section className="w-full max-w-[1132px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
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