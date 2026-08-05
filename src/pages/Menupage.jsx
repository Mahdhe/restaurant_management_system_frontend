import React from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Herosection from "../components/menu/Herosection";
// import  Titlesection from "../components/menu/Titlesection";
// import Starters from "../components/menu/Starters";
// import Mains from "../components/menu/Mains";
// import Desserts from "../components/menu/Desserts";
// import Drinks from "../components/menu/Drinks";

function Menu(){
    return(
        <>
        <Navbar />

        <Herosection />

        {/* <Titlesection />

        <Starters />

        <Mains />

        <Desserts />

        <Drinks /> */}

        <Footer />

        </>
    );
}
export default Menu;