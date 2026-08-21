export default function MonthComparison() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Month Comparison
        </h2>
      </div>

      <div className="p-5">
        {/* may */}
        <div className="mb-2.5 space-y-5">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[14px] text-[#8a9bb0] font-semibold">
              May Revenue
            </span>

            <span className="text-[12px] font-semibold text-[#f0f4f8]">
              LKR 5.1M
            </span>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-[#5560704D]">
            <div
              className="h-full rounded-full bg-[#556070]"
              style={{ width: "88%" }}
            />
          </div>

          {/* june */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[14px] text-[#8a9bb0] font-semibold">June Revenue</span>

              <span className="text-[12px] font-semibold text-[#E67E22]">LKR 5.8M</span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-[#5560704D]">
              <div
                className="h-full rounded-full bg-[#e67e22]"
                style={{ width: "96%" }}
              />
            </div>
          </div>

          {/* growth */}
          <div className="mt-2.5 rounded-2xl border border-[#3BB2733D] bg-[#3BB2731F] px-2.5 py-[13.5px] text-center">
            <p className="text-[26px] font-bold text-[#27ae60]">+14% Growth</p>

            <p className="text-[11px] text-[#8a9bb0]">Month over month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
