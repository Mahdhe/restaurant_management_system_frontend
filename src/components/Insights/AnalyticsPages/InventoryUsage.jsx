import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../ExportReports";
import CostBreakdown from "../InventoryUsageComponents/CostBreakdown";
import TopIngredientTable from "../InventoryUsageComponents/TopIngredientTable";
import WeeklySummary from "../InventoryUsageComponents/WeeklySummary";
import LiveInsights from "../LiveInsights";
import MonthComparison from "../MonthComparison";
import QuickFilters from "../QuickFilters";
import RevenueTrend from "../SalesReportComponents/RevenueTrend";
import StatsGrid from "../StatsGrid";

export default function InventoryUsage() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        <div className="col-span-1 lg:col-span-2 xl:col-span-6 min-w-0 space-y-4">
          <RevenueTrend />
          <TopIngredientTable />
        </div>

        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <WeeklySummary />
          <CostBreakdown />
        </div>

        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <QuickFilters />
          <ExportReports />
          <LiveInsights />
          <MonthComparison />
        </div>
      </div>
    </div>
  );
}
