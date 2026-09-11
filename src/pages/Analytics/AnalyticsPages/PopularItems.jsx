import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import CategoryShare from "../Components/PopularItemComponents/CategoryShare";
import ItemInsights from "../Components/PopularItemComponents/ItemInsights";
import TopSellingItems from "../Components/PopularItemComponents/TopSellingItems";
import QuickFilters from "../Components/QuickFilters";
import StatsGrid from "../Components/StatsGrid";

export default function PopularItems() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        {/* left */}
        <div className="col-span-1 lg:col-span-2 xl:col-span-6 min-w-0 space-y-4">
          <TopSellingItems />
        </div>

        {/* middle */}
        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <CategoryShare />
          <ItemInsights />
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
