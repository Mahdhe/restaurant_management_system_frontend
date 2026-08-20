
import Title from "../../../components/Reservation/Common/title";
import ButtonsRow from "../../../components/Reservation/Common/buttonrow";
import Kpirow from "../../../components/Reservation/Dashboard/kpirow";
import Alertbanner from "../../../components/Reservation/Dashboard/alertbanner";
import Statistics from "../../../components/Reservation/Dashboard/statistics";


function Reservationdashboard(){
    return(
   <div className="w-full min-w-0 bg-[#0F1923]  p-6">  

    <Title/>
    <ButtonsRow />
    <Kpirow />
    <Alertbanner />
    <Statistics />
</div>

    );
}

export default Reservationdashboard;