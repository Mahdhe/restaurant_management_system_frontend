import { useState } from "react";
import ActionButtons from "../components/StockListComponents/ActionButtons";
import { StockFilterButtons } from "../../../data/ActionButtons";
import StockTable from "../components/StockListComponents/StockTable";

export default function StockList() {
  const [activeButton, setActiveButton] = useState("all");

  return (
    <div>
      <ActionButtons
        buttons={StockFilterButtons}
        activeButton={activeButton}
        onSelect={setActiveButton}
      />

      <div className="mt-6">
        <StockTable />
      </div>
    </div>
  );
}
