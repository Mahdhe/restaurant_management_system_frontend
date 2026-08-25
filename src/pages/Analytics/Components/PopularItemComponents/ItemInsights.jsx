const insights = [
  {
    label: "Fastest rising",
    value: "Prawn Curry",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "Declining",
    value: "Veg Sandwich",
    valueColor: "text-[#E74C3C]",
  },
  {
    label: "Highest margin",
    value: "Lava Cake",
    valueColor: "text-[#3BB273]",
  },
  {
    label: "New this week",
    value: "Mango Lassi",
    valueColor: "text-[#e67e22]",
  },
];

export default function ItemInsights() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans">
      <div className="border border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
          Item Insights
        </h2>
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
