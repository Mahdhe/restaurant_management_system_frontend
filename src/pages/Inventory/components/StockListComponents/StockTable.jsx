import { Stocks } from "../../../../data/InventoryData/TableData";

export default function StockTable() {
  return (
    <div className="min-w-0 w-full rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans pb-5">
      {/* table header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 py-4 border-b border-white/15">
        <h1 className="font-bold text-[16px] sm:text-[18px] text-[#f0f4f8]">
          Ingredients Stock List
        </h1>

        <button className="w-full sm:w-auto px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[13px] sm:text-[14px]">
          + Add Ingredients
        </button>
      </div>

      {/* table */}
      <div className="px-3 sm:px-5 py-2.5 overflow-x-auto">
        <table className="w-full min-w-237.5 border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[10px] sm:text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-center p-3 sm:p-4 rounded-l-[14px]">
                Ingredient
              </th>

              <th className="p-3 sm:p-4 font-medium text-center">Unit</th>

              <th className="p-3 sm:p-4 text-center font-medium">Qty</th>

              <th className="p-3 sm:p-4 text-center font-medium">
                Min Threshold
              </th>

              <th className="p-3 sm:p-4 text-center font-medium">Status</th>

              <th className="p-3 sm:p-4 font-medium text-center">Supplier</th>

              <th className="p-3 sm:p-4 text-center font-medium">
                Last Updated
              </th>

              <th className="p-3 sm:p-4 text-center font-medium rounded-r-[14px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {Stocks.map((stock, index) => (
              <tr
                key={`${stock.ingredient}-${index}`}
                className="border-b border-white/15"
              >
                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {stock.ingredient}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] text-[#f0f4f8] text-center">
                  {stock.unit}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] text-[#f0f4f8] text-center">
                  {stock.quantity}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] text-[#f0f4f8] text-center">
                  {stock.minThreshold}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-center">
                  <span
                    className={`inline-flex rounded-full py-1 px-2.5 font-medium text-[10px] border ${stock.statusBg} ${stock.statusColor} ${stock.statusBorder}`}
                  >
                    {stock.status}
                  </span>
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] text-[#f0f4f8] text-center">
                  {stock.supplier}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-[13px] sm:text-[14px] text-[#f0f4f8] text-center">
                  {stock.lastUpdate}
                </td>

                <td className="px-3 sm:px-4 py-4 sm:py-5 text-center">
                  <button className="border border-white/15 rounded-[10px] px-3 sm:px-4 py-2 text-[13px] sm:text-[14px] text-[#8a9bb0] whitespace-nowrap">
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
