import React from 'react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Notification Center', path: '/CRM-management/notification-center' },
  { label: 'Real Time Alerts', path: '/CRM-management/real-time-alerts' },
]

const Notifications02RedirectButtons = () => {
  return (
    <div className="w-full max-w-[340px] min-h-[60px] rounded-[14px] border-[1px] border-[#FFFFFF14] p-[10px] bg-[#1C2A38] flex items-center gap-2 sm:gap-3 mt-3 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden box-border">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `font-[DM_Sans] font-semibold text-[14px] max-sm:text-[13px] leading-[18px] tracking-[0%] py-[8px] px-[12px] sm:px-[16px] text-center flex items-center justify-center shrink-0 whitespace-nowrap rounded-[10px] box-border transition-colors duration-150 ${
              isActive
                ? 'bg-[#E67E22] text-[#F0F4F8]'
                : 'text-[#8A9BB0] hover:bg-[#243447] hover:text-[#F0F4F8]'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default Notifications02RedirectButtons