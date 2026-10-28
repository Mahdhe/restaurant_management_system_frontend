import { ArrowUp, ArrowDown } from "lucide-react";
 
const StatCard = ({
  icon: Icon,
  iconBg = "bg-orange-500/10",
  iconColor = "text-orange-400",
  label,
  value,
  valueColor = "text-white",
  trend,
  trendColor = "text-gray-400",
  trendDirection = null,
}) => {
  const TrendIcon = trendDirection === "down" ? ArrowDown : ArrowUp;
 
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        {Icon && (
          <span
            className={`w-7 h-7 rounded-md flex items-center justify-center ${iconBg}`}
          >
            <Icon size={15} className={iconColor} />
          </span>
        )}
        <span className="text-gray-400 text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
      </div>
 
      <p className={`text-2xl font-bold mb-1 ${valueColor}`}>{value}</p>
 
      {trend && (
        <p className={`flex items-center gap-1 text-xs ${trendColor}`}>
          {trendDirection && <TrendIcon size={12} />}
          {trend}
        </p>
      )}
    </div>
  );
};
 
export default StatCard;