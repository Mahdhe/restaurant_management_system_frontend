const TABLES = [
  { id: "T01", status: "Available" },
  { id: "T02", status: "Occupied" },
  { id: "T03", status: "Reserved" },
  { id: "T04", status: "Available" },
  { id: "T05", status: "Occupied" },
  { id: "T06", status: "Cleaning" },
];

const STATUS_STYLES = {
  Available: "border-emerald-600 bg-emerald-600/10 text-emerald-400",
  Occupied: "border-red-600 bg-red-600/10 text-red-400",
  Reserved: "border-amber-600 bg-amber-600/10 text-amber-400",
  Cleaning: "border-blue-600 bg-blue-600/10 text-blue-400",
};

const TOP_ITEMS = [
  { id: 1, name: "Chicken Kothu", orders: 42 },
  { id: 2, name: "Rice & Curry", orders: 38 },
  { id: 3, name: "Grilled Chicken", orders: 31 },
  { id: 4, name: "Fresh Lime Juice", orders: 29 },
];

const TableAndTopItemsRow = ({ totalTables = 24 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mb-6">
      {/* Table Map Preview */}
      <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white text-base font-semibold">
            Table Map Preview
          </h2>
          <span className="text-gray-500 text-xs">{totalTables} tables</span>
        </div>

        <div className="flex flex-wrap gap-4">
          {TABLES.map((table) => (
            <div
              key={table.id}
              className={`w-[88px] h-[88px] rounded-full border-2 flex flex-col items-center justify-center ${STATUS_STYLES[table.status]}`}
            >
              <span className="text-white text-sm font-semibold">
                {table.id}
              </span>
              <span className="text-[10px] mt-0.5">{table.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Items */}
      <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-base font-semibold">Top Items</h2>
          <span className="text-gray-500 text-xs">Today</span>
        </div>

        <div>
          {TOP_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between py-3.5 ${
                index !== TOP_ITEMS.length - 1
                  ? "border-b border-slate-800"
                  : ""
              }`}
            >
              <span className="text-gray-200 text-sm">{item.name}</span>
              <span className="text-gray-500 text-sm">
                {item.orders} Orders
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableAndTopItemsRow;