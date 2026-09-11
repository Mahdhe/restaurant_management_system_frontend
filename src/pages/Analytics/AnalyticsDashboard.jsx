import { useState } from "react";
import SalesReport from "./AnalyticsPages/SalesReport";
import PeakHours from "./AnalyticsPages/PeakHours";
import PopularItems from "./AnalyticsPages/PopularItems";
import TableOccupancy from "./AnalyticsPages/TableOccupancy";
import Cancellation from "./AnalyticsPages/Cancellation";
import InventoryUsage from "./AnalyticsPages/InventoryUsage";
import AnalyticsHeader from "./Components/AnalyticsHeader";
import AnalyticsTabs from "./Components/AnalyticsTabs";

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
