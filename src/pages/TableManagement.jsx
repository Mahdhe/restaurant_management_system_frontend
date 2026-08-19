import { useState } from "react";
import TableManagementHeader from "../components/tablemanagement/TableManagementHeader";
import AlertBanner from "../components/dashboard/ui/AlertBanner";
import TableStatsRow from "../components/tablemanagement/TableStatsRow";
import Tabs from "../components/dashboard/ui/Tabs";


const TableManagement = () => {
  const [activeTab, setActiveTab] = useState("Floor Map View");

  return (
    <div className="p-6 bg-[#0F1923]">
      <TableManagementHeader />
           <Tabs
        tabs={["Floor Map View", "Table Details", "Add/ Edit Table"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <AlertBanner
        message="Reservation conflict: Table T03 and T07 both requested for 8:30 PM."
        actionLabel="Resolve Conflict"
      />
      <TableStatsRow />
 
      {/* Floor map grid, selected table panel, and all-tables list
          go here next, conditionally rendered based on activeTab */}
    </div>
  );
};

export default TableManagement;