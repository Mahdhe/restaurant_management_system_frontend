import React from 'react'

const cards = [
  { label: 'UNREAD NOTIFICATIONS', value: '18',   trend: 'Need attention',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#E67E22]' },
  { label: 'SENT TODAY',    value: '126',   trend: 'Messages delivered',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#27AE60]' },
  { label: 'CRITICAL ALERTS', value: '4', trend: 'High priority',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#E74C3C]' },
  { label: 'ANNOUNCEMENTS',  value: '7',      trend: 'Active notices',  labelColor: 'text-[#8A9BB0]', valueColor: 'text-[#F0F4F8]', trendColor: 'text-[#27AE60]' },
]

const KPIrowNotifi01 = () => {
  return (
    <section className="w-full min-w-0 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 box-border">
      {cards.map((card) => (
        <div
          key={card.label}
          className="min-w-0 min-h-[120px] rounded-[14px] border p-4 max-sm:p-[14px] flex flex-col justify-center gap-2 bg-[#1C2A38] border-[#FFFFFF14] box-border"
        >
          <p className={`truncate font-[DM_Sans] font-semibold text-[11px] tracking-[0.8%] leading-[14px] ${card.labelColor}`}>
            {card.label}
          </p>

          <h2 className={`truncate whitespace-nowrap font-[DM_Sans] font-bold text-[28px] max-sm:text-[24px] tracking-[0.8%] leading-[36px] max-sm:leading-[32px] ${card.valueColor}`}>
            {card.value}
          </h2>

          <p className={`truncate font-[DM_Sans] font-semibold text-[12px] tracking-[0.8%] leading-[16px] ${card.trendColor}`}>
            {card.trend}
          </p>
        </div>
      ))}
    </section>
  )
}

export default KPIrowNotifi01