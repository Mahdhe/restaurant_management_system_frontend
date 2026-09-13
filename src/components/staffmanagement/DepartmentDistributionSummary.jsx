import ProgressBarRow from "../dashboard/ui/ProgressBarRow";

const DEPARTMENTS = [
  { id: 1, label: "Kitchen", percentage: 35, barColor: "bg-amber-500", valueColor: "text-amber-400" },
  { id: 2, label: "Service", percentage: 30, barColor: "bg-blue-500", valueColor: "text-blue-400" },
  { id: 3, label: "Cashier", percentage: 20, barColor: "bg-emerald-500", valueColor: "text-emerald-400" },
  { id: 4, label: "Management", percentage: 15, barColor: "bg-slate-500", valueColor: "text-gray-400" },
];

const DepartmentDistributionSummary = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-6">
        Department Distribution
      </h2>

      {DEPARTMENTS.map((dept) => (
        <ProgressBarRow key={dept.id} {...dept} />
      ))}
    </div>
  );
};

export default DepartmentDistributionSummary;