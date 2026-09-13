import ProgressBarRow from "../dashboard/ui/ProgressBarRow";

const DEPARTMENTS = [
  {
    id: 1,
    label: "Kitchen Team",
    sublabel: "18 Active Status",
    percentage: 90,
    barColor: "bg-emerald-500",
    status: "Fully Covered",
  },
  {
    id: 2,
    label: "Service Team",
    sublabel: "15 Active Status",
    percentage: 75,
    barColor: "bg-amber-500",
    status: "Moderate Coverage",
  },
  {
    id: 3,
    label: "Cashiers",
    sublabel: "6 Active Status",
    percentage: 60,
    barColor: "bg-red-500",
    status: "Needs Attention",
  },
  {
    id: 4,
    label: "Managers",
    sublabel: "4 Active Status",
    percentage: 100,
    barColor: "bg-emerald-500",
    status: "Fully Covered",
  },
];

const DepartmentDistributionCard = () => {
  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-6">
        Department Distribution
      </h2>

      {DEPARTMENTS.map((dept) => (
        <ProgressBarRow key={dept.id} {...dept} />
      ))}
    </div>
  );
};

export default DepartmentDistributionCard;