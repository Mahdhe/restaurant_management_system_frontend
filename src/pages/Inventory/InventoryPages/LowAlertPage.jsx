import { TriangleAlert } from "lucide-react";
import StockAlertTable from "../components/AlertPageComponents/StockAlertTable";
import ReorderSummary from "../components/AlertPageComponents/ReorderSummary";

export default function LowAlertPage() {
  return (
    <div>
      <div className="flex w-full h-14 border border-[#f39c1280] bg-[#f39c121a] rounded-[14px] mt-5 items-center px-5 py-4 justify-between">
        <div className="flex gap-3">
          <TriangleAlert
            size={18}
            className="fill-yellow-400 stroke-black"
            strokeWidth={2}
          />
          <p className="font-semibold text-[14px] text-[#f39c12]">
            14 ingredients are below threshold. 5 items are critical and need
            immediate reorder.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="mt-6 w-202">
          <StockAlertTable />
        </div>

        <div className="flex-1 mt-6">
          <ReorderSummary />
        </div>
      </div>
    </div>
  );
}
