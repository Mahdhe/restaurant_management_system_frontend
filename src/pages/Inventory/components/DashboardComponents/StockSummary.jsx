const summary = [
  {
    name: "Meat & Seafood",
    count: "22 items",
  },
  {
    name: "Vegetables",
    count: "38 items",
  },
  {
    name: "Dry Goods",
    count: "42 items",
  },
  {
    name: "Beverages",
    count: "18 items",
  },
];

export default function StockSummary() {
  return (
    <section className="rounded-[14px] border border-white/15 bg-[#1c2a38]">
      {/* header */}
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">Stock Summary</h2>
      </div>

      {/* summary */}
      <div className="p-4">
        {summary.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between border-b border-white/15 py-2.5 last:border-b-0"
          >
            <span className="text-[13px] text-[#8a9bb0]">{item.name}</span>

            <span className="text-[13px] font-semibold text-[#27ae60]">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
