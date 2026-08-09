import { TriangleAlert } from "lucide-react";
import StatsGrid from "../components/StatsGrid";
import ActionButtons from "../components/ActionButtons";
import { QueueButtons } from "../../../data/QueueButtons";
import { useState } from "react";
import { QueueStats } from "../../../data/QueueStats";
import { QueueOrders } from "../../../data/QueueOrders";
import OrderCard from "../components/OrderCard";
import { KitchenSummery } from "../../../data/KitchenSummery";

export default function KitchenQueueContent({ label, value, valuColor }) {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <>
      <StatsGrid stats={QueueStats} />

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

      <div className="flex gap-3">
        <div className="mt-6 grid grid-cols-3 gap-5">
          {QueueOrders.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </div>

        {/* Kitchen summery */}
        <div>
          <div>
            <h1>Kitchen Summer</h1>

            <div>
              {KitchenSummery.map((summery) => (
                <div key={summery.label} className="flex justify-between">
                  <p>{label}</p>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
