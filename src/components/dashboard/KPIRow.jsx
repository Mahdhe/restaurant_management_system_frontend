import {
  LineChart as LineChartIcon,
  ClipboardList,
  CheckCircle2,
  XCircle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const KPI_DATA = [
  {
    id: 1,
    label: "Revenue Today",
    value: "LKR 187K",
    trend: "8.4% vs average",
    trendDirection: "up",
    trendColor: "text-blue-400",
    icon: LineChartIcon,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    label: "Today's Orders",
    value: "84",
    trend: "12% from yesterday",
    trendDirection: "up",
    trendColor: "text-emerald-400",
    icon: ClipboardList,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: 3,
    label: "Active Tables",
    value: "18/24",
    trend: "75% occupied",
    trendDirection: null,
    trendColor: "text-orange-400",
    icon: CheckCircle2,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    id: 4,
    label: "Canceled Orders",
    value: "3",
    trend: "2 from yesterday",
    trendDirection: "down",
    trendColor: "text-red-400",
    icon: XCircle,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
];

const KPIRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {KPI_DATA.map((item) => {
        const Icon = item.icon;
        const TrendIcon = item.trendDirection === "down" ? ArrowDown : ArrowUp;

        return (
          <div
            key={item.id}
            className="bg-[#101B2C] border border-slate-800 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-7 h-7 rounded-md flex items-center justify-center ${item.iconBg}`}
              >
                <Icon size={15} className={item.iconColor} />
              </span>
              <span className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                {item.label}
              </span>
            </div>

            <p className="text-white text-2xl font-bold mb-1">
              {item.value}
            </p>

            <p className={`flex items-center gap-1 text-xs ${item.trendColor}`}>
              {item.trendDirection && <TrendIcon size={12} />}
              {item.trend}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default KPIRow;