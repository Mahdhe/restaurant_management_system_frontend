import { TriangleAlert } from "lucide-react";
import StockAlertTable from "../components/AlertPageComponents/StockAlertTable";
import ReorderSummary from "../components/AlertPageComponents/ReorderSummary";

export default function LowAlertPage() {
  return (
    <div className="w-full min-w-0">
      <div className="flex w-full min-h-14 border border-[#f39c1280] bg-[#f39c121a] rounded-[14px] mt-5 items-center px-4 sm:px-5 py-3 sm:py-4 justify-between">
        <div className="flex gap-3 items-start sm:items-center min-w-0">
          <TriangleAlert
            size={18}
            className="fill-yellow-400 stroke-black shrink-0 mt-0.5 sm:mt-0"
            strokeWidth={2}
          />
          <p className="font-semibold text-[12px] sm:text-[14px] text-[#f39c12] leading-5">
            14 ingredients are below threshold. 5 items are critical and need
            immediate reorder.
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5 w-full min-w-0">
        <div className="mt-6 w-full xl:w-202 min-w-0">
          <StockAlertTable />
        </div>

        <div className="w-full xl:flex-1 min-w-0 mt-6">
          <ReorderSummary />
        </div>
      </div>
    </div>
  );
}
