import { BriefcaseBusiness } from "lucide-react";

const ingredients = [
  {
    id: 1,
    ingredient: "Chiken Breast",
    used: "140",
    cost: "LKR 28,000",
    stockLeft: "Low",
    stockClass: "text-[#E74C3C] bg-[#E74C3C1F] border-[#E74C3C4d]",
  },
  {
    id: 2,
    ingredient: "Rice (Samba)",
    used: "94",
    cost: "LKR 14,800",
    stockLeft: "Good",
    stockClass: "text-[#27AE60] bg-[#27AE601F] border-[#27AE604d]",
  },
  {
    id: 3,
    ingredient: "Cooking Oil",
    used: "72",
    cost: "LKR 18,000",
    stockLeft: "Medium",
    stockClass: "text-[#F39C12] bg-[#F39C121F] border-[#F39C124d]",
  },
  {
    id: 4,
    ingredient: "Fresh Vegetables",
    used: "18",
    cost: "LKR 7,200",
    stockLeft: "Good",
    stockClass: "text-[#27AE60] bg-[#27AE601F] border-[#27AE604d]",
  },
];

export default function TopIngredientTable() {
  return (
    <div className="rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-5">
      {/* header */}
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#E67E220F] text-[#e67e22]">
          <BriefcaseBusiness size={18} />
        </div>

        <div>
          <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
            Top Ingredient Consumption
          </h2>

          <p className="text-[12px] text-[#8a9bb0]">This week - Total Usage</p>
        </div>
      </div>

      {/* table */}
      <div className="py-2.5 overflow-x-auto mt-5">
        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-[#243447] text-[11px] uppercase text-[#8a9bb0]">
              <th className="rounded-l-[14px] p-4 text-center font-medium">
                #
              </th>

              <th className="p-4 text-center font-medium">Ingredient</th>

              <th className="p-4 text-center font-medium">Used(Kg)</th>

              <th className="p-4 text-center font-medium">Cost(LKR)</th>

              <th className="rounded-r-[14px] p-4 text-center font-medium">
                Stock left
              </th>
            </tr>
          </thead>

          <tbody>
            {ingredients.map((item) => (
                <tr key={item.id} className="border-b border-white/15">
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {item.id}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {item.ingredient}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {item.used}
                </td>

                <td className="px-4 py-5 text-[14px] text-center text-[#f0f4f8]">
                  {item.cost}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${item.stockClass}`}
                  >
                    {item.stockLeft}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
