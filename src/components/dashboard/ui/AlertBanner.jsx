import { AlertTriangle } from "lucide-react";

const AlertBanner = ({
  message = "Low stock alert: 6 ingredients need reorder today.",
  actionLabel = "View Stock",
  onAction,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#F39C1214] border border-[#F39C1273] rounded-lg px-5 py-3 mb-6">
      <div className="flex items-center gap-2.5">
        <AlertTriangle size={18} className="text-orange-500 shrink-0" />
        <span className="text-[#F39C12] text-sm font-medium">
          {message}
        </span>
      </div>
      <button
        type="button"
        onClick={onAction}
        className="px-4 py-1.5 rounded-md border border-[#556070] text-[#556070] text-sm font-semibold hover:bg-orange-50 transition-colors duration-200 whitespace-nowrap"
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default AlertBanner;