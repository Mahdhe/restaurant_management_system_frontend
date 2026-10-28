const Toggle = ({ label, description, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <div>
        <p className="text-white text-sm font-semibold">{label}</p>
        {description && (
          <p className="text-gray-500 text-xs mt-0.5">{description}</p>
        )}
      </div>
 
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${
          checked ? "bg-orange-500" : "bg-slate-700"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};
 
export default Toggle;