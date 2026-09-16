import { useState } from "react";
import SalesReport from "../../components/Insights/AnalyticsPages/SalesReport";
import PeakHours from "../../components/Insights/AnalyticsPages/PeakHours";
import PopularItems from "../../components/Insights/AnalyticsPages/PopularItems";
import TableOccupancy from "../../components/Insights/AnalyticsPages/TableOccupancy";
import Cancellation from "../../components/Insights/AnalyticsPages/Cancellation";
import InventoryUsage from "../../components/Insights/AnalyticsPages/InventoryUsage";
import AnalyticsHeader from "../../components/Insights/AnalyticsHeader";
import AnalyticsTabs from "../../components/Insights/AnalyticsTabs";

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("salesReport");

  const renderContent = () => {
    switch (activeTab) {
      case "salesReport":
        return <SalesReport />;
      case "peakHours":
        return <PeakHours />;
      case "popularItems":
        return <PopularItems />;
      case "tableOccupancy":
        return <TableOccupancy />;
      case "cancellation":
        return <Cancellation />;
      case "inventoryUsage":
        return <InventoryUsage />;
      default:
        return <SalesReport />;
    }
  };

  return (
    <div className="w-full min-w-0">
      <AnalyticsHeader />
      <AnalyticsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-5 w-full min-w-0">{renderContent()}</div>
    </div>
  );
}
