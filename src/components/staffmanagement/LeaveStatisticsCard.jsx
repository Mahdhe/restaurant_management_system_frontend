const LEAVE_STATS = [
  { id: 1, label: "Annual", value: "14", valueColor: "text-white" },
  { id: 2, label: "Sick", value: "8", valueColor: "text-white" },
  { id: 3, label: "Medical", value: "5", valueColor: "text-white" },
  { id: 4, label: "Unpaid", value: "2", valueColor: "text-red-400" },
];

const LeaveStatisticsCard = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Leave Statistics
      </h2>
      <div>
        {LEAVE_STATS.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-3 ${
              index !== LEAVE_STATS.length - 1
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

export default LeaveStatisticsCard;