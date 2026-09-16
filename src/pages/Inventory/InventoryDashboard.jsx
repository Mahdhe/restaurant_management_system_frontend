import { useState } from "react";
import DashboardPage from "../../components/Inventory/InventoryPages/DashboardPage";
import StockList from "../../components/Inventory/InventoryPages/StockList";
import AddOrEditStock from "../../components/Inventory/InventoryPages/Add-EditStock";
import LowAlertPage from "../../components/Inventory/InventoryPages/LowAlertPage";
import SupplierPage from "../../components/Inventory/InventoryPages/SupplierPage";
import StockTracking from "../../components/Inventory/InventoryPages/TrackingPage";
import InventoryHeader from "../../components/Inventory/InventoryDashboardHeader";
import InventoryTabs from "../../components/Inventory/InventoryTabs";

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
    <div className="w-full min-w-0">
      <InventoryHeader />
      <InventoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
}
