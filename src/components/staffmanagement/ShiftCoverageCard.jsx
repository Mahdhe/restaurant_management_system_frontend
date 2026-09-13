const SHIFTS = [
  { id: 1, label: "Morning Shift", count: "18 Employees", color: "bg-orange-500" },
  { id: 2, label: "Evening Shift", count: "12 Employees", color: "bg-blue-500" },
  { id: 3, label: "Night Shift", count: "5 Employees", color: "bg-slate-500" },
  { id: 4, label: "Off Duty", count: "8 Employees", color: "bg-emerald-500" },
];

const ShiftCoverageCard = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Shift Coverage</h2>
        <span className="text-gray-500 text-xs">Today</span>
      </div>

      <div className="space-y-4">
        {SHIFTS.map((shift) => (
          <div key={shift.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className={`w-2.5 h-2.5 rounded-sm ${shift.color}`} />
              <span className="text-gray-300 text-sm">{shift.label}</span>
            </div>
            <span className="text-white text-sm font-medium">
              {shift.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiftCoverageCard;