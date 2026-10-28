const COVERAGE_ROWS = [
  { id: 1, label: "Morning", value: "95%" },
  { id: 2, label: "Evening", value: "80%" },
  { id: 3, label: "Night", value: "60%" },
  { id: 4, label: "Overall", value: "84%", isTotal: true },
];

const CoverageCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">Coverage</h2>

      <div>
        {COVERAGE_ROWS.map((row, index) => (
          <div
            key={row.id}
            className={`flex items-center justify-between py-3 ${
              index !== COVERAGE_ROWS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span
              className={`text-sm ${
                row.isTotal
                  ? "text-white font-semibold"
                  : "text-gray-400"
              }`}
            >
              {row.label}
            </span>
            <span
              className={`text-sm font-semibold ${
                row.isTotal ? "text-emerald-400" : "text-white"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageCard;