import ProgressBarRow from "../dashboard/ui/ProgressBarRow";

const DEPARTMENTS = [
  { id: 1, label: "Kitchen Team", count: 20, barColor: "bg-orange-500", valueColor: "text-orange-400" },
  { id: 2, label: "Service", count: 18, barColor: "bg-blue-500", valueColor: "text-blue-400" },
  { id: 3, label: "Cashier", count: 12, barColor: "bg-emerald-500", valueColor: "text-emerald-400" },
  { id: 4, label: "Management", count: 8, barColor: "bg-slate-500", valueColor: "text-gray-400" },
];

const MAX_COUNT = Math.max(...DEPARTMENTS.map((d) => d.count));

const DepartmentDistributionByHeadcount = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-6">
        Department Distribution
      </h2>

      {DEPARTMENTS.map((dept) => (
        <ProgressBarRow
          key={dept.id}
          label={dept.label}
          percentage={(dept.count / MAX_COUNT) * 100}
          displayValue={dept.count}
          barColor={dept.barColor}
          valueColor={dept.valueColor}
        />
      ))}
    </div>
  );
};

export default DepartmentDistributionByHeadcount;