import { useState } from "react";
import { CompletedStats } from "../../../data/CompletedStats";
import { ProgressButtons } from "../../../data/ProgressButtons";
import ActionButtons from "../components/ActionButtons";
import StatsGrid from "../components/StatsGrid";
import CompletedOrderTable from "../components/CompletedArchiveComponents/CompletedOrderTable";
import PrepTime from "../components/CompletedArchiveComponents/PrepTimeGraph";
import ShiftSummaryCard from "../components/CompletedArchiveComponents/ShiftSummaryCard";

export default function CompletedArchive() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div>
      <StatsGrid stats={CompletedStats} columns={4}/>

      {/* action button */}
      <ActionButtons
        buttons={ProgressButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6 flex gap-6">
        <div className="w-205">
          <CompletedOrderTable />
        </div>

        <div className=" flex-1 flex-col gap-5">
          <PrepTime />
          <ShiftSummaryCard />
        </div>
      </div>
    </div>
  );
}
