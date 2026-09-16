import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../ExportReports";
import LiveInsights from "../LiveInsights";
import MonthComparison from "../MonthComparison";
import QuickFilters from "../QuickFilters";
import StatsGrid from "../StatsGrid";
import AvgTurnTime from "../TableOccupancyComponents/AvgTimeCard";
import OccupancyChart from "../TableOccupancyComponents/OccupancyChart";
import TableStatus from "../TableOccupancyComponents/TableStatus";

export default function TableOccupancy() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        <div className="col-span-1 lg:col-span-2 xl:col-span-6 min-w-0">
          <OccupancyChart />
        </div>

        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <TableStatus />
          <AvgTurnTime />
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
