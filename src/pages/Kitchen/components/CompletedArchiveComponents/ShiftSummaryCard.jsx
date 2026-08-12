const data = [
  {
    label: "Shift",
    value: "Evening",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "Chef Lead",
    value: "Chef Ruwan",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "Orders Handled",
    value: "68",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "Export Status",
    value: "Ready",
    valueColor: "text-[#27ae60]",
  },
];

export default function ShiftSummaryCard() {
  return (
    <div className="mt-6 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden pb-8">
      {/* header */}
      <h2 className="px-5 pt-5 pb-2.5 text-[18px] border-b border-white/15 font-bold text-[#f0f4f8]">
        Shift Summary
      </h2>

      {/* details */}
      <div className="px-4 pt-8 pb-3 space-y-5.5">
        {data.map((data) => (
          <div
            key={data.label}
            className="flex items-center justify-between border-b border-white/15 pb-1"
          >
            <p className="text-[13px] text-[#8a9bb0]">{data.label}</p>
            <span className={`text-[13px] font-semibold ${data.valueColor}`}>
              {data.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
