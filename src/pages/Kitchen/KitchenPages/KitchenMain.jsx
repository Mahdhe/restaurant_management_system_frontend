import { useState } from "react";
import InProgressOrders from "./In-ProgressOrders";
import CompletedArchive from "./CompletedArchive";
import KitchenTabs from "../components/KitchenTabs";
import KitchenQueueContent from "./KitchenQueueContent";
import KitchenDashboardHeader from "../components/KitchenDashboardHeader";

export default function KitchenMain() {
  const [activeTab, setActiveTab] = useState("queue");

  const renderContent = () => {
    switch (activeTab) {
      case "queue":
        return <KitchenQueueContent />;
      case "progress":
        return <InProgressOrders />;
      case "completed":
        return <CompletedArchive />;
      default:
        return <KitchenQueueContent />;
    }
  };

  return (
    <div>
      <KitchenDashboardHeader activeTab={activeTab}/>
      <KitchenTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
}
