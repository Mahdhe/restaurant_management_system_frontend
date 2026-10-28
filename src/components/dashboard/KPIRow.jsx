import {
  LineChart as LineChartIcon,
  ClipboardList,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import StatCard from "../dashboard/ui/StatCard";

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
      {KPI_DATA.map((item) => (
        <StatCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default KPIRow;