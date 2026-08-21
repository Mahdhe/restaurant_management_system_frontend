import { CalendarDays } from "lucide-react";
import { useState } from "react";

export default function QuickFilters() {
  const [activeFilter, setActiveFilter] = useState("Today");

  const filters = ["Today", "This Week", "This Month", "Custom"];

  return (
    <div className="mt-4 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden pb-3">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5" >
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Quick Filters
        </h2>
      </div>

      <div className="py-2.5 px-5">
        <div className="grid grid-cols-2 gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-md py-1.5 px-3 text-[12px] font-medium transition-colors ${activeFilter === filter ? "bg-[#e67e22] text-[#f0f4f8]" : "border border-white/15 bg-[#243447] text-[#8a9bb0]"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-[10px] border border-white/15 bg-[#0F1923] px-3 py-2">
          <span className="text-[14px] text-[#F0F4F8]">mm/dd/yyyy</span>

          <CalendarDays size={15} className="text-[#8a9bb0]" />
        </div>

        <button className="mt-2 w-full rounded-md bg-[#e67e22] py-1.5 text-[12px] font-semibold text-[#f0f4f8]">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
