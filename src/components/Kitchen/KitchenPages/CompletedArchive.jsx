import { useState } from "react";
import StatsGrid from "../StatsGrid";
import { CompletedStats } from "../../../data/KitchenData/KitchenStats";
import ActionButtons from "../ActionButtons";
import { ProgressButtons } from "../../../data/KitchenData/ActionButtons";
import CompletedOrderTable from "../CompletedArchiveComponents/CompletedOrderTable";
import PrepTime from "../CompletedArchiveComponents/PrepTimeGraph";
import ShiftSummaryCard from "../CompletedArchiveComponents/ShiftSummaryCard";

export default function CompletedArchive() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div className="w-full min-w-0">
      <StatsGrid stats={CompletedStats} columns={4}/>

      {/* action button */}
      <ActionButtons
        buttons={ProgressButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6 flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-205 min-w-0">
          <CompletedOrderTable />
        </div>

        <div className="w-full xl:flex-1 flex-col gap-5">
          <PrepTime />
          <ShiftSummaryCard />
        </div>
      </div>
    </div>
  );
}
