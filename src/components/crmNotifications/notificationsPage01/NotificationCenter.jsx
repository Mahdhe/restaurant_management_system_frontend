import React, { useMemo, useState } from 'react'
import {
    CalendarCheck,
    TriangleAlert,
    ClipboardList,
    Pencil,
    Check,
    Trash2,
    Clock,
} from 'lucide-react'

const FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'Unread', value: 'unread' },
    { label: 'Orders', value: 'orders' },
    { label: 'Inventory', value: 'inventory' },
    { label: 'Reservations', value: 'reservations' },
    { label: 'Staff', value: 'staff' },
    { label: 'Systems', value: 'systems' },
]

const TYPE_STYLES = {
    reservations: { icon: CalendarCheck, color: 'text-[#3498DB]', bg: 'bg-[#2980B91F]' },
    inventory: { icon: TriangleAlert, color: 'text-[#E74C3C]', bg: 'bg-[#E74C3C1F]' },
    orders: { icon: ClipboardList, color: 'text-[#F1C40F]', bg: 'bg-[#F1C40F1F]' },
    staff: { icon: Pencil, color: 'text-[#3498DB]', bg: 'bg-[#2980B91F]' },
    systems: { icon: Clock, color: 'text-[#8A9BB0]', bg: 'bg-[#8A9BB01F]' },
}

const INITIAL_DATA = [
    { id: 1, type: 'reservations', title: 'New Reservation', message: 'Table T07 Booked for 8.30 PM - Party of 4', time: '2 mins ago', read: true },
    { id: 2, type: 'inventory', title: 'Low Stock Warning', message: 'Chicken Breast below threshold - only 2.3 kg remaining', time: '8 mins ago', read: true },
    { id: 3, type: 'orders', title: 'Order Delayed', message: 'ORD-0412 has been delayed over 20 mins - Table T03', time: '12 mins ago', read: true },
    { id: 4, type: 'staff', title: 'Staff Clocked in', message: 'Kasun Perera started shift - Floor Section B', time: '35 mins ago', read: true },
    // extra items for "Load More"
    { id: 5, type: 'orders', title: 'New Order', message: 'ORD-0415 placed - Table T05', time: '48 mins ago', read: false },
    { id: 6, type: 'inventory', title: 'Low Stock Warning', message: 'Olive Oil below threshold - only 1.2 L remaining', time: '1 hr ago', read: false },
    { id: 7, type: 'reservations', title: 'Reservation Cancelled', message: 'Table T02 booking for 7.00 PM cancelled', time: '2 hrs ago', read: false },
    { id: 8, type: 'systems', title: 'System Update', message: 'POS system updated to v2.4.1', time: '3 hrs ago', read: false },
]

const PAGE_SIZE = 4

const NotificationCenter = () => {
    const [items, setItems] = useState(INITIAL_DATA)
    const [filter, setFilter] = useState('all')
    const [query, setQuery] = useState('')
    const [visible, setVisible] = useState(PAGE_SIZE)

    const filtered = useMemo(() => {
        return items.filter((n) => {
            const matchesFilter =
                filter === 'all' ? true : filter === 'unread' ? !n.read : n.type === filter
            const q = query.trim().toLowerCase()
            const matchesQuery =
                !q || n.title.toLowerCase().includes(q) || n.message.toLowerCase().includes(q)
            return matchesFilter && matchesQuery
        })
    }, [items, filter, query])

    const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))
    const markRead = (id) =>
        setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
    const remove = (id) => setItems((prev) => prev.filter((n) => n.id !== id))

    return (
        <section className="w-full min-w-0 max-w-[812px] mx-auto font-['DM_Sans',sans-serif]">
            <div className="w-full min-w-0 h-[764px] rounded-[16px] border border-[#FFFFFF14] bg-[#1C2A38] p-4 sm:p-5 max-sm:p-[14px] flex flex-col gap-5 max-sm:gap-4 box-border">

                {/* Header */}
                <div className="shrink-0 flex items-center justify-between gap-4 max-sm:gap-3">
                    <div className="flex flex-col gap-2 min-w-0">
                        <h1 className="truncate font-bold text-[18px] max-sm:text-[16px] leading-[22px] text-white">
                            Notification Center
                        </h1>
                        <p className="truncate text-[12px] leading-[16px] text-[#8A9BB0]">
                            All system and activity alerts
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={markAllRead}
                        className="shrink-0 h-10 rounded-[10px] bg-[#243447] border border-[#FFFFFF24] px-4 max-sm:px-3 flex items-center justify-center font-semibold text-[14px] max-sm:text-[13px] leading-[18px] text-[#F0F4F8] whitespace-nowrap box-border transition hover:bg-[#2C4058]"
                    >
                        Mark All Read
                    </button>
                </div>

                {/* Search + filters */}
                <div className="shrink-0 min-w-0 flex flex-col gap-[20px] max-sm:gap-3">
                    <div className="w-full h-10 rounded-[10px] border border-[#FFFFFF24] bg-[#243447] px-3 flex items-center box-border focus-within:border-[#E67E224D]">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value)
                                setVisible(PAGE_SIZE)
                            }}
                            aria-label="Search notifications"
                            placeholder="Search notifications"
                            className="w-full min-w-0 bg-transparent outline-none text-[14px] max-sm:text-[16px] leading-[18px] text-[#F0F4F8] placeholder:text-[#556070]"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {FILTERS.map((f) => {
                            const active = filter === f.value
                            return (
                                <button
                                    key={f.value}
                                    type="button"
                                    onClick={() => {
                                        setFilter(f.value)
                                        setVisible(PAGE_SIZE)
                                    }}
                                    className={`shrink-0 h-8 rounded-full border px-3 text-[12px] leading-[16px] font-medium whitespace-nowrap box-border transition flex items-center justify-center
                                        ${active
                                            ? 'bg-[#E67E2214] border-[#E67E224D] text-[#E67E22]'
                                            : 'bg-[#243447] border-[#FFFFFF14] text-[#8A9BB0] hover:bg-[#E67E2214] hover:border-[#E67E224D]'}`}
                                >
                                    {f.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Notification list (scrolls inside the fixed-height card) */}
                <div className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden flex flex-col gap-[10px] pr-1 [scrollbar-width:thin] [scrollbar-color:#FFFFFF24_transparent]">
                    {filtered.slice(0, visible).map((n) => {
                        const { icon: Icon, color, bg } = TYPE_STYLES[n.type]
                        return (
                            <div
                                key={n.id}
                                className="shrink-0 w-full min-w-0 rounded-[16px] bg-[#243447] p-[10px] sm:px-5 flex items-center max-sm:items-start max-sm:flex-wrap gap-3 box-border"
                            >
                                {/* Icon */}
                                <div className={`shrink-0 w-8 h-8 rounded-[6px] flex items-center justify-center ${bg}`}>
                                    <Icon size={16} className={color} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 max-sm:basis-[calc(100%-44px)] min-w-0 flex flex-col gap-1">
                                    <h2 className="break-words font-bold text-[14px] max-sm:text-[13px] leading-[18px] text-white tracking-[0.04em]">
                                        {n.title}
                                    </h2>
                                    <p className="break-words text-[12px] leading-[17px] text-[#8A9BB0] tracking-[0.04em]">
                                        {n.message}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2 mt-1">
                                        <span className="flex items-center gap-1 whitespace-nowrap text-[12px] leading-[16px] text-[#8A9BB0]">
                                            <Clock size={12} className="shrink-0" />
                                            {n.time}
                                        </span>
                                        <span
                                            className={`h-6 px-[9px] rounded-full flex items-center justify-center whitespace-nowrap text-[11px] leading-[16px] font-semibold box-border
                                                ${n.read
                                                    ? 'bg-[#8A9BB01F] text-[#8A9BB0]'
                                                    : 'bg-[#E67E2214] text-[#E67E22]'}`}
                                        >
                                            {n.read ? 'Read' : 'Unread'}
                                        </span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="shrink-0 flex items-center gap-2 max-sm:basis-full max-sm:justify-end">
                                    <button
                                        type="button"
                                        onClick={() => markRead(n.id)}
                                        aria-label="Mark as read"
                                        className="w-10 h-10 shrink-0 rounded-[12px] border border-[#FFFFFF14] bg-[#1C2A3873] flex items-center justify-center text-[#C5D0DC] box-border transition hover:bg-[#1C2A38]"
                                    >
                                        <Check size={16} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => remove(n.id)}
                                        aria-label="Delete notification"
                                        className="w-10 h-10 shrink-0 rounded-[12px] border border-[#FFFFFF14] bg-[#E74C3C1F] flex items-center justify-center text-[#E74C3C] box-border transition hover:bg-[#E74C3C33]"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                    {filtered.length === 0 && (
                        <p className="text-center text-[14px] max-sm:text-[13px] leading-[18px] text-[#8A9BB0] py-8">
                            No notifications found
                        </p>
                    )}
                </div>

                {/* Load more */}
                {visible < filtered.length && (
                    <div className="shrink-0 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setVisible((v) => v + PAGE_SIZE)}
                            className="h-10 rounded-[10px] border border-[#FFFFFF24] px-4 flex items-center justify-center whitespace-nowrap font-bold text-[14px] max-sm:text-[13px] leading-[18px] text-[#F0F4F8] box-border transition hover:bg-[#243447]"
                        >
                            Load More Notification
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default NotificationCenter