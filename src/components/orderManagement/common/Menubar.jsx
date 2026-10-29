import React, { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'Menu Browse', path: '/admin/order-management?page=menu-browse' },
  { label: 'Order Build', path: '/admin/order-management?page=order-build' },
  { label: 'Order Summary', path: '/admin/order-management?page=order-summary' },
  { label: 'Order History', path: '/admin/order-management?page=order-history' },
  { label: 'Order Detail', path: '/admin/order-management?page=order-detail' },
]

const Menubar = () => {
  const barRef = useRef(null)
  const { search } = useLocation()

  // URL-la irukkura ?page=... value (illana menu-browse default)
  const currentPage = new URLSearchParams(search).get('page') ?? 'menu-browse'

  // Active tab mobile-la velila irundha, athai view-kulla konduvarum
  useEffect(() => {
    const active = barRef.current?.querySelector('[aria-current="page"]')
    active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  }, [currentPage])

  return (
    <div
      ref={barRef}
      className="w-full max-w-[650px] min-h-[60px] rounded-[14px] border-[1px] border-[#FFFFFF14] p-[10px] bg-[#1C2A38] flex items-center gap-2 sm:gap-3 mt-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
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

export default Menubar