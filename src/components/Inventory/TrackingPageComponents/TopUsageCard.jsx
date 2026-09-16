const Items = [
  {
    name: "Rice",
    value: "16kg",
    valueColor: "text-[#27ae60]",
  },
  {
    name: "Chiken",
    value: "11kg",
    valueColor: "text-[#27ae60]",
  },
  {
    name: "Tomato",
    value: "9kg",
    valueColor: "text-[#27ae60]",
  },
  {
    name: "Fresh Lime",
    value: "6kg",
    valueColor: "text-[#E74C3C]",
  },
];

export default function TopUsage() {
  return (
    <div className="w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] pb-4">
      {/* header */}
      <div className="border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#f0f4f8]">
          Top Used Today
        </h2>
      </div>

      <div className="p-3 sm:p-4">
        {Items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-3 border-b border-white/15 py-2.5"
          >
            <span className="min-w-0 text-[12px] sm:text-[13px] text-[#8a9bb0]">
              {item.name}
            </span>

            <span
              className={`shrink-0 text-[12px] sm:text-[13px] font-semibold ${item.valueColor}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
