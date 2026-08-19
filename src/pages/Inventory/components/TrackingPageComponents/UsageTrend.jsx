import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", time: 22 },
  { day: "Tue", time: 18 },
  { day: "Wed", time: 20 },
  { day: "Thu", time: 15 },
  { day: "Fri", time: 22 },
];

export default function PrepTime() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] p-4 font-dmsans">
      <h2 className="border-b border-white/15 px-2 pb-3 text-[#f0f4f8] text-[18px] font-bold">
        Usage Trend
      </h2>

      <div className="mt-4 border border-white/15 px-5 pt-8 pb-5 rounded-[14px] bg-[#243447]">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 5,
              left: -4,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#8a9bb0",
                fontSize: 11,
              }}
            />

            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#1c2a38",
                border: "1px solid rgba(225, 225, 225, 0.1)",
                borderRadius: "8px",
                color: "#f0f4f8",
              }}
            />

            <Bar
              dataKey="time"
              fill="#e67e22"
              radius={[5, 5, 0, 0]}
              barSize={45}
            />

            <YAxis hide />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
