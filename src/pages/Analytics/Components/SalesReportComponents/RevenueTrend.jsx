import { BarChart3, ChevronDown } from "lucide-react";
import BarChart from "../BarChart";
import { revenueLabels, revenueTrend } from "../../../../data/AnalyticsData/GraphData";

export default function RevenueTrend() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-4 sm:p-5 font-dmsans">
      {/* header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-3.5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#E67E220F] text-[#e67e22]">
            <BarChart3 size={18} />
          </div>

          <div className="min-w-0">
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Revenue Trend
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">Last 7 days</p>
          </div>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-[10px] border border-white/10 bg-[#0F1923] px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] text-[#f0f4f8] font-semibold whitespace-nowrap">
          Last 7 days
          <ChevronDown size={11} />
        </button>
      </div>

      <div className="w-full min-w-0 overflow-hidden">
        <BarChart data={revenueTrend} labels={revenueLabels} />
      </div>
    </div>
  );
}
