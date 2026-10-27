import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import AnalyticsDashboard from "./pages/Insights/AnalyticsDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="reports-analytics" element={<AnalyticsDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
