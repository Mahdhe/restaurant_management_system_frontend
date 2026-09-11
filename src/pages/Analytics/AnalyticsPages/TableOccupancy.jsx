import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import QuickFilters from "../Components/QuickFilters";
import StatsGrid from "../Components/StatsGrid";
import AvgTurnTime from "../Components/TableOccupancyComponents/AvgTimeCard";
import OccupancyChart from "../Components/TableOccupancyComponents/OccupancyChart";
import TableStatus from "../Components/TableOccupancyComponents/TableStatus";

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
