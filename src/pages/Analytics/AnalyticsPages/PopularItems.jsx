import { Stats } from "../../../data/AnalyticsStats";
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
    <div>
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-10 gap-4">
        {/* left */}
        <div className="col-span-6 space-y-4">
          <TopSellingItems />
        </div>

        {/* middle */}
        <div className="col-span-2 space-y-4">
          <CategoryShare />
          <ItemInsights />
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
