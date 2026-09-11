import { costs } from "../../../../data/AnalyticsData/ProgressData";
import ProgressBar from "../PrograssBar";

export default function CostBreakdown() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#f0f4f8]">
          Payment Breakdown
        </h2>
      </div>

      <div className="w-full min-w-0">
        <ProgressBar data={costs} />
      </div>
    </div>
  );
}
