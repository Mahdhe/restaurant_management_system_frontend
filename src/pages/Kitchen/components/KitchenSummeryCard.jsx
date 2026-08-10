export const Summery = [
  {
    label: "Active cooks",
    value: "5",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "Queue load",
    value: "High",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "Longest delay",
    value: "24 min",
    valueColor: "text-[#e74c3c]",
  },
  {
    label: "Completed today",
    value: "68",
    valueColor: "text-[#27ae60]",
  },
];

export default function KitchenSummeryCard() {
  return (
    <div className="bg-[#1a2c38] border border-white/15 rounded-[14px] font-dmsans pb-5">
      <h1 className="px-5 pt-5 pb-2.5 border-b border-white/15 font-bold text-[18px] leading-normal">
        Kitchen Summery
      </h1>

      <div className="px-4 pt-8 pb-3 space-y-5.5">
        {Summery.map((sum) => (
          <div className="flex justify-between border-b border-white/15 pb-1">
            <p className="text-[13px] text-[#8a9bb0]">{sum.label}</p>
            <span className={`font-semibold text-[13px] ${sum.valueColor}`}>
              {sum.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
