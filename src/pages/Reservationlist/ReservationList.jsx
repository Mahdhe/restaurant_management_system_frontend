

import Title from "../../components/Reservation/Common/title";
import ButtonsRow from "../../components/Reservation/Common/buttonrow";
import Filtercard from "../../components/Reservation/Reservationlist/filtercard";
import Recentorder from "../../components/Reservation/Reservationlist/recentorderscard";


function ReservationList(){
    return(
   <div className="w-full min-w-0 h-[1158px] bg-[#0F1923]  p-6">  
   
  <Title />
  <ButtonsRow />
  <Filtercard />
  <Recentorder />

</div>
    );
}

export default ReservationList;

