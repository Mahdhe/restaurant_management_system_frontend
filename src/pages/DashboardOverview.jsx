import DashboardPageHeader from "../components/dashboard/DashboardPageHeader";
import AlertBanner from "../components/dashboard/AlertBanner";
import KPIRow from "../components/dashboard/KPIRow";
import AnalyticsRow from "../components/dashboard/AnalyticsRow";

const DashboardOverview = () => (
  <div className="p-6 bg-[#0F1923]">
    <DashboardPageHeader />
    <AlertBanner />
    <KPIRow />
    <AnalyticsRow />

  </div>
);

export default DashboardOverview;