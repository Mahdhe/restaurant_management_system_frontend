import React from "react";
import Titlesection from "../components/Reservation/Title";
import ButtonsRow from "../components/Reservation/buttonsrow";
import Kpirow from "../components/Reservation/kpirow";
import Alertbanner from "../components/Reservation/alertbanner";
import Statistics from "../components/Reservation/statistics";


function Reservationdashboard(){
    return(
   <div className="w-full min-w-0 bg-[#0F1923] gap-[16px] p-6">  

    <Titlesection />
    <ButtonsRow />
    <Kpirow />
    <Alertbanner />
    <Statistics />
</div>

    );
}

export default Reservationdashboard;