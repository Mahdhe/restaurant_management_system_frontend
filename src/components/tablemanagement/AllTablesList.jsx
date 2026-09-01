import StatusBadge from "../dashboard/ui/StatusBadge";

const TABLES = [
  {
    id: "T01",
    section: "A",
    capacity: 2,
    status: "Available",
    waiter: "-",
    timer: "-",
    alert: null,
    actionLabel: "View",
  },
  {
    id: "T02",
    section: "A",
    capacity: 4,
    status: "Occupied",
    waiter: "Kasun P.",
    timer: "52 min",
    alert: "Conflict",
    actionLabel: "View",
  },
  {
    id: "T04",
    section: "B",
    capacity: 6,
    status: "Reserved",
    waiter: "Dilan S.",
    timer: "7:25 PM",
    alert: "Conflict",
    actionLabel: "Assign",
  },
];

const AllTablesList = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-base font-semibold">
          All Tables List
        </h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-md border border-slate-700 text-gray-300 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-[#243447]">
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-l-md">
                Table
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Section
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Capacity
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Status
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Waiter
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Timer
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3">
                Alerts
              </th>
              <th className="text-left text-gray-500 text-xs font-medium tracking-wide uppercase px-4 py-3 rounded-r-md">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {TABLES.map((table, index) => (
              <tr
                key={table.id}
                className={
                  index !== TABLES.length - 1
                    ? "border-b border-slate-800"
                    : ""
                }
              >
                <td className="px-4 py-4 text-white text-sm font-medium">
                  {table.id}
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {table.section}
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {table.capacity}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={table.status} />
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {table.waiter}
                </td>
                <td className="px-4 py-4 text-gray-300 text-sm">
                  {table.timer}
                </td>
                <td className="px-4 py-4">
                  {table.alert ? (
                    <StatusBadge status={table.alert} />
                  ) : (
                    <span className="text-gray-500 text-sm">-</span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-md border border-slate-700 text-gray-300 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                  >
                    {table.actionLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTablesList;