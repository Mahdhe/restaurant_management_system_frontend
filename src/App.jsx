import { useState } from "react";
import AdminSidebar from "./components/layout/AdminSidebar";
import Header from "./components/layout/Header";

const pageDetials = {
  Dashboard: {
    category: "Dashboard",
    title: "Dashboard Overview",
  },
  "Table Management": {
    category: "Operations > Table Management",
    title: "Table Management",
  },
  Reservations: {
    category: "Operations > Reservations",
    title: "Reservations",
  },
  "Oder Management": {
    category: "Operations > Order Management",
    title: "Order Management",
  },
  "Kitchen Display": {
    category: "Operations > Kitchen Display",
    title: "Kitchen Display System",
  },
  "Billing & Payments": {
    category: "Finance > Billing & Payments",
    title: "Billing & Payments",
  },
  "Coupons & Tax": {
    category: "Finance > Coupons & Taxes",
    title: "Coupons & Taxes",
  },
  "Menu Management": {
    category: "Management > Menu Management",
    title: "Menu Management",
  },
  "Inventory & Stock": {
    category: "Management > Inventory & Stock",
    title: "Inventory & Stock",
  },
  "Staff Management": {
    category: "Management > Staff Management",
    title: "Staff Management",
  },
  "Roles & Permissions": {
    category: "Management > Roles & Permissions",
    title: "Roles & Permissions",
  },
  Customers: {
    category: "CRM > Customers Management",
    title: "Customers Management",
  },
  Notifications: {
    category: "CRM > Notifications",
    title: "Notifications",
  },
  "Reports & Analytics": {
    category: "Insights > Reports & Analytics",
    title: "Reports & Analytics",
  },
  "Authentication & Security": {
    category: "Security > Authenticationa & Security",
    title: "Authenticationa & Security",
  },
};

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar
        user={currentUser}
        activeItem={activeItem}
        onNavigate={setActiveItem}
      />

      <main className="h-screen min-w-0 flex-1">
        <Header user={currentUser} page={pageDetials[activeItem]} />
      </main>
    </div>
  );
}

export default App;
