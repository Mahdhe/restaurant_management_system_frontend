import {Routes,Route, Navigate} from "react-router-dom";

import Reservationdashboard from "../pages/Reservation/Dashboard/Reservationdashboard";
import ReservationList from "../pages/Reservationlist/ReservationList";



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
        </Routes>
    );

}

 export default ReservationRoutes;