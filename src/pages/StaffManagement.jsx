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
import SearchInput from "../components/dashboard/ui/SearchInput";
import FilterChips from "../components/dashboard/ui/FilterChips";
import EmployeeDirectoryTable from "../components/staffmanagement/EmployeeDirectoryTable";
import StaffSummaryCard from "../components/staffmanagement/StaffSummaryCard";
import DepartmentDistributionByHeadcount from "../components/staffmanagement/DepartmentDistributionByHeadcount";
import AddEditStaffForm from "../components/staffmanagement/AddEditStaffForm";
import EmployeePreviewCard from "../components/staffmanagement/EmployeePreviewCard";
import AttendanceSnapshotCard from "../components/staffmanagement/AttendanceSnapshotCard";
import EmploymentSummaryCard from "../components/staffmanagement/EmploymentSummaryCard";
import WeeklyShiftScheduleCard from "../components/staffmanagement/WeeklyShiftScheduleCard";
import CoverageCard from "../components/staffmanagement/CoverageCard";
import StatCard from "../components/dashboard/ui/StatCard";   
import TodaysAttendanceLogCard from "../components/staffmanagement/TodaysAttendanceLogCard";
import LeaveRequestsCard from "../components/staffmanagement/LeaveRequestsCard";
import AttendanceSummaryCard from "../components/staffmanagement/AttendanceSummaryCard";
import LeaveStatisticsCard from "../components/staffmanagement/LeaveStatisticsCard";
import MonthlyRateCard from "../components/staffmanagement/MonthlyRateCard";


const StaffManagement = () => {
  const [activeTab, setActiveTab] = useState("Staff Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Staff");
  const SHIFT_STATS = [
  { id: 1, label: "Morning Shift", value: "18", trend: "06 – 14:00", trendColor: "text-gray-400" },
  { id: 2, label: "Evening Shift", value: "12", trend: "14:00 – 22:00", trendColor: "text-gray-400" },
  { id: 3, label: "Night Shift", value: "5", trend: "22:00 – 06:00", trendColor: "text-gray-400" },
  { id: 4, label: "Off Duty", value: "8", trend: "Rest day", trendColor: "text-gray-400" },
  ];
  const ATTENDANCE_STATS = [
  { id: 1, label: "Clocked In", value: "42", trend: "On time", trendColor: "text-emerald-400" },
  { id: 2, label: "On Break", value: "5", trend: "Currently resting", trendColor: "text-gray-400" },
  { id: 3, label: "Late Today", value: "3", trend: "Needs review", trendColor: "text-amber-400" },
  { id: 4, label: "Clocked Out", value: "8", trend: "Shift ended", trendColor: "text-gray-400" },
];

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
      
      {activeTab === "Staff Directory" && (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <SearchInput placeholder="Search staff name, role, email..." value={searchQuery} onChange={setSearchQuery} />
            <FilterChips
              filters={["All Staff", "Kitchen", "Service", "Cashiers", "Managers", "Inactive", "On Leave"]}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[2.4fr_1fr] gap-6">
            <div>
              <EmployeeDirectoryTable />
            </div>
            <div className="space-y-6">
              <StaffSummaryCard />
              <DepartmentDistributionByHeadcount />
            </div>
          </div>
        </>
      )}

      {activeTab === "Add/ Edit Staff" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AddEditStaffForm
              onSave={(data) => console.log("Save employee:", data)}
              onCancel={() => console.log("Cancelled")}
            />
          </div>
          <div className="space-y-6">
            <EmployeePreviewCard />
            <AttendanceSnapshotCard />
            <EmploymentSummaryCard />
          </div>
        </div>
      )}

      {activeTab === "Shift Scheduling" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {SHIFT_STATS.map((item) => <StatCard key={item.id} {...item} />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <WeeklyShiftScheduleCard />
            </div>
            <div className="space-y-6">
              <ActionsPanel
                title="Shift Controls"
                actions={[
                  { label: "+ Assign Shift", variant: "filled" },
                  { label: "Bulk Schedule", variant: "outline" },
                  { label: "Generate Roster", variant: "outline" },
                ]}
              />
              <CoverageCard />
            </div>
          </div>
        </>
      )}

      {activeTab === "Attendance & Leave" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {ATTENDANCE_STATS.map((item) => <StatCard key={item.id} {...item} />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TodaysAttendanceLogCard />
              <LeaveRequestsCard onApprove={console.log} onReject={console.log} onView={console.log} />
            </div>
            <div className="space-y-6">
              <AttendanceSummaryCard />
              <LeaveStatisticsCard />
              <MonthlyRateCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffManagement;