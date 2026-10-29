import { Flame } from "lucide-react";

export default function QuickInsight() {
  return (
    <div className="w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#f0f4f8]">
          Quick Insight
        </h2>
      </div>

      <div className="m-4 sm:m-5 rounded-xl bg-[#E74C3C0F] border border-[#E74C3C3D] px-3 sm:px-2 py-2.5 text-center">
        <Flame size={20} className="mx-auto text-[#e67e22]" />

        <h2 className="mt-2 text-[13px] sm:text-[14px] font-bold text-[#f0f4f8] leading-5">
          Saturday is your busiest day
        </h2>

        <span className="block mt-1 leading-4 text-[11px] sm:text-[12px] text-[#8A9BB0]">
          Consider extra staffing 6-9 PM on Fri & Sat
        </span>
      </div>
    </div>
  );
}
