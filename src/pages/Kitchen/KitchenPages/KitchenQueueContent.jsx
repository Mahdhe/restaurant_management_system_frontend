import { TriangleAlert } from "lucide-react";
import StatsGrid from "../components/StatsGrid";
import ActionButtons from "../components/ActionButtons";
import { QueueButtons } from "../../../data/QueueButtons";
import { useState } from "react";
import { QueueStats } from "../../../data/QueueStats";
import { QueueOrders } from "../../../data/QueueOrders";
import KitchenSummeryCard from "../components/KitchenQueueComponents/KitchenSummeryCard";
import PriorityOrderCard from "../components/KitchenQueueComponents/PriorityOrderCard";
import FilterCard, { filterButtons } from "../components/KitchenQueueComponents/StationFilterCard";
import QueueOrderCard from "../components/KitchenQueueComponents/QueueOrderCard";

export default function KitchenQueueContent() {
  const [activeButton, setActiveButton] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <StatsGrid stats={QueueStats} columns={4}/>

      <div className="flex w-full h-14 border border-[#e74c3c] bg-[#e74c3c1a] rounded-[14px] mt-5 items-center px-5 py-4 justify-between">
        <div className="flex gap-3">
          <TriangleAlert size={18} className="text-[#e74c3c]" />
          <p className="font-semibold text-[14px] text-[#e74c3c]">
            Priority Warning: 3 orders have exceeded estimated prep time.
          </p>
        </div>

        <div>
          <button className="border border-[#556070] items-center px-3 py-1.5 text-[13px] font-semibold text-[#556070] rounded-[10px]">
            View Delayed
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <ActionButtons
        buttons={QueueButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="flex gap-5 items-start">
        <div className="mt-6 grid grid-cols-3 gap-4 w-225">
          {QueueOrders.map((order) => (
            <QueueOrderCard key={order.id} {...order} />
          ))}
        </div>

        <div className="mt-6 flex-1 flex-col space-y-5">
          <KitchenSummeryCard />
          <PriorityOrderCard />
          <FilterCard
            buttons={filterButtons}
            activeButton={activeFilter}
            onSelect={setActiveFilter}
          />
        </div>
      </div>
    </>
  );
}
