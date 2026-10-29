const data = [
  {
    label: "Available",
    value: "9 Tables",
    valueClass: "border-[#27AE604d] bg-[#27AE601F] text-[#27AE60]",
  },
  {
    label: "Occupied",
    value: "11 Tables",
    valueClass: "border-[#E74C3C4d] bg-[#E74C3C1F] text-[#E74C3C]",
  },
  {
    label: "Reserved",
    value: "4 Tables",
    valueClass: "border-[#2980B94d] bg-[#2980B91F] text-[#2980B9]",
  },
  {
    label: "Cleaning",
    value: "9 Tables",
    valueClass: "border-[#27AE604d] bg-[#27AE601F] text-[#27AE60]",
  },
];

export default function TableStatus() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <div className="min-w-0">
          <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
            Table Stats
          </h2>
          <p className="text-[12px] text-[#8a9bb0]">Right now - 26 Tables</p>
        </div>

        <span className="shrink-0 rounded-full border border-[#e74c3c4d] bg-[#e74c3c1a] px-2.25 py-1 text-[11px] text-[#e74c3c]">
          Live
        </span>
      </div>

      <div className="p-4 sm:p-5">
        <div>
          {data.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 border-b border-white/15 py-1.25 min-w-0"
            >
              <span className="min-w-0 text-[13px] text-[#8a9bb0]">
                {item.label}
              </span>

              <span
                className={`shrink-0 rounded-full border px-2.25 py-0.5 text-[11px] ${item.valueClass}`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <h2 className="text-[24px] sm:text-[26px] text-[#e67e22] font-extrabold">
            84%
          </h2>
          <span className="text-[11px] text-[#8a9bb0]">
            Current occupancy rate
          </span>
        </div>
      </div>
    </div>
  );
}
