import {Routes,Route, Navigate} from "react-router-dom";


import CouponManagement from "./CouponPages/Coupon_Management";
import Tax from "./CouponPages/TaxConfiguration";

function CouponRoutes(){
    return(
        <Routes> 
    
    <Route
    path="/"
    element={<Navigate to="/coupon/management" replace />}
    /> 
        <Route
        path="/coupon/management"
        element={<CouponManagement />}
        />

        <Route
        path="/coupon/tax"
        element={<Tax />}
        />

    </Routes>
    );
}

export default CouponRoutes;