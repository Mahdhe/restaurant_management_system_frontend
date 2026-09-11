export default function AnalyticsHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-5 w-full min-w-0">
      <div className="min-w-0">
        <h1 className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#f0f4f8]">
          Reports & Analytics
        </h1>

        <p className="text-[13px] sm:text-[14px] lg:text-[16px] text-[#556070]">
          Monitor restaurant performance, sales trends and operational insights
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
        <button className="px-3 sm:px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[13px] sm:text-[14px] text-[#f0f4f8]">
          Filter
        </button>

        <button className="px-3 sm:px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[13px] sm:text-[14px]">
          Export
        </button>
      </div>
    </div>
  );
}
