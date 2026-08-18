import { LowStocks } from "../../../../data/LowStockTable";

export default function StockAlertTable() {
  return (
    <div className="min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans pb-5">
      {/* table haeder */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
        <h2 className="font-bold text-[18px] text-[#f0f4f8]">
          Low Stock Alerts
        </h2>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          Reorder Selected
        </button>
      </div>

      {/* table */}
      <div className="px-5 py-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-center p-4 rounded-l-[14px]">
                Ingredient
              </th>

              <th className="p-4 font-medium text-center">Current</th>

              <th className="p-4 font-medium text-center">Threshold</th>

              <th className="p-4 font-medium text-center">Supplier</th>

              <th className="p-4 font-medium text-center">Urgency</th>

              <th className="p-4 font-medium text-center rounded-r-[14px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {LowStocks.map((stock, index) => (
              <tr
                key={`${stock.ingredient}-${index}`}
                className="border-b border-white/15"
              >
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center font-jetbrains">
                  {stock.ingredient}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {stock.current}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {stock.threshold}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {stock.supplier}
                </td>

                <td className="px-4 py-5 text-center">
                  <span
                    className={`inline-flex rounded-full py-1 px-2.5 font-medium text-[10px] border ${stock.urgencyBorder} ${stock.urgencyBg} ${stock.urgencyColor}`}
                  >
                    {stock.urgency}
                  </span>
                </td>

                <td className="px-4 py-5 text-center">
                  <button
                    className={`border ${stock.buttonBorder} ${stock.buttonBg} ${stock.buttonColor} rounded-[10px] px-4 py-2 text-[14px]`}
                  >
                    {stock.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
