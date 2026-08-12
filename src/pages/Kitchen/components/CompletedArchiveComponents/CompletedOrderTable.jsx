import { CompletedOrders } from "../../../../data/TableContents";

export default function CompletedOrderTable() {
  return (
    <div className="min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden font-dmsans pb-5">
      {/* card header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
        <h1 className="font-bold text-[18px] text-[#f0f4f8]">
          Completed Orders
        </h1>

        <span className="text-[13px] text-[#556070]">
          Shift: Morning + Evening
        </span>
      </div>

      {/* table */}
      <div className="px-5 py-2.5 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#243447] text-[11px] text-[#8a9bb0] uppercase">
              <th className="font-medium text-left p-4 rounded-l-[14px]">
                Order ID
              </th>

              <th className="p-4 text-left font-medium">Table / Type</th>

              <th className="p-4 text-left font-medium">items</th>

              <th className="p-4 text-left font-medium">Started</th>

              <th className="p-4 text-left font-medium">Completed</th>

              <th className="p-4 text-left font-medium">Prep Time</th>

              <th className="p-4 text-left font-medium rounded-r-[14px]">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {CompletedOrders.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className="border-b border-white/15"
              >
                <td className="px-4 py-5 text-[14px] font-semibold font-jetbrains text-[#f0f4f8]">
                  {order.id}
                </td>

                <td className="px-4 py-5 text-[14px] text-[#f0f4f8]">
                  {order.table}
                </td>

                <td className="px-4 py-5 text-[14px] text-[#f0f4f8]">
                  {order.items}
                </td>

                <td className="px-4 py-5 text-[14px] text-[#f0f4f8]">
                  {order.started}
                </td>

                <td className="px-4 py-5 text-[14px] text-[#f0f4f8]">
                  {order.completed}
                </td>

                <td className="px-4 py-5 text-[14px] text-[#f0f4f8]">
                  {order.prepTime}
                </td>

                <td className="px-4 py-5">
                  <span
                    className={`inline-flex rounded-full py-1 px-2.5 font-medium text-[10px] ${order.status === "Delayed" ? "border-[#e74c3c] bg-[#e74c3c1a] text-[#e74c3c]" : "border-[#27ae40] bg-[#27ae601a] text-[#27ae60]"}`}
                  >
                    {order.status}
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
