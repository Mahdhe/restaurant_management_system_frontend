import { InventoryStats } from "../../../data/InventoryStats";
import QuickActions from "../components/DashboardComponents/QuickActions";
import StockOverview from "../components/DashboardComponents/StockOverview";
import StockSummary from "../components/DashboardComponents/StockSummary";
import StatsGrid from "../components/StatsGrid";

export default function DashboardPage() {
  return (
    <div>
      <StatsGrid stats={InventoryStats} />

      <div className="flex gap-5 items-start">
        <div className="mt-6 w-283">
          <StockOverview />
        </div>

        <div className="mt-6 flex flex-col space-y-5">
          <QuickActions />
          <StockSummary />
        </div>
      </div>
    </div>
  );
}
