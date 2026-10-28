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
        <section className="w-[1132px] h-[490px] gap-[10px] flex my-4 font-['DM_Sans',sans-serif]">
            <section className="w-[1132px] h-[490px] gap-[20px] flex">
                <div className="w-[1132px] h-[490px] rounded-[16px] border-[1px] p-[20px] bg-[#1C2A38] border-[#FFFFFF14] flex flex-col">

                    {/* Header */}
                    <div className="w-[1092px] h-[64px] gap-[16px] flex justify-between items-center shrink-0">
                        <div className="py-[12px] gap-[10px] flex">
                            <div className="w-[36px] h-[36px] rounded-[12px] bg-[#E67E220F] flex items-center justify-center">
                                <ChartColumn size={14} className="text-[#E67E22]" />
                            </div>

                            <div className="flex flex-col h-[36px] gap-[2px]">
                                <h1 className="h-[18px] font-semibold text-[14px] leading-[100%] tracking-[0.08em] text-[#FFFFFF]">Alert Frequency</h1>
                                <p className="h-[16px] text-[12px] leading-[100%] tracking-[0.08em] text-[#8A9BB0]">This week- all alert types</p>
                            </div>
                        </div>

                        <button className="w-[140px] h-[40px] rounded-[10px] bg-[#243447] border-[1px] border-[#FFFFFF24] py-[8px] px-[16px] gap-[8px] flex justify-center items-center transition hover:bg-[#2C4058]">
                            <p className="font-semibold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8]">This Week</p>
                            <ChevronDown size={12} className="text-[#F0F4F8]" />
                        </button>
                    </div>

                    {/* Chart */}
                    <div className="w-[960px] mt-[10px] shrink-0">
                        <div className="relative w-full h-[190px]">

                            {/* Grid lines + y-axis labels */}
                            {Y_TICKS.map((tick, i) => (
                                <div
                                    key={tick}
                                    className="absolute left-0 right-0 flex items-center"
                                    style={{ top: `${(i / (Y_TICKS.length - 1)) * 100}%` }}
                                >
                                    <span className="w-[40px] -translate-y-1/2 text-[12px] font-medium text-[#8A9BB0]">{tick}</span>
                                    <div className="flex-1 border-t border-dashed border-[#FFFFFF14]" />
                                </div>
                            ))}

                            {/* Values sitting on the baseline */}
                            <div className="absolute left-[40px] right-0 bottom-[8px] flex">
                                {WEEK_DATA.map((d) => (
                                    <div key={d.day} className="flex-1 flex justify-center">
                                        <span className="text-[11px] font-bold text-[#E67E22]">{d.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Day labels */}
                        <div className="flex pl-[40px] mt-[20px]">
                            {WEEK_DATA.map((d) => (
                                <div key={d.day} className="flex-1 flex justify-center">
                                    <span className="text-[12px] font-semibold text-[#FFFFFF]">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="w-[1050px] mt-[30px] flex justify-around shrink-0">
                        {STATS.map((s) => (
                            <div key={s.label} className="flex flex-col items-center gap-[6px]">
                                <span className={`text-[28px] font-bold leading-none ${s.color}`}>{s.value}</span>
                                <span className="text-[14px] leading-none text-[#8A9BB0]">{s.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </section>
    )
}

export default AlertFrequency