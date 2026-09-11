import { TriangleAlert } from "lucide-react";
import StatsGrid from "../components/StatsGrid";
import ActionButtons from "../components/ActionButtons";
import { useState } from "react";
import { QueueOrders } from "../../../data/KitchenData/QueueOrders";
import KitchenSummeryCard from "../components/KitchenQueueComponents/KitchenSummeryCard";
import PriorityOrderCard from "../components/KitchenQueueComponents/PriorityOrderCard";
import FilterCard, { filterButtons } from "../components/KitchenQueueComponents/StationFilterCard";
import QueueOrderCard from "../components/KitchenQueueComponents/QueueOrderCard";
import { QueueStats } from "../../../data/KitchenData/KitchenStats";
import { QueueButtons } from "../../../data/KitchenData/ActionButtons";

export default function KitchenQueueContent() {
  const [activeButton, setActiveButton] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <StatsGrid stats={QueueStats} columns={4}/>

      <div className="flex w-full min-h-14 border border-[#e74c3c] bg-[#e74c3c1a] rounded-[14px] mt-5 items-center px-3 sm:px-4 md:px-5 py-3 md:py-4 justify-between gap-3">
        <div className="flex gap-3 items-start min-w-0">
          <TriangleAlert size={18} className="text-[#e74c3c] shrink-0 mt-0.5" />

          <p className="font-semibold text-[12px] sm:text-[13px] md:text-[14px] text-[#e74c3c]">
            Priority Warning: 3 orders have exceeded estimated prep time.
          </p>
        </div>

        <div className="shrink-0">
          <button className="border border-[#556070] items-center px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-[13px] font-semibold text-[#556070] rounded-[10px] whitespace-nowrap">
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

      <div className="flex flex-col xl:flex-row gap-5 items-start">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full xl:w-225">
          {QueueOrders.map((order) => (
            <QueueOrderCard key={order.id} {...order} />
          ))}
        </div>

        <div className="mt-6 flex-1 w-full flex-col space-y-5">
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
