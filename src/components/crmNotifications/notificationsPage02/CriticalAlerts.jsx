
import React from 'react'

const AlertIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" fill="#E74C3C" />
    <line
      x1="12"
      y1="7"
      x2="12"
      y2="13"
      stroke="#140202"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="17" r="1.4" fill="#140202" />
  </svg>
)

const ChefHatIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E74C3C"
    strokeOpacity="0.85"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>
)

const ALERTS = [
  {
    id: 1,
    title: 'Kitchen Queue Display',
    value: '24 mins',
    valueColor: 'text-[#E74C3C]',
    action: 'Resolve',
    actionStyle:
      'bg-[#E74C3C1F] border-[#E74C3C26] text-[#E74C3C] hover:bg-[#E74C3C33]',
  },
  {
    id: 2,
    title: 'Low Stock- Chicken Breast',
    value: '2.3 Kg left',
    valueColor: 'text-[#F39C12]',
    action: 'Resolve',
    actionStyle:
      'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8] hover:bg-[#2C4058]',
  },
  {
    id: 3,
    title: 'Payment Failure',
    value: 'ORD-0409',
    valueColor: 'text-[#F39C12]',
    action: 'Retry',
    actionStyle:
      'bg-[#243447] border-[#FFFFFF24] text-[#F0F4F8] hover:bg-[#2C4058]',
  },
  {
    id: 4,
    title: 'Reservation Conflict',
    value: 'Table T09',
    valueColor: 'text-[#F39C12]',
    action: 'View',
    actionStyle:
      'bg-transparent border-[#FFFFFF24] text-[#8A9BB0] hover:bg-[#243447]',
  },
]

const CriticalAlerts = () => {
  return (
    <section className="w-full min-w-0 font-['DM_Sans',sans-serif]">
      <div className="flex w-full min-w-0 flex-col gap-3 rounded-xl border border-[#E74C3C73] bg-[#E74C3C0F] p-3 sm:gap-4 sm:rounded-2xl sm:p-5">

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E74C3C1F]">
            <AlertIcon />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-sm font-semibold leading-snug text-[#E74C3C] sm:text-base">
              Critical Alerts
            </h2>

            <p className="mt-1 text-[11px] leading-relaxed text-[#8A9BB0] sm:text-xs">
              Requires Immediate action
            </p>
          </div>
        </div>

        {/* Alert items */}
        <div className="flex flex-col gap-3">
          {ALERTS.map((alert) => (
            <article
              key={alert.id}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E74C3C3D] bg-[#E74C3C14] p-2.5 sm:gap-3 sm:p-3"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E74C3C1F] sm:h-10 sm:w-10">
                <ChefHatIcon />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
                <h3 className="break-words text-[11px] font-semibold leading-snug text-[#F0F4F8] sm:text-xs">
                  {alert.title}
                </h3>

                <p
                  className={`break-words text-sm font-bold leading-tight sm:text-base ${alert.valueColor}`}
                >
                  {alert.value}
                </p>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => console.log(`${alert.action}:`, alert.id)}
                className={`inline-flex min-h-8 shrink-0 items-center justify-center rounded-md border px-2 text-[10px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E74C3C] sm:px-3 sm:text-xs ${alert.actionStyle}`}
              >
                {alert.action}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CriticalAlerts
