import { payments } from "../../../../data/ProgressData";
import ProgressBar from "../PrograssBar";

export default function PaymentBreakdown() {
  return (
    <div className="rounded-[14px] border border-white/15 bg-[#1c2a38] overflow-hidden">
      <div className="border-b border-white/15 px-5 pt-5 pb-2.5">
        <h2 className="text-[18px] font-bold text-[#f0f4f8]">
          Payment Breakdown
        </h2>
      </div>

      <ProgressBar data={payments} />
    </div>
  );
}
