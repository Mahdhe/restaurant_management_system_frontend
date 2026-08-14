import { useState } from "react";
import DashboardPage from "./InventoryPages/DashboardPage";
import StockList from "./InventoryPages/StockList";
import AddOrEditStock from "./InventoryPages/Add-EditStock";
import LowAlertPage from "./InventoryPages/LowAlertPage";
import SupplierPage from "./InventoryPages/SupplierPage";
import StockTracking from "./InventoryPages/TrackingPage";
import InventoryHeader from "./components/InventoryDashboardHeader";
import InventoryTabs from "./components/InventoryTabs";

export default function InventoryDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage />;
      case "Stock-list":
        return <StockList />;
      case "add-edit-stock":
        return <AddOrEditStock />;
      case "stockAlert":
        return <LowAlertPage />;
      case "supplier":
        return <SupplierPage />;
      case "stock-track":
        return <StockTracking />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div>
      <InventoryHeader />
      <InventoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
}
