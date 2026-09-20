import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { pageDetials } from "./data/PageDetails";


import MenuBrowse from "./pages/order_Management/order_ManagementPages/MenuBrowse";
import OrderBuild from "./pages/order_Management/order_ManagementPages/OrderBuild";
import OrderSummary from "./pages/order_Management/order_ManagementPages/OrderSummary";
import OrderHistory from "./pages/order_Management/order_ManagementPages/OrderHistory";
import OrderDetail from "./pages/order_Management/order_ManagementPages/OrderDetail";
import MenuItemsList from "./pages/menu_Management/menu_ManagementPages/MenuItemsList";
import AddEditItems from "./pages/menu_Management/menu_ManagementPages/AddEditItems";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="h-[1218px] bg-[#0F1923] font-dmsans">
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

          {/* <MenuBrowse></MenuBrowse> */}
          {/* <OrderBuild></OrderBuild> */}
          {/* <OrderSummary></OrderSummary> */}
          {/* <OrderHistory></OrderHistory> */}
          {/* <OrderDetail></OrderDetail> */}

          {/* <MenuItemsList></MenuItemsList> */}
          <AddEditItems></AddEditItems>
          

      

          
        </main>
      </div>
    </div>
  );
}

export default App;