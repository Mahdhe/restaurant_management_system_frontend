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
    <div>
      <StatsGrid stats={ProgressStats} />

      {/* action button */}
      <ActionButtons
        buttons={ProgressButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6 grid grid-cols-3 gap-4">
        {ProgressOrders.map((order) => (
          <ProgressOrderCard key={order.id} {...order} />
        ))}
      </div>
    </div>
  );
}
