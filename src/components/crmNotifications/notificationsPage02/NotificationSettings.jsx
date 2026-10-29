
import React, { useState } from 'react'

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#E67E22',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const BellIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="#E67E22"
    stroke="#E67E22"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

const ClipboardIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
)

const ChefHatIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>
)

const CalendarIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
)

const BoxIcon = () => (
  <svg {...iconProps} aria-hidden="true">
    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
    <path d="M12 22V12" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="m7.5 4.27 9 5.15" />
  </svg>
)

const StaffIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#E67E22"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="4" />
    <path d="M1.5 21v-1.5a6 6 0 0 1 6-6h3a6 6 0 0 1 6 6V21z" />
    <circle cx="17.5" cy="9" r="2.8" />
    <path d="M17 13.6a5 5 0 0 1 5.5 4.9V21H18v-1.5c0-2-.5-3.9-1-5.9z" />
  </svg>
)

const INITIAL_SETTINGS = [
  {
    id: 'orders',
    title: 'Order Notifications',
    description: 'New, delayed, completed',
    Icon: ClipboardIcon,
    enabled: true,
  },
  {
    id: 'kitchen',
    title: 'Kitchen Notifications',
    description: 'Kitchen delays and updates',
    Icon: ChefHatIcon,
    enabled: true,
  },
  {
    id: 'reservations',
    title: 'Reservation Notifications',
    description: 'Bookings and schedule changes',
    Icon: CalendarIcon,
    enabled: true,
  },
  {
    id: 'inventory',
    title: 'Inventory Notifications',
    description: 'Low stock and supply alerts',
    Icon: BoxIcon,
    enabled: true,
  },
  {
    id: 'staff',
    title: 'Staff Notifications',
    description: 'Staff activity and updates',
    Icon: StaffIcon,
    enabled: true,
  },
]

const NotificationSettings = () => {
  const [settings, setSettings] = useState(INITIAL_SETTINGS)
  const [saved, setSaved] = useState(false)

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((setting) =>
        setting.id === id
          ? { ...setting, enabled: !setting.enabled }
          : setting
      )
    )
    setSaved(false)
  }

  const handleSave = () => {
    console.log(
      'Notification settings:',
      settings.map(({ id, enabled }) => ({ id, enabled }))
    )
    setSaved(true)
  }

  return (
    <section className="w-full min-w-0 font-['DM_Sans',sans-serif]">
      <div className="flex w-full min-w-0 flex-col rounded-xl border border-[#FFFFFF14] bg-[#1C2A38] p-3 sm:rounded-2xl sm:p-5">

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#FFFFFF14] pb-4 sm:pb-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E67E220F]">
            <BellIcon />
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold leading-snug text-[#F0F4F8] sm:text-base">
              Notification Settings
            </h2>
            <p className="mt-1 text-[11px] leading-relaxed text-[#8A9BB0] sm:text-xs">
              Manage what you receive
            </p>
          </div>
        </div>

        {/* Settings */}
        <div className="flex flex-col">
          {settings.map(({ id, title, description, Icon, enabled }) => (
            <div
              key={id}
              className="flex min-w-0 items-center gap-2.5 border-b border-[#FFFFFF0A] py-3 sm:gap-3 sm:py-4"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                <Icon />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="break-words text-xs font-semibold leading-snug text-[#F0F4F8] sm:text-sm">
                  {title}
                </h3>
                <p className="mt-1 break-words text-[10px] leading-relaxed text-[#8A9BB0] sm:text-xs">
                  {description}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={enabled}
                aria-label={title}
                onClick={() => toggleSetting(id)}
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2A38] ${
                  enabled ? 'bg-[#E67E22]' : 'bg-[#435164]'
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-full bg-[#F0F4F8] shadow-sm transition-transform ${
                    enabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Save button */}
        <div className="pt-4 sm:pt-5">
          <button
            type="button"
            onClick={handleSave}
            className="flex min-h-10 w-full items-center justify-center rounded-lg bg-[#E67E22] px-4 py-2 text-xs font-bold text-[#F0F4F8] transition hover:bg-[#D96F16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2A38] sm:text-sm"
          >
            {saved ? 'Settings Saved' : 'Save Settings'}
          </button>

          {saved && (
            <p
              role="status"
              className="mt-2 text-center text-[11px] text-[#27AE60] sm:text-xs"
            >
              Settings saved for this session.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default NotificationSettings
