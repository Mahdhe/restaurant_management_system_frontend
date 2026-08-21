import { Clock1 } from "lucide-react";
import BarChart from "../BarChart";
import { peakHour, peakHourLabels } from "../../../../data/GraphData";

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
    <div className="mt-4 rounded-2xl border border-white/15 bg-[#1c2a38] overflow-hidden p-5 font-dmsans">
      {/* header */}
      <div className="pb-3.5">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#e67e220f] text-[#e67e22]">
            <Clock1 size={18} />
          </div>

          <div>
            <h2 className="text-[14px] font-semibold text-[#f0f4f8]">
              Peak Hour Analytics
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">
              Customer traffic distribution - today
            </p>
          </div>
        </div>
      </div>

      <BarChart data={peakHour} labels={peakHourLabels} />

      <div className="grid grid-cols-3 gap-2.5 p-5">
        {cardData.map((data) => (
          <div
            key={data.title}
            className="rounded-xl bg-[#24344773] border border-white/15 px-2.5 py-6 text-center"
          >
            <h2
              className={`mb-1.5 text-[24px] font-extrabold leading-7 ${data.valueColor}`}
            >
              {data.title}
            </h2>
            <span className="text-[16px] text-[#8A9BB0]">{data.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
