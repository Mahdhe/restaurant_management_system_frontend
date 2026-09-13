import { useState } from "react";
import PageHeader from "../components/tablemanagement/PageHeader";
import Tabs from "../components/dashboard/ui/Tabs";
import StaffStatsGrid from "../components/staffmanagement/StaffStatsGrid";              
import AlertBanner from "../components/dashboard/ui/AlertBanner";
import DepartmentDistributionCard from "../components/staffmanagement/DepartmentDistributionCard";
import RevenueTrendCard from "../components/staffmanagement/RevenueTrendCard";
import RecentStaffActivity from "../components/staffmanagement/RecentStaffActivity";


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
                {/* Quick Actions, Shift Coverage, Pending Leave Requests,
                    Top Performer, Upcoming Birthdays, and the second
                    Department Distribution card go here next */}
            </div>
            </div>
        </>
      )}
    </div>
  );
};

export default StaffManagement;