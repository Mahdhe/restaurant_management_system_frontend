const STATUS_STYLES = {
  // Order statuses
  Cooking: "bg-orange-500/10 text-orange-400 border-orange-700",
  Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Ready: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Pending: "bg-slate-500/10 text-slate-400 border-slate-600",
  Unpaid: "bg-amber-500/10 text-amber-400 border-amber-700",
  Unpaid: "bg-amber-500/10 text-amber-400 border-amber-700",
  "Partial Payment": "bg-amber-500/10 text-amber-400 border-amber-700",
  Refunded: "bg-blue-500/10 text-blue-400 border-blue-700",
 
  // Table statuses
  Available: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Occupied: "bg-red-500/10 text-red-400 border-red-700",
  Reserved: "bg-amber-500/10 text-amber-400 border-amber-700",
  Cleaning: "bg-blue-500/10 text-blue-400 border-blue-700",
  Blocked: "bg-slate-500/10 text-slate-400 border-slate-600",
 
  // Alerts / misc
  Conflict: "bg-red-500/10 text-red-400 border-red-700",
  "Duration Alert": "bg-amber-500/10 text-amber-400 border-amber-700",
  Active: "bg-emerald-500/10 text-emerald-400 border-emerald-700",

  // Payment methods
  Cash: "bg-blue-500/10 text-blue-400 border-blue-700",
  Card: "bg-blue-500/10 text-blue-400 border-blue-700",
  Wallet: "bg-blue-500/10 text-blue-400 border-blue-700",
  QR: "bg-blue-500/10 text-blue-400 border-blue-700",
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