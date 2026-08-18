const summary = [
  {
    name: "Critical",
    value: "5",
    valueColor: "text-[#e74c3c]",
  },
  {
    name: "Low",
    value: "9",
    valueColor: "text-[#f39c12]",
  },
  {
    name: "Estimated Cost",
    value: "LKR 86,000",
    valueColor: "text-[#3BB273]",
  },
];

export default function ReorderSummary() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] pb-3">
      {/* header */}
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Reorder Summary
        </h2>
      </div>

      <div className="p-4">
        {summary.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between border-b border-white/15 py-2.5"
          >
            <span className="text-[13px] text-[#8a9bb0]">{item.name}</span>

            <span className={`text-[13px] font-semibold ${item.valueColor}`}>
              {item.value}
            </span>
          </div>
        ))}

        <button className="mt-5 w-full py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          Create Purchase Order
        </button>
      </div>
    </div>
  );
}
