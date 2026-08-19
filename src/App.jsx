import { useState } from "react";
import AdminSidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { pageDetials } from "./data/PageDetails";
import DashboardOverview from "./pages/DashboardOverview";
import TableManagement from "./pages/TableManagement";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-start">
        <div className="sticky top-0 self-start">
          <AdminSidebar
            user={currentUser}
            activeItem={activeItem}
            onNavigate={setActiveItem}
          />
        </div>

        <main className="min-w-0 flex-1">
          <div className="sticky top-0 z-40">
            <Header user={currentUser} page={pageDetials[activeItem]} />
          </div>

          <div>
            {activeItem === "Dashboard" && <DashboardOverview />}
            {activeItem === "Table Management" && <TableManagement />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
