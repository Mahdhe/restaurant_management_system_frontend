const STAFF_SUMMARY = [
  { id: 1, label: "Total Staff", value: "58", valueColor: "text-white" },
  { id: 2, label: "Active", value: "49", valueColor: "text-emerald-400" },
  { id: 3, label: "On Leave", value: "6", valueColor: "text-amber-400" },
  { id: 4, label: "Inactive", value: "3", valueColor: "text-red-400" },
];

const StaffSummaryCard = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-5">
        Staff Summary
      </h2>

      <div>
        {STAFF_SUMMARY.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-3 ${
              index !== STAFF_SUMMARY.length - 1
                ? "border-b border-slate-800"
                : ""
            }`}
          >
            <span className="text-gray-400 text-sm">{item.label}</span>
            <span className={`text-sm font-semibold ${item.valueColor}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffSummaryCard;