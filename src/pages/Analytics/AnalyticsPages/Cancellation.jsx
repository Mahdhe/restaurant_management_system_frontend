import { cancellationStats, Stats } from "../../../data/AnalyticsStats";
import ComparisionGraph from "../Components/CancellationComponents/ComparisionCard";
import LogTable from "../Components/CancellationComponents/LogTable";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import QuickFilters from "../Components/QuickFilters";
import StatsGrid from "../Components/StatsGrid";

export default function Cancellation() {
  return (
    <div>
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-10 gap-4">
        <div className="mt-4 col-span-8 space-y-4">
          <StatsGrid stats={cancellationStats} columns={4} />
          <LogTable />
          <ComparisionGraph/>
        </div>

        <div className="col-span-2 space-y-4">
          <QuickFilters />
          <ExportReports />
          <LiveInsights />
          <MonthComparison />
        </div>
      </div>
    </div>
  );
}
