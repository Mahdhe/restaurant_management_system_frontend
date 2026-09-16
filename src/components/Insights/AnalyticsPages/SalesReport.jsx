import { Stats } from "../../../data/AnalyticsData/AnalyticsStats";
import ExportReports from "../ExportReports";
import LiveInsights from "../LiveInsights";
import MonthComparison from "../MonthComparison";
import QuickFilters from "../QuickFilters";
import DailySalesBreakdown from "../SalesReportComponents/DailySalesBreakdown";
import PaymentBreakdown from "../SalesReportComponents/PaymentBreakdown";
import RevenueSummary from "../SalesReportComponents/RevenueSummary";
import RevenueTrend from "../SalesReportComponents/RevenueTrend";
import StatsGrid from "../StatsGrid";

export default function SalesReport() {
  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={Stats} columns={6} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-10 gap-4 w-full min-w-0">
        {/* left */}
        <div className="col-span-1 lg:col-span-2 xl:col-span-6 min-w-0 space-y-4">
          <RevenueTrend />
          <DailySalesBreakdown />
        </div>

        {/* middle */}
        <div className="col-span-1 lg:col-span-1 xl:col-span-2 min-w-0 space-y-4">
          <RevenueSummary />
          <PaymentBreakdown />
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
