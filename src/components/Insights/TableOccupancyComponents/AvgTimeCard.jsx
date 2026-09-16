const data = [
  {
    label: "2-person tables",
    value: "38 min",
    valueColor: "text-[#3BB273]",
  },
  {
    label: "4-person tables",
    value: "52 min",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "6+ person tables",
    value: "74 min",
    valueColor: "text-[#E74C3C]",
  },
];

export default function AvgTurnTime() {
  return (
    <div className="w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
          Item Insights
        </h2>
      </div>

      <div className="p-4 sm:p-5">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3 border-b border-white/15 py-[9.5px] min-w-0"
          >
            <span className="min-w-0 text-[12px] sm:text-[13px] text-[#8a9bb0]">
              {item.label}
            </span>

            <span
              className={`shrink-0 text-right text-[12px] sm:text-[13px] font-semibold ${item.valueColor}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
