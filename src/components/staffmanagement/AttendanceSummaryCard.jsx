const SUMMARY = [
  { id: 1, label: "Present", value: "42", valueColor: "text-white" },
  { id: 2, label: "On Leave", value: "6", valueColor: "text-amber-400" },
  { id: 3, label: "Late", value: "3", valueColor: "text-orange-400" },
  { id: 4, label: "Absent", value: "7", valueColor: "text-red-400" },
];

const AttendanceSummaryCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Attendance Summary
      </h2>
      <div>
        {SUMMARY.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-3 ${
              index !== SUMMARY.length - 1 ? "border-b border-slate-800" : ""
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

export default AttendanceSummaryCard;