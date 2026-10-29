import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import OrderConfirmation from "./pages/Orderconfirmationpage";
import Aboutus from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MenuPage from "./pages/Menupage";
import Reservation from "./pages/Reservation";
import Gallery from "./pages/Gallery";
import OrderOnline from "./pages/OrderOnline";
import Trackorder from "./pages/Trackorder";


import AdminLayout from "./components/layout/AdminLayout";
import PublicLayout from "./components/layout/PublicLayout";
import DashboardOverview from "./pages/DashboardOverview";
import TableManagement from "./pages/TableManagement";
import BillingAndPayments from "./pages/BillingAndPayments";
import StaffManagement from "./pages/StaffManagement";
import AnalyticsDashboard from "./pages/Insights/AnalyticsDashboard";
import InventoryDashboard from "./pages/Inventory/InventoryDashboard";
import KitchenDashboard from "./pages/Kitchen/KitchenDashboard";
import ReservationDashboard from "./pages/Reservation_dashboard/ReservationMain";
import CouponDashboard from "./pages/Coupon/CouponMain";
import RolesAndPermissions from "./pages/RolesManagment/roleandpermission";
import Authenticationandsecurity from "./pages/Authentication/authentication";
import Order_ManagementMain from "./pages/order_Management/Order_ManagementMain";
import Menu_ManagementMain from "./pages/menu_Management/Menu_ManagementMain";
import CRM_Main from "./pages/crm/CRM_Main";
import CRM_Notifications_Main from "./pages/crmNotifications/CRM_Notifications_Main";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservation></Reservation>} />
        <Route path="/gallery" element={<Gallery></Gallery>} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/track-order" element={<Trackorder />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardOverview />} />
        <Route path="table-management" element={<TableManagement />} />
        <Route path="billing-payments" element={<BillingAndPayments />} />
        <Route path="staff-management" element={<StaffManagement />} />
        <Route path="reports-analytics" element={<AnalyticsDashboard />} />
        <Route path="inventory-stock" element={<InventoryDashboard />} />
        <Route path="kitchen-display" element={<KitchenDashboard />} />
        <Route path="reservations" element={<ReservationDashboard />} />
        <Route path="coupons-tax" element={<CouponDashboard />} />
        <Route path="roles-permissions" element={<RolesAndPermissions />} />
        <Route path="authentication-security" element={<Authenticationandsecurity />} />
        <Route path="order-management" element={<Order_ManagementMain></Order_ManagementMain>} />
        <Route path="menu-management" element={<Menu_ManagementMain></Menu_ManagementMain>} />
        <Route path="customers" element={<CRM_Main></CRM_Main>} />
        <Route path="notifications" element={<CRM_Notifications_Main></CRM_Notifications_Main>} />
      </Route>
    </Routes>
  );
}
export default App;
