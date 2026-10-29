export const filterButtons = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "grill",
    label: "Grill",
  },
  {
    id: "hot-chicken",
    label: "Hot Chiken",
  },
  {
    id: "drinks",
    label: "Drinks",
  },
  {
    id: "desserts",
    label: "Desserts",
  },
];

export default function FilterCard({ buttons, activeButton, onSelect }) {
  return (
    <div className="bg-[#1c2a38] rounded-[14px]">
      <h1 className="px-5 pt-5 pb-2.5 font-bold text-[18px] text-[#f0f4f8]">
        Station Filters
      </h1>

      <div className="flex flex-wrap gap-2 px-4 pt-2 pb-4">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => onSelect(button.id)}
            className={`border rounded-full items-center py-1 px-2.5 text-[12px] ${activeButton === button.id ? "bg-[#e67e221a] text-[#e67e22] border-[#e67e224d]" : "bg-[#1c2b3a] text-slate-300 border border-slate-700"}`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
