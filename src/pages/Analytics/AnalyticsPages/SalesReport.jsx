import { Stats } from "../../../data/AnalyticsStats";
import ExportReports from "../Components/ExportReports";
import LiveInsights from "../Components/LiveInsights";
import MonthComparison from "../Components/MonthComparison";
import QuickFilters from "../Components/QuickFilters";
import DailySalesBreakdown from "../Components/SalesReportComponents/DailySalesBreakdown";
import PaymentBreakdown from "../Components/SalesReportComponents/PaymentBreakdown";
import RevenueSummary from "../Components/SalesReportComponents/RevenueSummary";
import RevenueTrend from "../Components/SalesReportComponents/RevenueTrend";
import StatsGrid from "../Components/StatsGrid";

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
