import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";

import Order_ManagementMain from "./pages/order_Management/Order_ManagementMain";
import Menu_ManagementMain from "./pages/menu_Management/Menu_ManagementMain";
import CRM_Main from "./pages/crm/CRM_Main";
import CRM_Notifications_Main from "./pages/crmNotifications/CRM_Notifications_Main";

function App() {
  return (

    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="order-management/*" element={<Order_ManagementMain/>} />
        <Route path="menu-management/*" element={<Menu_ManagementMain/>} />
        <Route path="customers/*" element={<CRM_Main/>} />
        <Route path="notifications/*" element={<CRM_Notifications_Main/>} />
      </Route>
    </Routes>
  );
}
export default App;