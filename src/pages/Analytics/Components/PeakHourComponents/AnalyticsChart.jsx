import { Clock1 } from "lucide-react";
import BarChart from "../BarChart";
import { peakHour, peakHourLabels } from "../../../../data/AnalyticsData/GraphData";

const cardData = [
  {
    title: "7-8:30 PM",
    subtitle: "Peak Window",
    valueColor: "text-[#E67E22]",
  },
  {
    title: "42/hr",
    subtitle: "Avg Orders",
    valueColor: "text-[#27AE60]",
  },
  {
    title: "91%",
    subtitle: "Peak Occupancy",
    valueColor: "text-[#2980B9]",
  },
];

export default function AnalyticsChart() {
  return (
    <div className="mt-4 w-full min-w-0 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-4 sm:p-5 font-dmsans">
      {/* header */}
      <div className="pb-3.5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e67e220f] text-[#e67e22]">
            <Clock1 size={18} />
          </div>

          <div className="min-w-0">
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Peak Hour Analytics
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">
              Customer traffic distribution - today
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-w-0 overflow-hidden">
        <BarChart data={peakHour} labels={peakHourLabels} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-4 sm:p-5">
        {cardData.map((data) => (
          <div
            key={data.title}
            className="rounded-xl bg-[#24344773] border border-white/15 px-2.5 py-4 sm:py-6 text-center min-w-0"
          >
            <h2
              className={`mb-1.5 text-[20px] sm:text-[24px] font-extrabold leading-7 ${data.valueColor}`}
            >
              {data.title}
            </h2>
            <span className="text-[14px] sm:text-[16px] text-[#8A9BB0]">
              {data.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
