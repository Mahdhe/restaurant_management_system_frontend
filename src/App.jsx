import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
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
import DashboardOverview from "./pages/DashboardOverview";
import TableManagement from "./pages/TableManagement";
import BillingAndPayments from "./pages/BillingAndPayments";
import StaffManagement from "./pages/StaffManagement";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<Reservation></Reservation>} />
        <Route path="/gallery" element={<Gallery></Gallery>} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/track-order" element={<Trackorder />} />
      </Routes>
      <Footer />
    </>


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
