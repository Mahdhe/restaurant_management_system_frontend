import { useState } from "react";
import ActionButtons from "../components/StockListComponents/ActionButtons";
import { StockFilterButtons } from "../../../data/ActionButtons";
import StockTable from "../components/StockListComponents/StockTable";

export default function StockList() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div className="w-full min-w-0">
      <ActionButtons
        buttons={StockFilterButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6 w-full min-w-0">
        <StockTable />
      </div>
    </div>
  );
}
