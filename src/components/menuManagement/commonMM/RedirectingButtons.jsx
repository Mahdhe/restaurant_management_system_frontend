import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'Menu Items List', path: '/admin/menu-management?page=items-list' },
  { label: 'Add/Edit Items', path: '/admin/menu-management?page=add-edit-items' },
  { label: 'Category Management', path: '/admin/menu-management?page=category-management' },
  { label: 'Availability Scheduler', path: '/admin/menu-management?page=last-page' },
]

const MenuManagementMenubar = () => {
  const { search } = useLocation()

  // URL-la irukkura ?page=... value (illana items-list default)
  const currentPage = new URLSearchParams(search).get('page') ?? 'items-list'

  return (
    <div className="w-full max-w-[680px] min-h-[60px] rounded-[14px] border-[1px] border-[#FFFFFF14] p-[10px] bg-[#1C2A38] flex items-center gap-2 sm:gap-3 mt-3 overflow-x-auto">
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

export default MenuManagementMenubar