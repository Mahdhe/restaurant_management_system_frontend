import { BarChart3, ChevronDown } from "lucide-react";
import BarChart from "../BarChart";
import { revenueLabels, revenueTrend } from "../../../../data/GraphData";

export default function RevenueTrend() {
  return (
    <div className="mt-4 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-5 font-dmsans">
      {/* header */}
      <div className="flex items-center justify-between pb-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#E67E220F] text-[#e67e22]">
            <BarChart3 size={18} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Revenue Trend
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">Last 7 days</p>
          </div>
        </div>

        <button className="flex items-center gap-1.5 rounded-[10px] border border-white/10 bg-[#0F1923] px-4 py-2 text-[14px] text-[#f0f4f8] font-semibold">
          Last 7 days
          <ChevronDown size={11} />
        </button>
      </div>

      <BarChart data={revenueTrend} labels={revenueLabels} />
    </div>
  );
}
