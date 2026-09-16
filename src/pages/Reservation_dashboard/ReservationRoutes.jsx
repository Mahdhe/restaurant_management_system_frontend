import {Routes,Route, Navigate} from "react-router-dom";

import Reservationdashboard from "./ReservationPages/Reservationdashboard";
import ReservationList from "./ReservationPages/ReservationList";
import Reservationdetails from "./ReservationPages/ReservationDetails";
import Assigntable from "./ReservationPages/AssignTable";
import StatusTracking from "./ReservationPages/StatusTracking";



function ReservationRoutes(){
    return(
        <Routes> 
    
    <Route
    path="/"
    element={<Navigate to="/dashboard" replace />}
    /> 
        <Route
        path="/dashboard"
        element={<Reservationdashboard />}
        />

        <Route
        path="/reservations/list"
        element={<ReservationList />}
        />
       

        <Route
        path="/reservations/details"
        element={<Reservationdetails />}
        />
        
        
        <Route
        path="/reservations/assign-table"
        element={<Assigntable />}
        />

       <Route
        path="/reservations/status-tracking"
        element={<StatusTracking />}
        />

        </Routes>

    );

}

 export default ReservationRoutes;