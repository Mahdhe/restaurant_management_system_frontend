import { StockStats } from "../../../data/InventoryData/InventoryStats";
import StatsGrid from "../components/StatsGrid";
import StockLog from "../components/TrackingPageComponents/StockLogTable";
import TopUsage from "../components/TrackingPageComponents/TopUsageCard";
import UsageTrend from "../components/TrackingPageComponents/UsageTrend";

export default function StockTracking() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={StockStats} />

      <div className="flex flex-col xl:flex-row gap-5 mt-6 w-full min-w-0">
        <div className="w-full xl:w-202 min-w-0">
          <StockLog />
        </div>

        <div className="w-full xl:flex-1 min-w-0 space-y-5">
          <UsageTrend />
          <TopUsage />
        </div>
      </div>
    </div>
  );
}
