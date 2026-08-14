const ORDERS = [
  {
    id: "ORD-0412",
    table: "T04",
    waiter: "Kasun P.",
    total: "LKR 5,739",
    status: "Cooking",
    time: "7:12 PM",
  },
  {
    id: "ORD-0324",
    table: "T06",
    waiter: "Nimal K.",
    total: "LKR 6,000",
    status: "Paid",
    time: "7:15 PM",
  },
  {
    id: "ORD-0397",
    table: "T08",
    waiter: "Perera S.",
    total: "LKR 4,057",
    status: "Ready",
    time: "7:25 PM",
  },
];

const STATUS_STYLES = {
  Cooking: "bg-orange-500/10 text-orange-400 border-orange-700",
  Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Ready: "bg-emerald-500/10 text-emerald-400 border-emerald-700",
  Pending: "bg-slate-500/10 text-slate-400 border-slate-600",
};

const LiveOrdersTable = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-base font-semibold">Live Orders</h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-md border border-slate-700 text-gray-300 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-[#243447]">
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-l-md">
                Order ID
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Table
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Waiter
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Total
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Status
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-r-md">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((order, index) => (
              <tr
                key={order.id}
                className={
                  index !== ORDERS.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }
              >
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {order.id}
                </td>
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {order.table}
                </td>
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {order.waiter}
                </td>
                <td className="px-4 py-4 text-gray-200 text-sm">
                  {order.total}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${STATUS_STYLES[order.status] || STATUS_STYLES.Pending}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-400 text-sm">
                  {order.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveOrdersTable;