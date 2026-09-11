import React from "react";
import {
  MdOutlineRestaurant,
  MdOutlineRamenDining,
  MdOutlineRiceBowl,
  MdOutlineLunchDining,
  MdOutlineOutdoorGrill,
  MdOutlineFastfood,
  MdOutlineIcecream,
  MdOutlineLocalCafe,
  MdOutlineLocalBar,
} from "react-icons/md";

export const categories = [
  { key: "all", icon: MdOutlineRestaurant, label: "All Items", count: 45 },
  { key: "starters", icon: MdOutlineRamenDining, label: "Starters", count: 8 },
  { key: "rice", icon: MdOutlineRiceBowl, label: "Rice & Curry", count: 4 },
  { key: "pasta", icon: MdOutlineLunchDining, label: "Pasta & Noodles", count: 12 },
  { key: "grills", icon: MdOutlineOutdoorGrill, label: "Grills & BBQ", count: 5 },
  { key: "snacks", icon: MdOutlineFastfood, label: "Snacks", count: 5 },
  { key: "desserts", icon: MdOutlineIcecream, label: "Desserts", count: 6 },
  { key: "beverages", icon: MdOutlineLocalCafe, label: "Beverages", count: 7 },
  { key: "mocktails", icon: MdOutlineLocalBar, label: "Mocktails", count: 9 },
];

const Categories = ({ activeCategory, onSelectCategory }) => {
  return (
    <section
      className="w-full lg:w-[240px] shrink-0 rounded-[14px] border-[1px] bg-[#1C2A38] border-[#FFFFFF14]
                 flex lg:flex-col overflow-x-auto lg:overflow-visible"
    >
      {/* Header */}
      <div className="hidden lg:flex w-full h-[54px] gap-[10px] px-[20px] items-center shrink-0">
        <h1 className="font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[1%] text-[#556070]">
          CATEGORIES
        </h1>
      </div>

      {/* Items */}
      {categories.map((cat) => {
        const isActive = cat.key === activeCategory;
        const Icon = cat.icon;

        return (
          <button
            key={cat.key}
            onClick={() => onSelectCategory(cat.key)}
            className={`w-full lg:w-full min-w-[150px] lg:min-w-0 h-[44px] border-[1px] py-[10px] px-[16px] lg:px-[20px]
                        flex justify-between items-center gap-2 transition-colors shrink-0 ${
              isActive
                ? "bg-[#E67E220F] border-[#FFFFFF14]"
                : "border-[#FFFFFF14] hover:bg-[#FFFFFF08]"
            }`}
          >
            <div
              className={`flex gap-2 items-center min-w-0 ${
                isActive ? "text-[#E67E22]" : "text-[#8A9BB0]"
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <h1 className="font-[DM_Sans] font-medium text-[13px] sm:text-[14px] leading-[100%] tracking-[1%] truncate">
                {cat.label}
              </h1>
            </div>
            <p
              className={`font-[DM_Sans] font-semibold text-[11px] leading-[100%] tracking-[8%] border-[1px] p-1 rounded-full shrink-0 ${
                isActive
                  ? "text-[#E67E22] border-[#E67E22]"
                  : "text-[#556070] border-[#556070]"
              }`}
            >
              {cat.count}
            </p>
          </button>
        );
      })}
    </section>
  );
};

export default Categories;