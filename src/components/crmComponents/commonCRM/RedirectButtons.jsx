import React from 'react'
import { NavLink } from 'react-router-dom'

const menuItems = [
  { label: 'Customer Dashboard', path: '/CRM-management/customer-dashboard' },
  { label: 'Customer List', path: '/CRM-management/customer-list' },
  { label: 'Customer Profile', path: '/CRM-management/customer-profile' },
  { label: 'Order History', path: '/CRM-management/Order-history' },
  { label: 'Loyalty Program', path: '/CRM-management/loyalty-program' },
  { label: 'Frequent Customer Tracking', path: '/CRM-management/frequent-customer-tracking' },
]

const RedirectButtons = () => {
  return (
    <div className="w-full max-w-[980px] min-h-[60px] rounded-[14px] border-[1px] border-[#FFFFFF14] p-[10px] bg-[#1C2A38] flex items-center gap-2 sm:gap-3 mt-3 overflow-x-auto">
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] px-2 sm:px-3 py-1 text-center flex items-center shrink-0 whitespace-nowrap rounded-[10px] transition-colors duration-150 ${
              isActive
                ? 'bg-[#E67E22] text-[#F0F4F8] py-[8px] px-[12px] sm:px-[16px]'
                : 'text-[#8A9BB0]'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default RedirectButtons
