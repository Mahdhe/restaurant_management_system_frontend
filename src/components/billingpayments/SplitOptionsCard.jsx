import { useState } from "react";
import Tabs from "../dashboard/ui/Tabs";
import StatusBadge from "../dashboard/ui/StatusBadge";
import FilterChips from "../dashboard/ui/FilterChips";

const PEOPLE = [
  { id: 1, name: "Person 1", items: "Salad + Juice", amount: "LKR 1,722" },
  { id: 2, name: "Person 2", items: "Chicken", amount: "LKR 1,722" },
  { id: 3, name: "Person 3", items: "Chicken + Juice", amount: "LKR 1,720" },
];

const SplitOptionsCard = ({ onEditPerson }) => {
  const [splitMethod, setSplitMethod] = useState("Equal Split");

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Split options</h2>
        <StatusBadge status="Partial Payment" />
      </div>

      <FilterChips
        filters={["Equal Split", "Custom Amount", "By Item"]}
        activeFilter={splitMethod}
        onChange={setSplitMethod}
      />    

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {PEOPLE.map((person) => (
          <div
            key={person.id}
            className="bg-[#243447] border border-slate-800 rounded-xl p-4"
          >
            <h3 className="text-white text-sm font-semibold mb-4">
              {person.name}
            </h3>

            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-xs">Items</span>
              <span className="text-white text-sm font-medium text-right">
                {person.items}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-xs">Amount</span>
              <span className="text-white text-sm font-medium">
                {person.amount}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onEditPerson?.(person.id)}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitOptionsCard;