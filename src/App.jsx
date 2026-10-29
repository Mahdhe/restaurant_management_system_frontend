import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import ReservationDashboard from "./pages/Reservation_dashboard/ReservationMain";
import CouponDashboard from "./pages/Coupon/CouponMain";
import RolesAndPermissions from "./pages/RolesManagment/roleandpermission";
import Authenticationandsecurity from "./pages/Authentication/authentication";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="reservations" element={<ReservationDashboard />} />
        <Route path="coupons-tax" element={<CouponDashboard />} />
        <Route path="roles-permissions" element={<RolesAndPermissions />} />
        <Route path="authentication-security" element={<Authenticationandsecurity />} />
      </Route>
    </Routes>
  );
}
export default App;
