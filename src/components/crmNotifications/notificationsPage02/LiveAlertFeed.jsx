import React, { useState } from 'react'
import { ChefHat, Package, CalendarDays, ClipboardList, Coffee, Clock } from 'lucide-react'

const STYLES = {
    critical: {
        icon: ChefHat,
        iconColor: 'text-[#E74C3C]',
        iconBg: 'bg-[#E74C3C1F]',
        badge: 'text-[#E74C3C] bg-[#E74C3C1F] border-[#E74C3C4D]',
        action: 'text-[#E74C3C] bg-[#E74C3C33] border-[#E74C3C4D] hover:bg-[#E74C3C4D]',
    },
    warning: {
        icon: Package,
        iconColor: 'text-[#F39C12]',
        iconBg: 'bg-[#F39C121F]',
        badge: 'text-[#F39C12] bg-[#F39C121F] border-[#F39C124D]',
        action: 'text-[#F0F4F8] bg-[#243447] border-[#FFFFFF24] hover:bg-[#2C4058]',
    },
    info: {
        icon: CalendarDays,
        iconColor: 'text-[#27AE60]',
        iconBg: 'bg-[#27AE601F]',
        badge: 'text-[#27AE60] bg-[#27AE601F] border-[#27AE604D]',
        action: 'text-[#C5D0DC] bg-transparent border-[#FFFFFF24] hover:bg-[#243447]',
    },
    order: {
        icon: ClipboardList,
        iconColor: 'text-[#3498DB]',
        iconBg: 'bg-[#2980B91F]',
        badge: 'text-[#3498DB] bg-[#2980B91F] border-[#3498DB4D]',
        action: 'text-[#C5D0DC] bg-transparent border-[#FFFFFF24] hover:bg-[#243447]',
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
        message: 'ORD-0412 delayed 24 mins - Awaiting chef confirmation on Table T03',
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
        message: 'Pickup order #ORD-0418 received - 3items, LKR 2,650',
        time: '5 mins ago',
        action: 'View',
    },
    {
        id: 5,
        level: 'staff',
        title: 'Staff Break Started',
        badge: 'Staff',
        message: 'Pickup order #ORD-0418 received - 3items, LKR 2,650',
        time: '5 mins ago',
        action: null,
    },
]

const LiveAlertFeed = () => {
    const [alerts, setAlerts] = useState(ALERTS)

    const markAllRead = () => console.log('Mark all read')
    const handleAction = (alert) => {
        console.log(`${alert.action}:`, alert.id)
        if (alert.action === 'Resolve') {
            setAlerts((prev) => prev.filter((a) => a.id !== alert.id))
        }
    }

    return (
        <section className="w-[810px] h-[994px] gap-[20px] flex font-['DM_Sans',sans-serif]">
            <div className="w-[810px] h-[994px] rounded-[16px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14]">

                {/* Header */}
                <div className="w-[772px] h-[38px] gap-[16px] flex justify-between items-center">

                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-[18px] leading-[100%] tracking-[0%] text-[#FFFFFF]">Live Alert Feed</h1>
                        <p className="text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Live restaurant activities and urgent events</p>
                    </div>

                    <div className="w-[130px] h-[40px] gap-[12px] flex">
                        <button
                            onClick={markAllRead}
                            className="w-[130px] h-[40px] rounded-[10px] border-[1px] py-[8px] px-[16px] flex justify-center items-center gap-[10px] bg-[#243447] border-[#FFFFFF24] transition hover:bg-[#2C4058]"
                        >
                            <p className="font-bold text-[14px] leading-[18px] tracking-[0.8%] text-[#F0F4F8]">Mark All Read</p>
                        </button>
                    </div>

                </div>

                {/* Alert list */}
                <div className="w-[770px] h-[643px] gap-[10px] pb-[20px] flex">
                    <div className="w-[770px] h-[667px] gap-[10px] py-[10px] flex">
                        <div className="w-[770px] h-[647px] gap-[10px] p-[10px] bg-[#1C2A38] flex flex-col rounded-[16px]">

                            {alerts.map((a) => {
                                const s = STYLES[a.level]
                                const Icon = s.icon
                                return (
                                    <div
                                        key={a.id}
                                        className={`w-[750px] ${a.isNow ? 'h-[112px]' : 'h-[84px]'} shrink-0 gap-[10px] py-[6px] px-[10px] border-b-[1px] bg-[#1C2A38] border-[#FFFFFF14] flex items-center`}
                                    >
                                        {/* Icon */}
                                        <div className={`w-[50px] h-[50px] shrink-0 rounded-[999px] flex items-center justify-center ${s.iconBg}`}>
                                            <Icon size={18} className={s.iconColor} />
                                        </div>

                                        {/* Text */}
                                        <div className="w-[670px] gap-[10px] py-[10px] px-[4px] flex items-center justify-between">

                                            <div className="flex flex-col gap-[6px] min-w-0">
                                                <div className="flex items-center gap-[8px]">
                                                    <h2 className="font-semibold text-[13px] leading-none text-white">{a.title}</h2>
                                                    <span className={`h-[18px] px-[8px] rounded-full border flex items-center text-[10px] font-medium ${s.badge}`}>
                                                        {a.badge}
                                                    </span>
                                                </div>

                                                <p className="text-[11px] leading-none text-[#8A9BB0]">{a.message}</p>

                                                {a.isNow ? (
                                                    <span className={`h-[22px] w-fit px-[14px] rounded-full border flex items-center text-[10px] font-semibold ${s.badge}`}>
                                                        {a.time}
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-[4px] text-[10px] leading-none text-[#8A9BB0]">
                                                        <Clock size={10} />
                                                        {a.time}
                                                    </span>
                                                )}
                                            </div>

                                            {a.action && (
                                                <button
                                                    onClick={() => handleAction(a)}
                                                    className={`shrink-0 h-[28px] px-[14px] rounded-[8px] border text-[11px] font-semibold transition ${s.action}`}
                                                >
                                                    {a.action}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LiveAlertFeed