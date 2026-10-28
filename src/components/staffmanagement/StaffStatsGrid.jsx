import StatCard from "../dashboard/ui/StatCard";

const ROW_ONE = [
  {
    id: 1,
    label: "Total Employees",
    value: "58",
    trend: "+4 this month",
    trendColor: "text-emerald-400",
  },
  {
    id: 2,
    label: "Present Today",
    value: "48",
    trend: "82% attendance",
    trendColor: "text-emerald-400",
  },
  {
    id: 3,
    label: "On Leave",
    value: "6",
    valueColor: "text-emerald-400",
    trend: "Approved leaves",
    trendColor: "text-gray-400",
  },
  {
    id: 4,
    label: "Late Arrivals",
    value: "3",
    trend: "Needs attention",
    trendColor: "text-amber-400",
  },
];

const ROW_TWO = [
  {
    id: 5,
    label: "Departments",
    value: "7",
    trend: "Active units",
    trendColor: "text-gray-400",
  },
  {
    id: 6,
    label: "Active Shifts",
    value: "35",
    trend: "Running now",
    trendColor: "text-gray-400",
  },
  {
    id: 7,
    label: "Currently Working",
    value: "32",
    trend: "On Floor",
    trendColor: "text-gray-400",
  },
  {
    id: 8,
    label: "Attendance Rate",
    value: "94.8%",
    trend: "This week",
    trendColor: "text-emerald-400",
  },
];

const StaffStatsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {ROW_ONE.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {ROW_TWO.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default StaffStatsGrid;