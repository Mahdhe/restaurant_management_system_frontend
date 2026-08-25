import { comparisionData } from "../../../../data/ProgressData";

export default function ComparisionGraph() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Month Comparison
        </h2>
      </div>

      <div className="space-y-6 p-5">
        {comparisionData.map((payment) => (
          <div key={payment.name} className="flex items-center gap-3">
            {/* Name */}
            <span className="w-30 shrink-0 text-[14px] text-[#f0f4f8]">
              {payment.name}
            </span>

            {/* Progress bar */}
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#5560704D]">
              <div
                className={`h-full rounded-full ${payment.color}`}
                style={{ width: payment.width }}
              />
            </div>

            {/* Percentage */}
            <span
              className={`w-10 shrink-0 text-right text-[12px] font-semibold ${payment.textColor}`}
            >
              {payment.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
