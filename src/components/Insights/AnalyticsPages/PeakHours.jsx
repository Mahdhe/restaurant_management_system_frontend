import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../ExportReports";
import LiveInsights from "../LiveInsights";
import MonthComparison from "../MonthComparison";
import AnalyticsChart from "../PeakHourComponents/AnalyticsChart";
import QuickInsight from "../PeakHourComponents/QuickInsight";
import TrafficbyDay from "../PeakHourComponents/TrafficbyDay";
import QuickFilters from "../QuickFilters";
import StatsGrid from "../StatsGrid";

export default function PeakHours() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        {/* left */}
        <div className="col-span-1 lg:col-span-2 xl:col-span-6 min-w-0 space-y-4">
          <AnalyticsChart />
        </div>

        {/* middle */}
        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <TrafficbyDay />
          <QuickInsight />
        </div>

        {/* right */}
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
