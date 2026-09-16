const insights = [
  {
    label: "Most Busy Hour",
    value: "7 PM",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "Fastest staff",
    value: "Kasun",
    valueColor: "text-[#27ae60]",
  },
  {
    label: "Top Item",
    value: "Chiken Kottu",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "Revenue Growth",
    value: "+14%",
    valueColor: "text-[#27ae60]",
  },
  {
    label: "Tables Occupied",
    value: "11 / 26",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "Orders Active",
    value: "24",
    valueColor: "text-[#2980b9]",
  },
];

export default function LiveInsights() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/15 px-5 pt-5 pb-2.5">
        <div>
          <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
            Live Insights
          </h2>

          <p className="text-[12px] text-[#8a9bb0]">Right now</p>
        </div>

        <span className="rounded-full border border-[#E74C3C4D] bg-[#e74c3c1a] px-2.25 py-1 text-[11px] text-[#e74c3c]">
          Live
        </span>
      </div>

      <div className="p-5">
        {insights.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between border-b border-white/15 py-[9.5px]"
          >
            <span className="text-[13px] text-[#8a9bb0]">{item.label}</span>

            <span className={`text-[13px] font-semibold ${item.valueColor}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
