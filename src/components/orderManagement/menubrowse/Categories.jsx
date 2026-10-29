import { useState } from "react";

const categories = [
  { id: "all", label: "All Items", icon: "🍽️", count: 45 },
  { id: "starters", label: "Starters", icon: "🍲", count: 8 },
  { id: "rice", label: "Rice & Curry", icon: "🍛", count: 4 },
  { id: "pasta", label: "Pasta & Noodles", icon: "🍜", count: 12 },
  { id: "grills", label: "Grills & BBQ", icon: "🍖", count: 5 },
  { id: "snacks", label: "Snacks", icon: "🍟", count: 5 },
  { id: "desserts", label: "Desserts", icon: "🍨", count: 6 },
  { id: "beverages", label: "Beverages", icon: "🧋", count: 7 },
  { id: "mocktails", label: "Mocktails", icon: "🥤", count: 9 },
];

export default function CategorySidebar({ onSelect }) {
  const [active, setActive] = useState("all");

  const handleClick = (id) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <aside className="w-[300px] max-w-full h-[560px] rounded-2xl border border-[#2b394a] bg-[#1c2836] p-0 overflow-hidden font-['DM_Sans',sans-serif]">      <p className="px-5 pt-5 pb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#667589]">
      Categories
    </p>

      <ul>
        {categories.map((c) => {
          const isActive = active === c.id;
          return (
            <li key={c.id} className="border-t border-[#2b394a]">
              <button
                onClick={() => handleClick(c.id)}
                className={`flex w-full items-center gap-3 px-5 py-3.5 text-left text-[15px] transition-colors ${isActive
                    ? "bg-[#f0883e]/10 font-medium text-[#f0883e]"
                    : "text-[#8a98aa] hover:bg-white/[0.03] hover:text-[#b6c1cf]"
                  }`}
              >
                <span className="text-base leading-none">{c.icon}</span>
                <span className="flex-1">{c.label}</span>
                <span
                  className={`flex min-w-[26px] items-center justify-center rounded-full border px-2 py-0.5 text-xs ${isActive
                      ? "border-transparent bg-[#f0883e]/15 text-[#f0883e]"
                      : "border-[#33435a] text-[#667589]"
                    }`}
                >
                  {c.count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}