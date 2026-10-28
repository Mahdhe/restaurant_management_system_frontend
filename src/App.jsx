import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardOverview from "./pages/DashboardOverview";
import TableManagement from "./pages/TableManagement";
import BillingAndPayments from "./pages/BillingAndPayments";
import StaffManagement from "./pages/StaffManagement";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="table-management" element={<TableManagement />} />
        <Route path="billing-payments" element={<BillingAndPayments />} />
        <Route path="staff-management" element={<StaffManagement />} />
      </Route>
    </Routes>
  );
}

export default App;