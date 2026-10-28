import { useState } from "react";
import FormField from "../dashboard/ui/FormField";
import Toggle from "../dashboard/ui/Toggle";
import StatusBadge from "../dashboard/ui/StatusBadge";

const AddEditTableForm = ({ onSave, onReset }) => {
  const [tableNumber, setTableNumber] = useState("T04");
  const [capacity, setCapacity] = useState("4");
  const [section, setSection] = useState("Section B");
  const [shape, setShape] = useState("Square");
  const [defaultStatus, setDefaultStatus] = useState("Available");
  const [assignedWaiter, setAssignedWaiter] = useState("Kasun Perera");
  const [maintenanceReason, setMaintenanceReason] = useState("None");
  const [durationAlertLimit, setDurationAlertLimit] = useState("60 minutes");
  const [notes, setNotes] = useState(
    "Near window area. Suitable for family seating."
  );
  const [activeTable, setActiveTable] = useState(true);
  const [allowReservationAssignment, setAllowReservationAssignment] =
    useState(true);

  const handleSaveChanges = () => {
    onSave?.({
      tableNumber,
      capacity,
      section,
      shape,
      defaultStatus,
      assignedWaiter,
      maintenanceReason,
      durationAlertLimit,
      notes,
      activeTable,
      allowReservationAssignment,
    });
  };

  return (
    <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-base font-semibold">Table Info</h2>
        <StatusBadge status="Active" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <FormField
          label="Table Number"
          value={tableNumber}
          onChange={setTableNumber}
        />
        <FormField label="Capacity" value={capacity} onChange={setCapacity} />
        <FormField label="Section" value={section} onChange={setSection} />
        <FormField label="Shape" value={shape} onChange={setShape} />
        <FormField
          label="Default Status"
          value={defaultStatus}
          onChange={setDefaultStatus}
        />
        <FormField
          label="Assigned Waiter"
          value={assignedWaiter}
          onChange={setAssignedWaiter}
        />
        <FormField
          label="Maintenance Reason"
          value={maintenanceReason}
          onChange={setMaintenanceReason}
        />
        <FormField
          label="Duration Alert Limit"
          value={durationAlertLimit}
          onChange={setDurationAlertLimit}
        />
      </div>

      <div className="mb-5">
        <FormField
          label="Notes"
          as="textarea"
          rows={3}
          value={notes}
          onChange={setNotes}
        />
      </div>

      <div className="space-y-4 mb-6 border-t border-slate-800 pt-5">
        <Toggle
          label="Active Table"
          description="Inactive tables are hidden from staff floor map."
          checked={activeTable}
          onChange={setActiveTable}
        />
        <Toggle
          label="Allow Reservation Assignment"
          description="Turn off if the table is blocked, under cleaning or maintenance."
          checked={allowReservationAssignment}
          onChange={setAllowReservationAssignment}
        />
      </div>

      <div className="flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onReset}
          className="px-5 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="px-5 py-2.5 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AddEditTableForm;