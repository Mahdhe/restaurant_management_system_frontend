export default function ActionButtons({ buttons, activeButton, onSelect }) {
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onSelect(button.id)}
          className={`rounded-full px-3 py-0.5 text-[12px] font-medium transition-colors border ${activeButton === button.id ? "bg-[#e67e221a] text-[#e67e22] border-[#e67e224d]" : "bg-[#243447] text-[#8a9bb0] border border-white/15"}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
