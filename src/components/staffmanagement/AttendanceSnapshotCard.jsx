const SNAPSHOT_STATS = [
  { id: 1, value: "98%", label: "Attendance", valueColor: "text-emerald-400" },
  { id: 2, value: "2", label: "Late Arrivals", valueColor: "text-orange-400" },
  { id: 3, value: "1", label: "Leaves Taken", valueColor: "text-white" },
  { id: 4, value: "4.9", label: "Pref. Score", valueColor: "text-emerald-400" },
];

const AttendanceSnapshotCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">
        Attendance Snapshot
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {SNAPSHOT_STATS.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#243447] border border-slate-800 rounded-lg p-3 text-center"
          >
            <p className={`text-lg font-bold ${stat.valueColor}`}>
              {stat.value}
            </p>
            <p className="text-gray-500 text-[11px] mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceSnapshotCard;