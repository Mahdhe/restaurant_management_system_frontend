const VARIANT_STYLES = {
  filled:
    "bg-[#E67E22] text-white hover:bg-orange-600",
  outline:
    "bg-slate-800 border border-slate-700 text-gray-200 hover:border-orange-500 hover:text-orange-500",
  success:
    "bg-emerald-500/10 border border-emerald-700 text-emerald-400 hover:bg-emerald-500/20",
  danger:
    "bg-red-500/10 border border-red-700 text-red-400 hover:bg-red-500/20",
  disabled:
    "bg-slate-800/50 border border-slate-800 text-gray-600 cursor-not-allowed",
};
 
const ActionsPanel = ({ title = "Actions", actions = [], columns = 1 }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-base font-semibold mb-4">{title}</h2>
 
      <div
        className={`grid gap-3 ${columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}
      >
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            disabled={action.variant === "disabled"}
            onClick={action.onClick}
            className={`px-4 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200 ${VARIANT_STYLES[action.variant] || VARIANT_STYLES.outline}`}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};
 
export default ActionsPanel;