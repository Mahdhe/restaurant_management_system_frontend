import { AlertTriangle } from "lucide-react";

const SEVERITY_STYLES = {
  amber: "bg-amber-500/10 border-amber-700 text-amber-400",
  red: "bg-red-500/10 border-red-700 text-red-400",
};

const WarningPanel = ({ title = "Warning", warnings = [] }) => {
  if (warnings.length === 0) return null;

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">{title}</h2>

      <div className="space-y-3">
        {warnings.map((warning) => (
          <div
            key={warning.message}
            className={`flex items-start gap-2 rounded-lg border px-4 py-3 ${SEVERITY_STYLES[warning.severity] || SEVERITY_STYLES.amber}`}
          >
            <AlertTriangle size={15} className="shrink-0 mt-0.5" />
            <p className="text-sm leading-snug">{warning.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarningPanel;