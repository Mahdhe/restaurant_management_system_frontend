import { useState } from "react";
import Dashboard from "./ReservationPages/Reservationdashboard";
import ReservationList from "./ReservationPages/ReservationList";
import ReservationDetails from "./ReservationPages/ReservationDetails";
import Assigntable from "./ReservationPages/AssignTable";
import StatusTracking from "./ReservationPages/StatusTracking";
import ReservationTabs from "../../components/Reservation/Common/buttonrow";
import { useNavigate } from "react-router-dom";

export default function ReservationDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "reservation-list":
        return <ReservationList />;
      case "details":
        return <ReservationDetails />;
      case "assign-table":
        return <Assigntable />;
      case "status-tracking":
        return <StatusTracking />;
    }
  };

  return (
    <div className="w-full min-w-0">
      <section className=" flex w-full min-w-0 min-h-[61px] flex-col  md:flex-row lg:flex-row md:items-center md:justify-between gap-[16px] md:gap-[24px] p-6">
        <div className="flex w-full min-h-[61px] flex-col gap-[4px]">
          <h2 className="w-full min-h-[36px] font-dm font-[600] text-[22px] sm:text-[24px] lg:text-[28px] text-[#F0F4F8] tracking-normal leading-none">
            Reservation
          </h2>
          <p className="w-full min-h-[21px] font-dm font-[400] text-[16px] leading-none tracking-normal text-[#556070] ">
            Manage guest reservations, table assignments, approvals, and booking
            status.
          </p>
        </div>

        {/* buttons  */}
        {activeTab === "dashboard" || activeTab === "reservation-list" ? (
          // Dashboard and Reservation List
          <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
            <button
              type="button"
              onClick={() => navigate("/reservations/details")}
              className="flex flex-1 max-w-[77px] min-h-[40px] gap-[8px] bg-[#243447] justify-center items-center border border-[#FFFFFF24] px-[16px] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer"
            >
              Export
            </button>

            <button
              type="button"
              onClick={() => navigate("/reservations/assign-table")}
              className="ml-auto flex min-h-[40px] gap-[8px] px-[16px] bg-[#E67E22] justify-center items-center border border-[#FFFFFF24] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap"
            >
              + New Reservation
            </button>
          </div>
        ) : activeTab === "details" ? (
          // Reservation Details
          <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
            <button
              type="button"
              className="flex flex-1 max-w-[75px] min-h-[40px] gap-[8px] bg-[#E74C3C1F] justify-center items-center border border-[#E74C3C26] px-[16px] py-[8px] opacity-100 rounded-[10px] font-dm text-[#E74C3C] font-[600] text-[14px] leading-none tracking-normal cursor-pointer"
            >
              Reject
            </button>

            <button
              type="button"
              className="ml-auto flex min-h-[40px] gap-[8px] px-[16px] bg-[#27AE6026] justify-center items-center border border-[#27AE6026] py-[8px] opacity-100 rounded-[10px] text-[#27AE60] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap"
            >
              Approve
            </button>
          </div>
        ) : activeTab === "assign-table" ? (
          // Assign Table
          <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
            <button
              type="button"
              className="flex flex-1 max-w-[77px] min-h-[40px] gap-[8px] bg-[#243447] justify-center items-center border border-[#FFFFFF24] px-[16px] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="button"
              className="ml-auto flex min-h-[40px] gap-[8px] px-[16px] bg-[#E67E22] justify-center items-center border border-[#FFFFFF24] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap"
            >
              Confirm Assignment
            </button>
          </div>
        ) : activeTab === "status-tracking" ? (
          // Status Tracking
          <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
            <button
              type="button"
              className="flex flex-1 w-fit min-h-[40px] gap-[8px] bg-[#243447] justify-center items-center border border-[#FFFFFF24] px-[16px] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer"
            >
              Send update
            </button>

            <button
              type="button"
              className="ml-auto flex min-h-[40px] gap-[8px] px-[16px] bg-[#E67E22] justify-center items-center border border-[#FFFFFF24] py-[8px] opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap"
            >
              Mark Seated
            </button>
          </div>
        ) : null}
      </section>

      <ReservationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div>{renderContent()}</div>
    </div>
  );
}

// import Reservationdashboard from "./ReservationPages/Reservationdashboard";
// import ReservationList from "./ReservationPages/ReservationList";
// import Reservationdetails from "./ReservationPages/ReservationDetails";
// import Assigntable from "./ReservationPages/AssignTable";
// import StatusTracking from "./ReservationPages/StatusTracking";

// function ReservationRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/dashboard" replace />} />
//       <Route path="/dashboard" element={<Reservationdashboard />} />

//       <Route path="/reservations/list" element={<ReservationList />} />

//       <Route path="/reservations/details" element={<Reservationdetails />} />

//       <Route path="/reservations/assign-table" element={<Assigntable />} />

//       <Route
//         path="/reservations/status-tracking"
//         element={<StatusTracking />}
//       />
//     </Routes>
//   );
// }

// export default ReservationRoutes;
