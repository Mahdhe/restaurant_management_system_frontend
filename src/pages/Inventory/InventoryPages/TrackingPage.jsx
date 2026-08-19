import { StockStats } from "../../../data/StockStats";
import StatsGrid from "../components/StatsGrid";
import StockLog from "../components/TrackingPageComponents/StockLogTable";
import TopUsage from "../components/TrackingPageComponents/TopUsageCard";
import UsageTrend from "../components/TrackingPageComponents/UsageTrend";

export default function StockTracking() {
  return (
    <div>
      <StatsGrid stats={StockStats} />

      <div className="flex gap-5 mt-6">
        <div className="w-202">
          <StockLog />
        </div>

        <div className="flex-1 space-y-5">
          <UsageTrend />
          <TopUsage />
        </div>
      </div>
    </div>
  );
}
