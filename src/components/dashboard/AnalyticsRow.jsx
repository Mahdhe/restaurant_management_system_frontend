import { MoreVertical } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const REVENUE_DATA = [
  { day: "Monday", revenue: 20 },
  { day: "Tuesday", revenue: 35 },
  { day: "Wednesday", revenue: 15 },
  { day: "Thursday", revenue: 45 },
  { day: "Friday", revenue: 60 },
  { day: "Saturday", revenue: 40 },
  { day: "Sunday", revenue: 42 },
  { day: "Monday", revenue: 90 },
];

const QUICK_ACTIONS = [
  { id: 1, label: "New Order", actionLabel: "Create", variant: "filled" },
  { id: 2, label: "Add Reservations", actionLabel: "Add", variant: "outline" },
  { id: 3, label: "Print Daily Report", actionLabel: "Print", variant: "outline" },
];

const AnalyticsRow = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Revenue Analytics */}
      <div className="lg:col-span-2 bg-[#101B2C] border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-base font-semibold">
            Revenue Analytics
          </h2>
          <button
            type="button"
            aria-label="More options"
            className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
          >
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="bg-[#0B1220] rounded-lg p-4">
          <p className="text-gray-500 text-xs text-center font-medium mb-2">
            Revenue Chart
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis
                  dataKey="day"
                  stroke="#64748b"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#101B2C",
                    border: "1px solid #1e293b",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
        <h2 className="text-white text-base font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="space-y-3">
          {QUICK_ACTIONS.map((action) => (
            <div
              key={action.id}
              className="flex items-center justify-between bg-[#0B1220] border border-slate-800 rounded-lg px-4 py-3"
            >
              <span className="text-gray-200 text-sm">{action.label}</span>
              <button
                type="button"
                className={
                  action.variant === "filled"
                    ? "px-3 py-1.5 rounded-md bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors duration-200"
                    : "px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-xs font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                }
              >
                {action.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsRow;