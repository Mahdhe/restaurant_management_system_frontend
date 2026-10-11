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
import Order_ManagementMain from "./pages/order_Management/Order_ManagementMain";
import CategoryManagement from "./pages/menu_Management/menu_ManagementPages/CategoryManagement";
import LastPage from "./pages/menu_Management/menu_ManagementPages/LastPage";
import Menu_ManagementMain from "./pages/menu_Management/Menu_ManagementMain";
import CRM_Main from "./pages/crm/CRM_Main";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  
  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="min-h-screen bg-[#0F1923]">
      <div className="flex items-start">
        <div className="sticky top-0 self-start">
          <AdminSidebar
            user={currentUser}
            activeItem={activeItem}
            onNavigate={setActiveItem}
          />
        </div>

        {/* <main className="min-w-0 flex-1">
          <div className="sticky top-0 z-40">
            <Header user={currentUser} page={pageDetials[activeItem]} />
          </div>

          <div>
            {activeItem === "Order Management" && <Order_ManagementMain/>}
            {activeItem === "Menu Management" && <Menu_ManagementMain/>}
            {activeItem === "Customers " && <CRM_Main></CRM_Main>}
          </div>
        </main> */}

        <CRM_Main></CRM_Main>

      </div>
    </div>
  );
}

export default App;