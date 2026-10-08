import { Routes, Route, Navigate } from "react-router-dom";

import RoleManagement1 from "./Rolesandmanagment_pages/roleandmanagement1";
import RoleManagement2 from "./Rolesandmanagment_pages/rolemanagment2";

function RoleManagementRoutes() {
  return (
    <Routes> 
      
       <Route
        path="/"
        element={<Navigate to="/roles/management1" replace />}
      />
      <Route
        path="/roles/management1"
        element={<RoleManagement1 />}
      />

      <Route
        path="/roles/management2"
        element={<RoleManagement2 />}
      />

    
    </Routes>
  );
}

export default RoleManagementRoutes;