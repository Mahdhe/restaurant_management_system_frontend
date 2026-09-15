import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TREND_DATA = [
  { month: "Jan", teamScore: 80, target: 85 },
  { month: "Feb", teamScore: 83, target: 85 },
  { month: "Mar", teamScore: 87, target: 85 },
  { month: "Apr", teamScore: 84, target: 85 },
  { month: "May", teamScore: 90, target: 85 },
  { month: "Jun", teamScore: 97, target: 85 },
];

const MonthlyPerformanceTrendCard = ({ onExport }) => {
  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-white text-base font-semibold">
          Monthly Performance Trend
        </h2>
        <button
          type="button"
          onClick={onExport}
          className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Export
        </button>
      </div>
      <p className="text-gray-500 text-xs mb-6">
        Team-wide performance scores Jan – Jun 2025
      </p>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={TREND_DATA}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="0"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[70, 100]}
              ticks={[70, 75, 80, 85, 90, 95, 100]}
              stroke="#64748b"
              fontSize={12}
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
              dataKey="teamScore"
              name="Team Score"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="target"
              name="Target"
              stroke="#10b981"
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Custom legend */}
      <div className="flex items-center justify-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span className="text-gray-400 text-xs">Team Score</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-emerald-500" />
          <span className="text-gray-400 text-xs">Target</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPerformanceTrendCard;