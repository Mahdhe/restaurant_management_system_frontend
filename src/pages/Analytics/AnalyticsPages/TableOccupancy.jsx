import { Stats } from "../../../data/AnalyticsStats";
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
    <div>
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-6">
          <OccupancyChart />
        </div>

        <div className="col-span-2 space-y-4">
          <TableStatus />
          <AvgTurnTime />
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
