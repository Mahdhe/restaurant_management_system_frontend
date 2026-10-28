import React from 'react'

const cards = [
  { label: 'CURRENT POINTS', value: '1,240',   trend: 'Available to reedem',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
  { label: 'LIFETIME POINTS',    value: '6,840',   trend: 'Since joining',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3498DB]', trendColor: 'text-[#3BB273]' },
  { label: 'REWARDS REDEEMED', value: '14', trend: 'All-time',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#3BB273]', trendColor: 'text-[#3BB273]' },
  { label: 'MEMBERSHIP TIER',  value: 'Platinum', trend: 'Top tier',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#E67E22]', trendColor: 'text-[#3BB273]' },
]

const KPIrowLoyalty = () => {
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

export default KPIrowLoyalty
