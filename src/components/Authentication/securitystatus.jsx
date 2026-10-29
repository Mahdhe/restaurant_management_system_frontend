
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const loginData = [
  { day: "Mon", successful: 100, failed: 10, locked: 5 },
  { day: "Tue", successful: 68, failed: 11, locked: 3 },
  { day: "Wed", successful: 69, failed: 6, locked: 5 },
  { day: "Thu", successful: 91, failed: 11, locked: 7 },
  { day: "Fri", successful: 65, failed: 16, locked: 4 },
  { day: "Sat", successful: 82, failed: 8, locked: 6 },
  { day: "Sun", successful: 80, failed: 5, locked: 5 },
];

function SecurityStatus() {
  const [period, setPeriod] = useState("Last 7 days");

  return (
    <div className="mt-[16px] flex w-full min-w-0 flex-col gap-[16px] lg:flex-row">

      {/* Left Section */}
      <div className="flex  w-full min-w-0 flex-col lg:w-[820px] lg:shrink-0">

        {/* Chart Box */}
        <div className="flex  min-w-0 flex-col rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[20px]">

          {/* Header */}
          <div className="mb-[36px] flex items-start justify-between gap-3">
            <div>
              <h3 className="font-dm text-[14px] font-medium text-[#FFFFFF]">
                Login Activity
              </h3>
              <p className="text-[12px] text-[#8A9BB0]">
                Successful, failed and locked attempts per day
              </p>
            </div>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="rounded-[9px] border border-[#FFFFFF14] bg-[#0F1923] px-[16px] py-[8px] text-[14px] font-semibold text-white outline-none"
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          {/* Chart */}
          <div className="h-[348px] w-full min-w-0 p-[20px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={loginData}
                margin={{ top: 4, right: 4, left: -8, bottom: 0 }}
                barCategoryGap="22%"
                barGap={2}
              >
                <XAxis
                  dataKey="day"
                  axisLine={{ stroke: "#344454" }}
                  tickLine={false}
                  tick={{ fill: "#F0F4F8", fontSize: 10 }}
                  dy={7}
                />

                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 25, 50, 75, 100]}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) =>
                    value === 0 ? "0" : `${value}%`
                  }
                  tick={{ fill: "#9AAABC", fontSize: 11 }}
                  width={42}
                />

                <Tooltip
                  cursor={{ fill: "#FFFFFF08" }}
                  contentStyle={{
                    backgroundColor: "#111C27",
                    border: "1px solid #344454",
                    borderRadius: "8px",
                    fontSize: "11px",
                    color: "#FFFFFF",
                  }}
                />

                <Bar
                  dataKey="successful"
                  name="Successful Logins"
                  fill="#36A875"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={16}
                  stroke="none"
                />

                <Bar
                  dataKey="failed"
                  name="Failed Logins"
                  fill="#F05243"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={16}
                  stroke="none"
                />

                <Bar
                  dataKey="locked"
                  name="Locked Accounts"
                  fill="#F5A000"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={16}
                  stroke="none"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend - Outside Chart Box */}
        <div className="mt-[18px] flex flex-wrap items-center gap-x-[16px] gap-y-[8px]">
          <div className="flex items-center gap-[7px]">
            <span className="h-[12px] w-[12px] rounded-[3px] bg-[#36A875]" />
            <span className="text-[12px] text-[#8A9BB0]">
              Successful Logins
            </span>
          </div>

          <div className="flex items-center gap-[7px]">
            <span className="h-[12px] w-[12px] rounded-[3px] bg-[#F05243]" />
            <span className="text-[12px] text-[#8A9BB0]">
              Failed Logins
            </span>
          </div>

          <div className="flex items-center gap-[7px]">
            <span className="h-[12px] w-[12px] rounded-[3px] bg-[#F5A000]" />
            <span className="text-[12px] text-[#8A9BB0]">
              Locked Accounts
            </span>
          </div>
        </div>

      </div>

      {/* Right Section */}
    <div className="min-w-0 w-full flex-1 rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[16px] lg:w-0">

  {/* Header */}
  <div className="border-b border-[#FFFFFF26] pb-[18px]">
    <h3 className="font-dm text-[14px] font-semibold tracking-[0.5px] text-[#F0F4F8]">
      Security Status
    </h3>

    <p className="font-dm text-[12px] tracking-[0.3px] text-[#8A9BB0]">
      Live infrastructure monitoring
    </p>
  </div>

  {/* Security Activity List */}
  <div className="flex flex-col">

    {[
      {
        title: "Authentication Server",
        subtitle: "Checked 1 min ago",
        status: "Healthy",
        color: "#27AE60",
      },
      {
        title: "Database Security",
        subtitle: "Checked 1 min ago",
        status: "Secured",
        color: "#27AE60",
      },
      {
        title: "Firewall",
        subtitle: "Checked 2 min ago",
        status: "Enabled",
        color: "#27AE60",
      },
      {
        title: "SSL Certificate",
        subtitle: "Valid until Mar 2027",
        status: "Valid",
        color: "#27AE60",
      },
      {
        title: "Password Policy",
        subtitle: "Checked 5 min ago",
        status: "Enforced",
        color: "#27AE60",
      },
      {
        title: "Two Factor Authentication",
        subtitle: "62% of staff enrolled",
        status: "Partial",
        color: "#E67E22",
      },
      {
        title: "Encryption",
        subtitle: "Checked 4 min ago",
        status: "AES-256",
        color: "#27AE60",
      },
      {
        title: "API Security",
        subtitle: "Checked 3 min ago",
        status: "Operational",
        color: "#27AE60",
      },
    ].map((item, index) => (
      <div
        key={item.title}
        className={`flex min-w-0 items-center justify-between gap-[10px] py-[16px] ${
          index !== 7 ? "border-b border-[#FFFFFF05]" : ""
        }`}
      >
        {/* Indicator + Text */}
        <div className="flex min-w-0 flex-1 items-center gap-[12px]">

          <div
            className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
            style={{
              backgroundColor: `${item.color}20`,
            }}
          >
            <span
              className="h-[10px] w-[10px] rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />
          </div>

          <div className="min-w-0">
            <h4 className="truncate font-dm text-[14px] font-semibold tracking-[0.2px] text-[#F0F4F8]">
              {item.title}
            </h4>

            <p className="truncate font-dm text-[12px] text-[#8A9BB0]">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className="shrink-0 rounded-full border px-[9px] py-[3px] font-dm text-[11px] leading-[18px]  font-semibold"
          style={{
            color: item.color,
            borderColor: `${item.color}40`,
            backgroundColor: `${item.color}12`,
          }}
        >
          {item.status}
        </span>
      </div>
    ))}

  </div>
</div>
    </div>
  );
}

export default SecurityStatus;
