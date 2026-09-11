import { useState } from "react";
import { ProgressButtons } from "../../../data/ProgressButtons";
import { ProgressStats } from "../../../data/ProgressStats";
import ActionButtons from "../components/ActionButtons";
import StatsGrid from "../components/StatsGrid";
import { ProgressOrders } from "../../../data/ProgressOrders";
import ProgressOrderCard from "../components/ProgressOrderComponents/ProgressOrderCard";

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
