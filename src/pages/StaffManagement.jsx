import { useState } from "react";
import PageHeader from "../components/tablemanagement/PageHeader";
import Tabs from "../components/dashboard/ui/Tabs";
import StaffStatsGrid from "../components/staffmanagement/StaffStatsGrid";              
import AlertBanner from "../components/dashboard/ui/AlertBanner";
import DepartmentDistributionCard from "../components/staffmanagement/DepartmentDistributionCard";
import RevenueTrendCard from "../components/staffmanagement/RevenueTrendCard";
import RecentStaffActivity from "../components/staffmanagement/RecentStaffActivity";
import ActionsPanel from "../components/tablemanagement/ActionsPanel";
import ShiftCoverageCard from "../components/staffmanagement/ShiftCoverageCard";
import PendingLeaveRequestsCard from "../components/staffmanagement/PendingLeaveRequestsCard";
import TopPerformerCard from "../components/staffmanagement/TopPerformerCard";
import UpcomingBirthdaysCard from "../components/staffmanagement/UpcomingBirthdaysCard";
import DepartmentDistributionSummary from "../components/staffmanagement/DepartmentDistributionSummary";


const StaffManagement = () => {
  const [activeTab, setActiveTab] = useState("Staff Dashboard");

  return (
    <div className="p-6 bg-[#0F1923] min-h-screen">
        <PageHeader
        title="Staff Management"
        subtitle="Manage employees, attendance, shifts, leave requests, workforce availability, and performances."
        actions={
            <>
            <button
                type="button"
                className="px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
            >
                Export Staff Report
            </button>
            <button
                type="button"
                className="px-4 py-2 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
                + Add Employee
            </button>
            </>
        }
        />
      <Tabs
        tabs={["Staff Dashboard", "Staff Directory", "Add/ Edit Staff", "Shift Scheduling", "Attendance & Leave", "Performance Tracking", "Profile View"]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === "Staff Dashboard" && (
        <>
          <StaffStatsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                <DepartmentDistributionCard />
                <RevenueTrendCard />
                <RecentStaffActivity />
            </div>
            <div className="space-y-6">
                <ActionsPanel title="Quick Actions" actions={[
                    { label: "+ Add Stock Items", variant: "filled" },
                    { label: "Assign Shift", variant: "outline" },
                    { label: "Approve Leave", variant: "outline" },
                    { label: "Generate Payroll", variant: "outline" },
                    { label: "Export Staff List", variant: "outline" },
                ]} />
                <ShiftCoverageCard />
                <PendingLeaveRequestsCard />
                <TopPerformerCard />
                <UpcomingBirthdaysCard />
                <DepartmentDistributionSummary />
            </div>
            </div>
        </>
      )}
    </div>
  );
};

export default StaffManagement;