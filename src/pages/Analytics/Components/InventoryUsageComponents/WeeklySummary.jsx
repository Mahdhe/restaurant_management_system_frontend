export default function WeeklySummary() {
  return (
    <div className="mt-4 overflow-hidden rounded-[14px] border border-white/10 bg-[#1c2a38] font-dmsans">
      {/* Header */}
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Weekly Summary
        </h2>
      </div>

      {/* Content */}
      <div className="px-5">
        {/* Most Used */}
        <div className="flex flex-col items-center pt-5 pb-2 text-center">
          <p className="text-[13px] uppercase text-[#8a9bb0]">MOST USED</p>

          <h2 className="mt-0.5 text-[24px] font-bold text-[#e67e22]">
            Chicken Breast
          </h2>

          <p className="mt-0.5 text-[12px] text-[#8a9bb0]">240 Kg this week</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Low Stock Impact */}
        <div className="flex flex-col items-center py-3 text-center">
          <p className="text-[13px] uppercase text-[#8a9bb0]">
            LOW STOCK IMPACT
          </p>

          <h2 className="mt-0.5 text-[24px] font-bold text-[#e74c3c]">
            4 Items
          </h2>

          <p className="mt-0.5 text-[12px] text-[#8a9bb0]">Need reordering</p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Total Food Cost */}
        <div className="flex flex-col items-center py-3 pb-5 text-center">
          <p className="text-[13px] uppercase text-[#8a9bb0]">
            TOTAL FOOD COST
          </p>

          <h2 className="mt-0.5 text-[24px] font-bold text-[#27ae60]">
            LKR 98K
          </h2>

          <p className="mt-0.5 text-[12px] text-[#8a9bb0]">52% of revenue</p>
        </div>
      </div>
    </div>
  );
}
