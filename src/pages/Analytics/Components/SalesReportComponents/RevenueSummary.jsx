const data = [
  {
    label: "Today",
    value: "LKR 187K",
    valueColor: "text-[#e67e22]",
  },
  {
    label: "This week",
    value: "LKR 1.2M",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "This month",
    value: "LKR 5.8M",
    valueColor: "text-[#f0f4f8]",
  },
  {
    label: "Growth",
    value: "14%",
    valueColor: "text-[#27AE60]",
  },
];

export default function RevenueSummary() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden pb-5">
      {/* header */}
      <div className="border-b border-white/15 px-4 sm:px-5 pt-4 sm:pt-5 pb-2.5">
        <h2 className="text-[16px] sm:text-[18px] font-bold text-[#f0f4f8]">
          Revenue Summary
        </h2>
      </div>

      <div className="px-4 sm:px-5 py-4 sm:py-5">
        {data.map((item) => (
          <div key={item.label} className="border-b border-white/10 py-3">
            <p className="text-[12px] sm:text-[13px] uppercase text-[#8a9bb0]">
              {item.label}
            </p>

            <p
              className={`text-[21px] sm:text-[24px] font-bold ${item.valueColor}`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
