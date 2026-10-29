
import React from 'react'
import { ChartColumn, ChevronDown } from 'lucide-react'

const WEEK_DATA = [
    { day: 'Mon', value: 17 },
    { day: 'Tue', value: 22 },
    { day: 'Wed', value: 13 },
    { day: 'Thu', value: 29 },
    { day: 'Fri', value: 24 },
    { day: 'Sat', value: 20 },
    { day: 'Sun', value: 11 },
]

const Y_TICKS = [30, 20, 10, 0]

const TOTAL = WEEK_DATA.reduce((sum, d) => sum + d.value, 0)
const RESOLVED_PERCENT = 89
const ACTIVE = 15

const STATS = [
    { value: TOTAL, label: 'Total Alerts', color: 'text-[#E67E22]' },
    { value: `${RESOLVED_PERCENT}%`, label: 'Resolved', color: 'text-[#27AE60]' },
    { value: ACTIVE, label: 'Active', color: 'text-[#E67E22]' },
]

const AlertFrequency = () => {
    return (
        <section className="my-4 w-full min-w-0 font-['DM_Sans',sans-serif]">
            <div className="flex w-full min-w-0 flex-col gap-5 rounded-2xl border border-[#FFFFFF14] bg-[#1C2A38] p-4 sm:p-5 lg:p-6">

                {/* Header */}
                <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E67E220F]">
                            <ChartColumn size={18} className="text-[#E67E22]" />
                        </div>

                        <div className="min-w-0">
                            <h2 className="text-sm font-semibold leading-5 tracking-wide text-white sm:text-base">
                                Alert Frequency
                            </h2>
                            <p className="mt-1 text-[11px] leading-4 text-[#8A9BB0] sm:text-xs">
                                This week - all alert types
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#FFFFFF24] bg-[#243447] px-3 text-xs font-semibold text-[#F0F4F8] transition hover:bg-[#2C4058] sm:h-10 sm:px-4 sm:text-sm"
                    >
                        <span>This Week</span>
                        <ChevronDown size={14} />
                    </button>
                </div>

                {/* Chart */}
                <div className="w-full min-w-0 pt-2">
                    <div className="relative h-44 w-full sm:h-48 md:h-52">
                        {/* Grid lines and Y-axis labels */}
                        {Y_TICKS.map((tick, i) => (
                            <div
                                key={tick}
                                className="absolute right-0 flex w-full items-center"
                                style={{
                                    top: `${(i / (Y_TICKS.length - 1)) * 100}%`,
                                }}
                            >
                                <span className="w-7 shrink-0 -translate-y-1/2 text-[10px] font-medium text-[#8A9BB0] sm:w-9 sm:text-xs">
                                    {tick}
                                </span>

                                <div className="flex-1 border-t border-dashed border-[#FFFFFF14]" />
                            </div>
                        ))}

                        {/* Values */}
                        <div className="absolute bottom-0 left-7 right-0 flex sm:left-9">
                            {WEEK_DATA.map((d) => (
                                <div
                                    key={d.day}
                                    className="flex min-w-0 flex-1 justify-center"
                                >
                                    <span className="text-[10px] font-bold text-[#E67E22] sm:text-xs">
                                        {d.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Day labels */}
                    <div className="mt-3 flex pl-7 sm:pl-9">
                        {WEEK_DATA.map((d) => (
                            <div
                                key={d.day}
                                className="flex min-w-0 flex-1 justify-center"
                            >
                                <span className="text-[10px] font-semibold text-white sm:text-xs">
                                    {d.day}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 border-t border-[#FFFFFF14] pt-5 sm:gap-4 sm:pt-6">
                    {STATS.map((s) => (
                        <div
                            key={s.label}
                            className="flex min-w-0 flex-col items-center gap-2 text-center"
                        >
                            <span className={`text-xl font-bold leading-none sm:text-2xl lg:text-[28px] ${s.color}`}>
                                {s.value}
                            </span>
                            <span className="text-[10px] leading-tight text-[#8A9BB0] sm:text-xs lg:text-sm">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AlertFrequency
