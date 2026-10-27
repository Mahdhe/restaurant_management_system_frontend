import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import KitchenDashboard from "./pages/Kitchen/KitchenDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="kitchen-display" element={<KitchenDashboard />} />
      </Route>
    </Routes>
  );
}
export default App;
