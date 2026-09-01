import StatusBadge from "../dashboard/ui/StatusBadge";
import StatCard from "../dashboard/ui/StatCard";
 
const TableInfoGrid = ({
  tableId = "T04",
  section = "B",
  guests = 4,
  occupiedFor = "72 min",
  currentBill = "LKR 5,739",
  guestRatio = "6/4",
  serviceTime = "72 min",
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Left - Hero card */}
      <div className="lg:col-span-2 bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
        <div className="flex items-start gap-4 mb-5">
          <div className="w-16 h-16 rounded-xl border-2 border-red-600 bg-red-500/5 flex items-center justify-center shrink-0">
            <span className="text-red-400 text-lg font-bold">{tableId}</span>
          </div>
 
          <div>
            <h2 className="text-white text-xl font-bold mb-1">
              Table {tableId}
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              Section {section} . {guests} guests . Occupied for {occupiedFor}
            </p>
            <div className="flex items-center gap-2">
              <StatusBadge status="Occupied" />
              <StatusBadge status="Duration Alert" />
            </div>
          </div>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            label="Current Bill"
            value={currentBill}
            trend="Order Active"
            trendColor="text-orange-400"
          />
          <StatCard
            label="Guests"
            value={guestRatio}
            valueColor="text-red-400"
            trend="Capacity mismatch"
            trendColor="text-red-400"
          />
          <StatCard
            label="Service Time"
            value={serviceTime}
            trend="Long Stay"
            trendColor="text-red-400"
          />
        </div>
      </div>
 
      {/* Right - Table Info card */}
      <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
        <h2 className="text-white text-base font-semibold mb-4">
          Table Info
        </h2>
 
        <div>
          <div className="flex items-center justify-between py-3 border-b border-slate-800">
            <span className="text-gray-400 text-sm">Table No:</span>
            <span className="text-white text-sm font-medium">{tableId}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-800">
            <span className="text-gray-400 text-sm">Section</span>
            <span className="text-white text-sm font-medium">{section}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-800">
            <span className="text-gray-400 text-sm">Capacity</span>
            <span className="text-white text-sm font-medium">
              {guests} guests
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-400 text-sm">Active</span>
            <StatusBadge status="Active" />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default TableInfoGrid;