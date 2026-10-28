import ProgressBarRow from "../dashboard/ui/ProgressBarRow";

const BREAKDOWN = [
  { id: 1, label: "Attendance", percentage: 40, barColor: "bg-emerald-500", valueColor: "text-emerald-400" },
  { id: 2, label: "Customer Rating", percentage: 35, barColor: "bg-[#E67E22]", valueColor: "text-[#E67E22]" },
  { id: 3, label: "Orders Served", percentage: 25, barColor: "bg-blue-500", valueColor: "text-blue-400" },
];

const ScoreBreakdownCard = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-6">
        Score Breakdown
      </h2>

      {BREAKDOWN.map((item) => (
        <ProgressBarRow key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ScoreBreakdownCard;