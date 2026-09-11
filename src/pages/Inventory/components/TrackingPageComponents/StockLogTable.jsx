import { Logs } from "../../../../data/InventoryData/StockOverview";

export default function StockLog() {
  return (
    <div className="min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans pb-5">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
        <h2 className="font-bold text-[18px] text-[#f0f4f8]">
          Stock Usage Log
        </h2>

        <button className="px-4 py-2 rounded-[10px] text-[#f0f4f8] bg-[#e67e22] font-semibold text-[14px]">
          Save Supplier
        </button>
      </div>

      {/* table */}
      <div className="px-5 py-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-center p-4 rounded-l-[14px]">
                Date
              </th>

              <th className="p-4 font-medium text-center">Ingredient</th>

              <th className="p-4 font-medium text-center">Used Qty</th>

              <th className="p-4 font-medium text-center">Liked Menu Item</th>

              <th className="p-4 font-medium text-center">Order Id</th>

              <th className="p-4 font-medium text-center">Remaining</th>

              <th className="p-4 text-center font-medium rounded-r-[14px]">
                Staff
              </th>
            </tr>
          </thead>

          <tbody>
            {Logs.map((log) => (
              <tr key={log.ingredient} className="border-b border-white/15">
                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.date}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.ingredient}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.usedQty}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.likedItem}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.orderId}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#f0f4f8] text-center">
                  {log.remaining}
                </td>

                <td className="px-4 py-5 text-[14px] font-semibold text-[#3BB273] text-center">
                  {log.staff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
