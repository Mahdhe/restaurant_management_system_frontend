import { StockStats } from "../../../data/InventoryData/InventoryStats";
import StatsGrid from "../StatsGrid";
import StockLog from "../TrackingPageComponents/StockLogTable";
import TopUsage from "../TrackingPageComponents/TopUsageCard";
import PrepTime from "../TrackingPageComponents/UsageTrend";

export default function StockTracking() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={StockStats} />

      <div className="flex flex-col xl:flex-row gap-5 mt-6 w-full min-w-0">
        <div className="w-full xl:w-202 min-w-0">
          <StockLog />
        </div>

        <div className="w-full xl:flex-1 min-w-0 space-y-5">
          <PrepTime />
          <TopUsage />
        </div>
      </div>
    </div>
  );
}
