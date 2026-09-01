import { AlertTriangle } from "lucide-react";
import StatusBadge from "../dashboard/ui/StatusBadge";

const DETAIL_ROWS = [
  { label: "Table No:", value: "T04" },
  { label: "Section", value: "B" },
  { label: "Capacity", value: "4 guests" },
  { label: "Assigned Order", value: "Kasun Perera" },
  { label: "Current Order", value: "ORD-0412" },
];

const ACTIVITY_LOG = [
  "Table transferred from T02 to T04",
  "Kasun assigned as waiter",
  "Duration alert triggered",
];

const SelectedTablePanel = () => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white text-base font-semibold">Selected Table</h2>
        <StatusBadge status="Occupied" />
      </div>

      {/* Detail rows */}
      <div className="mb-5">
        {DETAIL_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-3 border-b border-slate-800"
          >
            <span className="text-gray-400 text-sm">{row.label}</span>
            <span className="text-white text-sm font-medium">
              {row.value}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between py-3">
          <span className="text-gray-400 text-sm">Occupied Since</span>
          <span className="text-red-400 text-sm font-semibold">72 min</span>
        </div>
      </div>

      {/* Occupancy duration alert */}
      <div className="flex items-start gap-2 bg-amber-500/10 border border-amber-700 rounded-lg px-4 py-3 mb-5">
        <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
        <p className="text-amber-400 text-sm leading-snug">
          Occupancy duration alert: table has exceeded 60 minutes.
        </p>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          className="col-span-2 sm:col-span-1 px-4 py-2.5 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          View order
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-200"
        >
          Transfer Table
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-200"
        >
          Merge Table
        </button>
        <button
          type="button"
          disabled
          className="px-4 py-2.5 rounded-md bg-slate-800/50 border border-slate-800 text-gray-600 text-sm font-semibold cursor-not-allowed"
        >
          Split Table
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-md bg-emerald-500/10 border border-emerald-700 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 transition-colors duration-200"
        >
          Mark Cleaning
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-colors duration-200"
        >
          Block Table
        </button>
      </div>

      {/* Upcoming Reservation */}
      <div className="border border-slate-800 rounded-xl p-4 mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-sm font-semibold">
            Upcoming Reservation
          </h3>
          <StatusBadge status="Conflict" />
        </div>

        <div className="bg-[#0B1220] rounded-lg px-4 py-3 mb-3">
          <p className="text-white text-sm font-semibold mb-1">Fathima S.</p>
          <p className="text-gray-400 text-xs">
            4 guests · 8:30 PM · requested T04 / Section B
          </p>
        </div>

        <div className="flex items-start gap-2 border border-red-700 bg-red-500/5 rounded-lg px-4 py-3 mb-3">
          <AlertTriangle size={15} className="text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-400 text-xs leading-snug">
            Capacity mismatch warning: request is for 6 guests but T04
            supports 4.
          </p>
        </div>

        <button
          type="button"
          className="w-full px-4 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-[#E67E22] hover:text-[#E67E22] transition-colors duration-200"
        >
          Assign Different Table
        </button>
      </div>

      {/* Activity Timeline */}
      <div className="border border-slate-800 rounded-xl p-4">
        <h3 className="text-white text-sm font-semibold mb-4">
          Activity Timeline
        </h3>
        <ul className="space-y-3">
          {ACTIVITY_LOG.map((entry) => (
            <li key={entry} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-1.5 shrink-0" />
              <span className="text-gray-300 text-sm leading-snug">
                {entry}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedTablePanel;