import { useState } from "react";
import { BarChart3, ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const TREND_DATA = [
  { day: "Mon", value: 92, color: "#D97706" },
  { day: "Tue", value: 96, color: "#10B981" },
  { day: "Wed", value: 88, color: "#D97706" },
  { day: "Thu", value: 97, color: "#10B981" },
  { day: "Fri", value: 92, color: "#D97706" },
  { day: "Sat", value: 86, color: "#EF4444" },
  { day: "Sun", value: 96, color: "#D97706" },
];

const RevenueTrendCard = ({ title = "Revenue Trend" }) => {
  const [range, setRange] = useState("Last 7 days");

  return (
    <div className="bg-[#101B2C] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <BarChart3 size={18} className="text-orange-400" />
          </span>
          <div>
            <p className="text-white text-sm font-semibold">{title}</p>
            <p className="text-gray-500 text-xs">Last 7 days</p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B1220] border border-slate-700 text-gray-200 text-xs font-medium"
        >
          {range}
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={TREND_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="day"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[80, 100]}
              ticks={[80, 84, 88, 92, 96, 100]}
              tickFormatter={(v) => `${v}%`}
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
              formatter={(value) => [`${value}%`, "Value"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={48}>
              {TREND_DATA.map((entry) => (
                <Cell key={entry.day} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTrendCard;