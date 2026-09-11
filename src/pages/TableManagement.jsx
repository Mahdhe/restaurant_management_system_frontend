import { useState } from "react";
import PageHeader from "../components/tablemanagement/PageHeader";
import AlertBanner from "../components/dashboard/ui/AlertBanner";
import TableStatsRow from "../components/tablemanagement/TableStatsRow";
import Tabs from "../components/dashboard/ui/Tabs";
import FilterChips from "../components/dashboard/ui/FilterChips";
import FloorMap from "../components/tablemanagement/FloorMap";
import SelectedTablePanel from "../components/tablemanagement/SelectedTablePanel";
import AllTablesList from "../components/tablemanagement/AllTablesList";
import TableInfoGrid from "../components/tablemanagement/TableInfoGrid";
import CurrentOrderCard from "../components/tablemanagement/CurrentOrderCard";
import MergeSplitTableCard from "../components/tablemanagement/MergeSplitTableCard";
import WaiterAssignmentHistory from "../components/tablemanagement/WaiterAssignmentHistory";
import ActionsPanel from "../components/tablemanagement/ActionsPanel";
import WarningPanel from "../components/tablemanagement/WarningPanel";
import ActivityTimeline from "../components/dashboard/ui/ActivityTimeline";
import AddEditTableForm from "../components/tablemanagement/AddEditTableForm";
import TablePreviewCard from "../components/tablemanagement/TablePreviewCard";
import InfoCard from "../components/dashboard/ui/InfoCard"; 


const TableManagement = () => {
  const [activeTab, setActiveTab] = useState("Floor Map View");
  const [activeFilter, setActiveFilter] = useState("All Tables");
  const [selectedTableId, setSelectedTableId] = useState("T04");
 
  return (
    <div className="p-6 pb-34 bg-[#0F1923] ">
      <PageHeader
        title="Table Management"
        subtitle="Manage restaurant tables, floor layout, reservations, and occupancy status."
        actions={
          activeTab === "Floor Map View" ? (
            <>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                Edit Layout
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                + Add Table
              </button>
            </>
          ) : activeTab === "Table Details" ? (
            <>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                Edit Table
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-red-500/10 border border-red-700 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-colors duration-200"
              >
                Mark Available
              </button>
            </>
          ) : activeTab === "Add/ Edit Table" ? (
            <>
              <button className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold">
                Save Table
              </button>
            </>
          ) : null
        }
      />
 
      <Tabs
        tabs={["Floor Map View", "Table Details", "Add/ Edit Table"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
 
      {/* Floor Map View tab content */}
      {activeTab === "Floor Map View" && (
        <>
          <AlertBanner
            message="Reservation conflict: Table T03 and T07 both requested for 8:30 PM."
            actionLabel="Resolve Conflict"
          />
          <TableStatsRow />
          <FilterChips
            filters={[
              "All Tables",
              "Available",
              "Occupied",
              "Reserved",
              "Cleaning",
              "Blocked",
              "Section A",
              "Section B",
              "Section C",
            ]}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2">
              <FloorMap
                selectedTableId={selectedTableId}
                onSelectTable={setSelectedTableId}
              />
            </div>
            <SelectedTablePanel tableId={selectedTableId} />
          </div>
 
          <AllTablesList />
        </>
      )}
 
      {/* Table Details tab content */}
      {activeTab === "Table Details" && (
        <>
          <TableInfoGrid tableId={selectedTableId} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <CurrentOrderCard />
              <MergeSplitTableCard />
              <WaiterAssignmentHistory />
            </div>

            <div className="space-y-6">
              <ActionsPanel
                actions={[
                  { label: "Assign Waiter", variant: "filled" },
                  { label: "Transfer Table", variant: "outline" },
                  { label: "Merge/ Split Table", variant: "outline" },
                  { label: "Mark Cleaning", variant: "success" },
                  { label: "Block Maintenance", variant: "danger" },
                ]}
              />
              <WarningPanel
                warnings={[
                  { message: "Reservation conflict with Table T07 at 8:30 PM", severity: "amber" },
                  { message: "Capacity mismatch warning: request is for 6 guests but T04 supports 4.", severity: "red" },
                ]}
              />
              <ActivityTimeline
                entries={[
                  "Guests seated at 7:02 PM",
                  "Order sent to kitchen",
                  "Duration alert triggered",
                  "Reservation conflict detected",
                ]}
              />
            </div>
          </div>
        </>
      )}
 
      {/* Add/ Edit Table tab content */}
      {activeTab === "Add/ Edit Table" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AddEditTableForm
              onSave={(data) => console.log("Save:", data)}
              onReset={() => console.log("Reset clicked")}
            />
          </div>
          <div className="space-y-6">
            <TablePreviewCard tableNumber="T04" capacity="4" />
            <InfoCard
              title="Conflicts Rules"
              description="Warn if reservation guest count exceeds capacity, if two reservations request same time/table, or if occupancy duration passes alert limit."
            />
            <InfoCard
              title="Setup Notes"
              description="Use blocked status for maintenance. Use cleaning status after guests leave until table is ready again."
            />
          </div>
        </div>
      )}
    </div>
  );
};
 
export default TableManagement;