/**
 * Reusable stat card — used in Dashboard's KPIRow and Table Management's
 * top stat row (Total Tables / Available / Occupied / Reserved), and any
 * future page that needs the same "icon + label + value + trend" shape.
 *
 * Props:
 *  - icon: a lucide-react icon component (not an instance — pass the import itself)
 *  - iconBg / iconColor: tailwind classes for the icon's circle background/color
 *  - label: small uppercase caption above the value
 *  - value: the big number/text
 *  - trend: optional small text below the value (e.g. "8.4% vs average")
 *  - trendColor: tailwind text color class for the trend line
 *  - trendDirection: "up" | "down" | null — shows an arrow icon when set
 */
import { ArrowUp, ArrowDown } from "lucide-react";

const StatCard = ({
  icon: Icon,
  iconBg = "bg-orange-500/10",
  iconColor = "text-orange-400",
  label,
  value,
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

      <p className="text-white text-2xl font-bold mb-1">{value}</p>

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