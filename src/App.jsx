import { useState } from "react";
import AdminSidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { pageDetials } from "./data/PageDetails";
import KitchenDashboard from "./pages/Kitchen/KitchenDashboard";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const currentUser = {
    name: "Ashan k.",
    initials: "AK",
    role: "admin",
    roleLabel: "Super Admin",
  };

  return (
    <div className="flex min-h-screen font-dmsans">
      <AdminSidebar
        user={currentUser}
        activeItem={activeItem}
        onNavigate={setActiveItem}
      />

      <main className="h-screen min-w-0 flex-1">
        <Header user={currentUser} page={pageDetials[activeItem]} />
        <div>
          <KitchenDashboard />
        </div>
      </main>
    </div>
  );
}

export default App;
