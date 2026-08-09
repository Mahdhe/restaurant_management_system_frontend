export default function ActionButtons({ buttons, activeButton, onSelect }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onSelect(button.id)}
          className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${activeButton === button.id ? "bg-[#e67e22] text-white" : "bg-[#1c2b3a] text-slate-300 border border-slate-700"}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
