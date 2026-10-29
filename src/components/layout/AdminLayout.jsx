import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AdminSidebar from "./Sidebar";
import Header from "./Header";
import { pageDetials } from "../../data/PageDetails";
import { adminRoutes } from "../../routes/adminRoutes";

const currentUser = {
  name: "Ashan k.",
  initials: "AK",
  role: "admin",
  roleLabel: "Super Admin",
};

export default function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Work out which sidebar item is active from the current URL
  const activeItem =
    Object.keys(adminRoutes).find((label) => adminRoutes[label] === pathname) ??
    "Dashboard";

  // Sidebar still calls onNavigate(label); we translate that into a URL change
  const handleNavigate = (label) => {
    const path = adminRoutes[label];
    if (path) navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#0F1923]">
      <div className="flex items-start">
        <div className="sticky top-0 self-start">
          <AdminSidebar
            user={currentUser}
            activeItem={activeItem}
            onNavigate={handleNavigate}
          />
        </div>
        <main className="min-w-0 flex-1">
          <div className="sticky top-0 z-40">
            <Header user={currentUser} page={pageDetials[activeItem]} />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
