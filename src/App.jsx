import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import InventoryDashboard from "./pages/Inventory/InventoryDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="inventory-stock" element={<InventoryDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
