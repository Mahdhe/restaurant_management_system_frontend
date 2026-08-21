import { BarChart3, ChevronDown } from "lucide-react";

const chartData = [
  { day: "Mon", value: 82 },
  { day: "Tue", value: 104 },
  { day: "Wed", value: 95 },
  { day: "Thu", value: 120 },
  { day: "Fri", value: 108 },
  { day: "Sat", value: 135 },
  { day: "Sun", value: 126 },
];

const labels = ["200K", "210K", "140K", "700K", "0"];

export default function RevenueTrend() {
  return (
    <div className="mt-4 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-5 font-dmsans">
      {/* header */}
      <div className="flex items-center justify-between pb-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#E67E220F] text-[#e67e22]">
            <BarChart3 size={18} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Revenue Trend
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">Last 7 days</p>
          </div>
        </div>

        <button className="flex items-center gap-1.5 rounded-[10px] border border-white/10 bg-[#0F1923] px-4 py-2 text-[14px] text-[#f0f4f8] font-semibold">
          Last 7 days
          <ChevronDown size={11} />
        </button>
      </div>

      {/* chart */}
      <div className="px-4 py-5">
        <div className="relative h-68">
          {/* Y axis */}
          <div className="absolute left-0 top-0 bottom-7 flex flex-col justify-between">
            {labels.map((label) => (
              <span key={label} className="text-[14px] text-[#8a9bb0]">
                {label}
              </span>
            ))}
          </div>

          <div className="absolute left-14 right-0 top-0 bottom-7">
            {/* horizontal lines */}
            <div className="absolute inset-3 flex flex-col justify-between">
              {[1, 2, 3, 4, 5].map((line) => (
                <div key={line} className="border-t border-white/10" />
              ))}
            </div>

            {/* bars */}
            <div className="absolute inset-3 flex items-end justify-between px-2">
              {chartData.map((item) => {
                const height = `2%`;

                return (
                  <div
                    key={item.day}
                    className="flex h-full flex-1 items-end justify-center"
                  >
                    <div
                      style={{ height }}
                      className="w-13.75 max-w-[70%] rounded-t-sm bg-[#e67e22]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* x axis */}
          <div className="absolute bottom-0 left-22 right-10 flex justify-between px-2">
            {chartData.map((item) => (
              <span
                key={item.day}
                className="text-[12px] font-semibold text-[#f0f4f8]"
              >
                {item.day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
