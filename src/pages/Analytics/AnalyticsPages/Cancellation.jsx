import { cancellationStats, Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ComparisionGraph from "../Components/CancellationComponents/ComparisionCard";
import LogTable from "../Components/CancellationComponents/LogTable";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import QuickFilters from "../Components/QuickFilters";
import StatsGrid from "../Components/StatsGrid";

export default function Cancellation() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        <div className="mt-4 col-span-1 lg:col-span-2 xl:col-span-8 min-w-0 space-y-4">
          <StatsGrid stats={cancellationStats} columns={4} />
          <LogTable />
          <ComparisionGraph />
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
