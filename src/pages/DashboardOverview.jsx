import DashboardPageHeader from "../components/dashboard/DashboardPageHeader";
import AlertBanner from "../components/dashboard/ui/AlertBanner";
import KPIRow from "../components/dashboard/KPIRow";
import AnalyticsRow from "../components/dashboard/AnalyticsRow";
import TableAndTopItemsRow from "../components/dashboard/Tableandtopitemsrow";
import LiveOrdersTable from "../components/dashboard/Liveorderstable";

const DashboardOverview = () => (
  <div className="p-6 bg-[#0F1923]">
    <DashboardPageHeader />
    <AlertBanner />
    <KPIRow />
    <AnalyticsRow />
    <TableAndTopItemsRow />
    <LiveOrdersTable />

  </div>
);

export default DashboardOverview;