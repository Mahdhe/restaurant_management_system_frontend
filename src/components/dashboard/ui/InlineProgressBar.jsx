const InlineProgressBar = ({
  percentage,
  displayValue,
  barColor = "bg-orange-500",
  valueColor = "text-white",
  width = "w-20",
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${width} h-1.5 rounded-full bg-slate-800 overflow-hidden shrink-0`}>
        <div
          className={`h-full rounded-full ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className={`text-xs font-medium ${valueColor}`}>
        {displayValue}
      </span>
    </div>
  );
};

export default InlineProgressBar;