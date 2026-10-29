
import React, { useState } from 'react'
import {
  ChefHat,
  Package,
  CalendarDays,
  ClipboardList,
  Coffee,
  Clock,
} from 'lucide-react'

const STYLES = {
  critical: {
    icon: ChefHat,
    iconColor: 'text-[#E74C3C]',
    iconBg: 'bg-[#E74C3C1F]',
    badge: 'text-[#E74C3C] bg-[#E74C3C1F] border-[#E74C3C4D]',
    action:
      'text-[#E74C3C] bg-[#E74C3C33] border-[#E74C3C4D] hover:bg-[#E74C3C4D]',
  },
  warning: {
    icon: Package,
    iconColor: 'text-[#F39C12]',
    iconBg: 'bg-[#F39C121F]',
    badge: 'text-[#F39C12] bg-[#F39C121F] border-[#F39C124D]',
    action:
      'text-[#F0F4F8] bg-[#243447] border-[#FFFFFF24] hover:bg-[#2C4058]',
  },
  info: {
    icon: CalendarDays,
    iconColor: 'text-[#27AE60]',
    iconBg: 'bg-[#27AE601F]',
    badge: 'text-[#27AE60] bg-[#27AE601F] border-[#27AE604D]',
    action:
      'text-[#C5D0DC] bg-transparent border-[#FFFFFF24] hover:bg-[#243447]',
  },
  order: {
    icon: ClipboardList,
    iconColor: 'text-[#3498DB]',
    iconBg: 'bg-[#2980B91F]',
    badge: 'text-[#3498DB] bg-[#2980B91F] border-[#3498DB4D]',
    action:
      'text-[#C5D0DC] bg-transparent border-[#FFFFFF24] hover:bg-[#243447]',
  },
  staff: {
    icon: Coffee,
    iconColor: 'text-[#E67E22]',
    iconBg: 'bg-[#E67E221F]',
    badge: 'text-[#E67E22] bg-[#E67E2214] border-[#E67E224D]',
    action: '',
  },
}

const ALERTS = [
  {
    id: 1,
    level: 'critical',
    title: 'Kitchen Delay',
    badge: 'Critical',
    message:
      'ORD-0412 delayed 24 mins - Awaiting chef confirmation on Table T03',
    time: 'Now',
    isNow: true,
    action: 'Resolve',
  },
  {
    id: 2,
    level: 'warning',
    title: 'Low Inventory',
    badge: 'Warning',
    message: 'Fresh Lime below 5 kg threshold - current stock: 3.2 kg',
    time: '1 min ago',
    action: 'Reorder',
  },
  {
    id: 3,
    level: 'info',
    title: 'Reservation Approved',
    badge: 'Info',
    message: 'Fresh Lime below 5 kg threshold - current stock: 3.2 kg',
    time: '3 mins ago',
    action: 'View',
  },
  {
    id: 4,
    level: 'order',
    title: 'New Online Order',
    badge: 'Order',
    message: 'Pickup order #ORD-0418 received - 3 items, LKR 2,650',
    time: '5 mins ago',
    action: 'View',
  },
  {
    id: 5,
    level: 'staff',
    title: 'Staff Break Started',
    badge: 'Staff',
    message: 'Pickup order #ORD-0418 received - 3 items, LKR 2,650',
    time: '5 mins ago',
    action: null,
  },
]

const LiveAlertFeed = () => {
  const [alerts, setAlerts] = useState(ALERTS)

  const markAllRead = () => {
    console.log('Mark all read')
  }

  const handleAction = (alert) => {
    console.log(`${alert.action}:`, alert.id)

    if (alert.action === 'Resolve') {
      setAlerts((prev) => prev.filter((item) => item.id !== alert.id))
    }
  }

  return (
    <section className="w-full min-w-0 font-['DM_Sans',sans-serif]">
      <div className="w-full min-w-0 rounded-xl sm:rounded-2xl border border-[#FFFFFF14] bg-[#1C2A38] p-3 sm:p-4 lg:p-5">

        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-bold leading-tight text-white">
              Live Alert Feed
            </h1>

            <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-[#8A9BB0]">
              Live restaurant activities and urgent events
            </p>
          </div>

          <button
            type="button"
            onClick={markAllRead}
            className="inline-flex min-h-9 w-full shrink-0 items-center justify-center rounded-lg border border-[#FFFFFF24] bg-[#243447] px-3 py-2 text-xs sm:w-auto sm:px-4 sm:text-sm font-semibold text-[#F0F4F8] transition hover:bg-[#2C4058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]"
          >
            Mark All Read
          </button>
        </div>

        {/* Alert list */}
        <div className="mt-4 flex max-h-[680px] min-w-0 flex-col overflow-y-auto">
          {alerts.length > 0 ? (
            alerts.map((alert) => {
              const style = STYLES[alert.level]
              const Icon = style.icon

              return (
                <article
                  key={alert.id}
                  className="flex min-w-0 items-start gap-3 border-b border-[#FFFFFF14] px-1 py-4 last:border-b-0 sm:gap-4 sm:px-2"
                >
                  {/* Alert icon */}
                  <div
                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${style.iconBg}`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={style.iconColor}
                    />
                  </div>

                  {/* Alert content */}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    {/* Title and badge */}
                    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="text-xs sm:text-sm font-semibold leading-snug text-white">
                        {alert.title}
                      </h2>

                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] sm:text-[10px] font-medium leading-tight ${style.badge}`}
                      >
                        {alert.badge}
                      </span>
                    </div>

                    {/* Message */}
                    <p className="break-words text-[11px] sm:text-xs leading-relaxed text-[#8A9BB0]">
                      {alert.message}
                    </p>

                    {/* Time */}
                    <div>
                      {alert.isNow ? (
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] sm:text-[11px] font-semibold ${style.badge}`}
                        >
                          {alert.time}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] leading-tight text-[#8A9BB0]">
                          <Clock size={12} className="shrink-0" />
                          {alert.time}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action button */}
                  {alert.action && (
                    <button
                      type="button"
                      onClick={() => handleAction(alert)}
                      className={`mt-0.5 min-h-8 shrink-0 rounded-lg border px-2.5 sm:px-3 text-[10px] sm:text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] ${style.action}`}
                    >
                      {alert.action}
                    </button>
                  )}
                </article>
              )
            })
          ) : (
            <div className="flex min-h-32 items-center justify-center px-4 text-center">
              <p className="text-xs sm:text-sm text-[#8A9BB0]">
                No alerts to display.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default LiveAlertFeed
