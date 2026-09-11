import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { pageDetials } from "./data/PageDetails";

import OrderManagementMenuBrowse from "./pages/OrderManagementMenuBrowse";
import OrderManagementOrderBuild from "./pages/OrderManagementOrderBuild";
import OrderManagementOrderSummary from "./pages/OrderManagementOrderSummary";
import OrderManagementOrderHistory from "./pages/OrderManagementOrderHistory";
import OrderManagementOrderDetail from "./pages/OrderManagementOrderDetail";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="min-h-screen font-dmsans">
      <div className="flex items-start">
        <div className="sticky top-0 self-start">
          <AdminSidebar
            user={currentUser}
            activeItem={activeItem}
            onNavigate={setActiveItem}
          />
        </div>

        <main className="min-w-0 flex-1">
          <Header user={currentUser} page={pageDetials[activeItem]} />

          <Routes>
            <Route path="/" element={<Navigate to="/order-management/menu-browse" replace />} />
            <Route path="/order-management/menu-browse" element={<OrderManagementMenuBrowse />} />
            <Route path="/order-management/order-build" element={<OrderManagementOrderBuild />} />
            <Route path="/order-management/order-summary" element={<OrderManagementOrderSummary />} />
            <Route path="/order-management/order-history" element={<OrderManagementOrderHistory />} />
            <Route path="/order-management/order-detail" element={<OrderManagementOrderDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;