const preview = [
  {
    name: "Ingredient",
    value: "Chiken Breast",
    valueColor: "text-[#27ae60]",
  },
  {
    name: "Available",
    value: "18kg",
    valueColor: "text-[#e67e22]",
  },
  {
    name: "Threshold",
    value: "25kg",
    valueColor: "text-[#27ae60]",
  },
  {
    name: "Supplier",
    value: "FreshMeat Lanka",
    valueColor: "text-[#27ae60]",
  },
];

export default function StockPreview() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] pb-4">
      {/* header */}
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">Stock Preview</h2>
      </div>

      <div className="p-4">
        {preview.map((item) => (
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
      </div>
    </div>
  );
}
