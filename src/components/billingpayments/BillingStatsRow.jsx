import StatCard from "../dashboard/ui/StatCard";

const BILLING_STATS = [
  {
    id: 1,
    label: "Open Bills",
    value: "18",
    valueColor: "text-orange-400",
    trend: "Active tables",
    trendColor: "text-gray-400",
  },
  {
    id: 2,
    label: "Paid Today",
    value: "86",
    valueColor: "text-emerald-400",
    trend: "Completed",
    trendColor: "text-emerald-400",
  },
  {
    id: 3,
    label: "Pending Amount",
    value: "LKR 92K",
    valueColor: "text-white",
    trend: "Unpaid bills",
    trendColor: "text-gray-400",
  },
  {
    id: 4,
    label: "Refund Requests",
    value: "3",
    valueColor: "text-red-400",
    trend: "Needs approval",
    trendColor: "text-red-400",
  },
];

const BillingStatsRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {BILLING_STATS.map((item) => (
        <StatCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BillingStatsRow;