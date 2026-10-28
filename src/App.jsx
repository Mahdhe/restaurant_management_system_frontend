import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";

import Order_ManagementMain from "./pages/order_Management/Order_ManagementMain";
import Menu_ManagementMain from "./pages/menu_Management/Menu_ManagementMain";
import CRM_Main from "./pages/crm/CRM_Main";
import CRM_Notifications_Main from "./pages/crmNotifications/CRM_Notifications_Main";

// function App() {
//   const [activeItem, setActiveItem] = useState("Dashboard");

//   const currentUser = {
//     name: "Ashan k.",
//     initials: "AK",
//     role: "admin",
//     roleLabel: "Super Admin",
//   };

//   return (
//     <div className="min-h-screen bg-[#0F1923]">
//       <div className="flex items-start">
//         <div className="sticky top-0 self-start">
//           <AdminSidebar
//             user={currentUser}
//             activeItem={activeItem}
//             onNavigate={setActiveItem}
//           />
//         </div>

//         <main className="min-w-0 flex-1">
//           <div className="sticky top-0 z-40">
//             <Header user={currentUser} page={pageDetials[activeItem]} />
//           </div>

//           <div>
//             {activeItem === "Oder Management" && <Order_ManagementMain/>}
//             {activeItem === "Menu Management" && <Menu_ManagementMain/>}
//             {activeItem === "Customers" && <CRM_Main></CRM_Main>}
//             {activeItem === "Notifications" && <CRM_Notifications_Main></CRM_Notifications_Main>}
//           </div>
//         </main>



//       </div>
//     </div>
//   );
// }

// export default App;




function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route index element={<DashboardOverview />} /> */}
        <Route path="order-management" element={<Order_ManagementMain></Order_ManagementMain>} />
        <Route path="menu-management" element={<Menu_ManagementMain></Menu_ManagementMain>} />
        <Route path="customers" element={<CRM_Main></CRM_Main>} />
        <Route path="notifications" element={<CRM_Notifications_Main></CRM_Notifications_Main>} />
      </Route>
    </Routes>
  );
}
export default App;