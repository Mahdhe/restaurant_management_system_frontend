import { LayoutGrid, CheckCircle2, Users, CalendarClock } from "lucide-react";
import StatCard from "../dashboard/ui/StatCard";

const STATS = [
  {
    id: 1,
    label: "Total Tables",
    value: "24",
    trend: "3 Sections",
    trendColor: "text-blue-400",
    icon: LayoutGrid,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    label: "Available",
    value: "9",
    trend: "Ready for Guests",
    trendColor: "text-emerald-400",
    icon: CheckCircle2,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: 3,
    label: "Occupied",
    value: "11",
    trend: "Avg 42 min",
    trendColor: "text-red-400",
    icon: Users,
    iconBg: "bg-red-500/10",
    iconColor: "text-red-400",
  },
  {
    id: 4,
    label: "Reserved",
    value: "4",
    trend: "Next at 8.30 PM",
    trendColor: "text-amber-400",
    icon: CalendarClock,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
];

const TableStatsRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
      {STATS.map((item) => (
        <StatCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TableStatsRow;