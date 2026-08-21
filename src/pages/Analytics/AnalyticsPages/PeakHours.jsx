import { Stats } from "../../../data/AnalyticsStats";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import AnalyticsChart from "../Components/PeakHourComponents/AnalyticsChart";
import QuickInsight from "../Components/PeakHourComponents/QuickInsight";
import TrafficbyDay from "../Components/PeakHourComponents/TrafficbyDay";
import QuickFilters from "../Components/QuickFilters";
import StatsGrid from "../Components/StatsGrid";

export default function PeakHours() {
  return (
    <div>
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-10 gap-4">
        {/* left */}
        <div className="col-span-6 space-y-4">
          <AnalyticsChart />
        </div>

        {/* middle */}
        <div className="col-span-2 space-y-4">
          <TrafficbyDay />
          <QuickInsight />
        </div>

        {/* right */}
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
