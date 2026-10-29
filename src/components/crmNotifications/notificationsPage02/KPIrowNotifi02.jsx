import React from 'react'

const cards = [
  { label: 'LIVE ORDERS', value: '24',   trend: 'Currently active',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#E67E22]' },
  { label: 'KITCHEN ALERTS', value: '3', trend: 'Delays detected',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#E74C3C]' },
  { label: 'LOW STOCK ITEMS', value: '5', trend: 'Reorder needed',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#E74C3C]' },
  { label: 'ACTIVE STAFF',  value: '14', trend: 'On shift now `',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#3BB273]' },
]

const KPIrowNotifi02 = () => {
  return (
    <section className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

export default KPIrowNotifi02
