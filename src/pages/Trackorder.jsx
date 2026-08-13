import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Mainsection from "../components/track-order/Mainsection";
import Trackorder from "../components/track-order/Trackorder";
import Orderdetails from "../components/track-order/Order-details";

function Menu(){
    return(
        <>
        <Navbar />
        <Mainsection />
        <Trackorder />
        <Orderdetails />
        <Footer />
        </>
    );

}
export default Menu;