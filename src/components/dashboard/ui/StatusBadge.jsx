/**
 * Reusable colored status pill — used in Dashboard's LiveOrdersTable and
 * needed again for table statuses (Available/Occupied/Reserved/Cleaning/
 * Blocked) and the "All Tables List" rows on Table Management.
 *
 * Add new statuses to STATUS_STYLES as they come up across the app so
 * every page pulls colors from the same place instead of redefining them.
 *
 * Usage: <StatusBadge status="Occupied" />
 */

const STATUS_STYLES = {
  // Order statuses (from LiveOrdersTable)
  Cooking: "bg-orange-500/10 text-orange-400 border-orange-700",
  Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Ready: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Pending: "bg-slate-500/10 text-slate-400 border-slate-600",

  // Table statuses (Table Management)
  Available: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Occupied: "bg-red-500/10 text-red-400 border-red-700",
  Reserved: "bg-amber-500/10 text-amber-400 border-amber-700",
  Cleaning: "bg-blue-500/10 text-blue-400 border-blue-700",
  Blocked: "bg-slate-500/10 text-slate-400 border-slate-600",

  // Alerts
  Conflict: "bg-red-500/10 text-red-400 border-red-700",
};

const StatusBadge = ({ status }) => {
  const style = STATUS_STYLES[status] || STATUS_STYLES.Pending;

  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${style}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;