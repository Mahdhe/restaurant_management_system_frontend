import StatusBadge from "./StatusBadge";

const ProgressBarRow = ({
  label,
  sublabel,
  percentage,
  barColor = "bg-orange-500",
  status,
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-white text-sm font-semibold">{label}</p>
          <p className="text-gray-500 text-xs mt-0.5">{sublabel}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white text-sm font-semibold">
            {percentage}%
          </span>
          {status && <StatusBadge status={status} />}
        </div>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarRow;