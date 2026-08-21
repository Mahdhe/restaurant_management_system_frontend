export default function AnalyticsHeader() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h1 className="text-[28px] font-bold text-[#f0f4f8]">
          Reports & Analytics
        </h1>

        <p className="text-[16px] text-[#556070]">
          Monitor restaurant performance, sales trends and operational insights
        </p>
      </div>

      <div className="flex gap-3">
        <button className="px-4 rounded-[10px] py-2 bg-[#243447] border border-white/10 font-medium text-[14px] text-[#f0f4f8]">
          Filter
        </button>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          Export
        </button>
      </div>
    </div>
  );
}
