import { Plus } from "lucide-react";

const DashboardPageHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#F39C1214]sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-white text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-400 text-sm mt-1">
          Monitor restaurant operations in real-time
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Export
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          <Plus size={16} />
          New order
        </button>
      </div>
    </div>
  );
};

export default DashboardPageHeader;