import { useState } from "react";
import StatsGrid from "../StatsGrid";
import { ProgressStats } from "../../../data/KitchenData/KitchenStats";
import ActionButtons from "../ActionButtons";
import { ProgressButtons } from "../../../data/KitchenData/ActionButtons";
import { ProgressOrders } from "../../../data/KitchenData/ProgressOrders";
import ProgressOrderCard from "../ProgressOrderComponents/ProgressOrderCard";

export default function InProgressOrders() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={ProgressStats} columns={4} />

      {/* action button */}
      <ActionButtons
        buttons={ProgressButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProgressOrders.map((order) => (
          <ProgressOrderCard key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
}
