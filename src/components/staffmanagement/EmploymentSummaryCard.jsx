const SUMMARY_ROWS = [
  { id: 1, label: "Role", value: "Head Waiter" },
  { id: 2, label: "Join Date", value: "12 Mar 2022" },
  { id: 3, label: "Shift", value: "Morning" },
  { id: 4, label: "Salary Grade", value: "Grade B" },
];

const EmploymentSummaryCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Employment Summary
      </h2>

      <div>
        {SUMMARY_ROWS.map((row, index) => (
          <div
            key={row.id}
            className={`flex items-center justify-between py-3 ${
              index !== SUMMARY_ROWS.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span className="text-white text-sm font-medium">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentSummaryCard;