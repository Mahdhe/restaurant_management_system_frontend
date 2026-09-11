import { InventoryStats } from "../../../data/InventoryStats";
import QuickActions from "../components/DashboardComponents/QuickActions";
import StockOverview from "../components/DashboardComponents/StockOverview";
import StockSummary from "../components/DashboardComponents/StockSummary";
import StatsGrid from "../components/StatsGrid";

export default function DashboardPage() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={InventoryStats} columns={4}/>

      <div className="flex flex-col xl:flex-row gap-5 items-start">
        <div className="mt-6 w-full xl:w-283 min-w-0">
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
