import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'Customer Dashboard', path: '/admin/customers?page=customer-dashboard' },
  { label: 'Customer List', path: '/admin/customers?page=customer-list' },
  { label: 'Customer Profile', path: '/admin/customers?page=customer-profile' },
  { label: 'Order History', path: '/admin/customers?page=order-history' },
  { label: 'Loyalty Program', path: '/admin/customers?page=loyalty-program' },
  { label: 'Frequent Customer Tracking', path: '/admin/customers?page=frequent-customer-tracking' },
]

const RedirectButtons = () => {
  const { search } = useLocation()

  // URL-la irukkura ?page=... value (illana customer-dashboard default)
  const currentPage = new URLSearchParams(search).get('page') ?? 'customer-dashboard'

  return (
    <div className="w-full max-w-[980px] min-h-[60px] rounded-[14px] border-[1px] border-[#FFFFFF14] p-[10px] bg-[#1C2A38] flex items-center gap-2 sm:gap-3 mt-3 overflow-x-auto">
      {menuItems.map((item) => {
        const isItemActive = item.path.endsWith(`page=${currentPage}`)

        return (
          <NavLink
            key={item.path}
            to={item.path}
            aria-current={isItemActive ? 'page' : 'false'}
            className={() =>
              `font-[DM_Sans] font-semibold text-[14px] leading-[100%] tracking-[0%] px-2 sm:px-3 py-1 text-center flex items-center shrink-0 whitespace-nowrap rounded-[10px] transition-colors duration-150 ${
                isItemActive
                  ? 'bg-[#E67E22] text-[#F0F4F8] py-[8px] px-[12px] sm:px-[16px]'
                  : 'text-[#8A9BB0]'
              }`
            }
          >
            {item.label}
          </NavLink>
        )
      })}
    </div>
  )
}

export default RedirectButtons