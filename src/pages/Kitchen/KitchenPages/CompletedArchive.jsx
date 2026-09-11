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
