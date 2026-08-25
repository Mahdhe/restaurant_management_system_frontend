import { Clock1 } from "lucide-react";
import { occupanctInsights } from "../../../../data/ProgressData";

const cardData = [
  {
    title: "84%",
    subtitle: "Average",
    valueColor: "text-[#E67E22]",
  },
  {
    title: "95%",
    subtitle: "Peak",
    valueColor: "text-[#27AE60]",
  },
  {
    title: "42%",
    subtitle: "Lowest",
    valueColor: "text-[#2980B9]",
  },
];

export default function OccupancyChart() {
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
              Occupancy by Hour
            </h2>

            <p className="text-[12px] text-[#8a9bb0]">
              Today - % of tables occupied
            </p>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="space-y-4 py-5">
        {occupanctInsights.map((item) => (
          <div key={item.time} className="flex items-center gap-3">
            <span className="w-15.25 text-[14px] text-[#8A9BB0] block text-center">
              {item.time}
            </span>

            <div className="h-[17.5px] flex-1 overflow-hidden rounded-md bg-[#5560704d]">
              <div
                className={`h-full rounded-md ${item.color}`}
                style={{ width: item.width }}
              />
            </div>

            <span
              className={`w-6.5 text-right text-[14px] font-semibold ${item.textColor}`}
            >
              {item.percentage}
            </span>
          </div>
        ))}
      </div>

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

            <span className="text-[16px] text-[#8a9bb0]">{data.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
