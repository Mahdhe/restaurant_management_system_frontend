import { useState } from "react";
import AdminSidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { pageDetials } from "./data/PageDetails";

import ReservationRoutes from "./pages/Reservation_dashboard/ReservationRoutes";


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

        <main className="sticky top-0 min-w-0 flex-1">
          <Header user={currentUser} page={pageDetials[activeItem]} />
<div className="min-h-screen bg-[#0f1923] font-dmsans">
            {activeItem === "Reservations" && <ReservationRoutes />}
          <ReservationRoutes/>
          
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
