import {Routes,Route, Navigate} from "react-router-dom";

import Reservationdashboard from "../pages/Reservation/Dashboard/Reservationdashboard";
import ReservationList from "../pages/Reservationlist/ReservationList";
import Reservationdetails from "../pages/Details/ReservationDetails";
import Assigntable from "../pages/AssignTable/AssignTable";
import StatusTracking from "../pages/StatusTracking/StatusTracking";



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