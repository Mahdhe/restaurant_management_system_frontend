import Buttons from "../../../components/Reservation/Statustracking/buttons";
import ButtonsRow from "../../../components/Reservation/Common/buttonrow";
import Kpirow from "../../../components/Reservation/Statustracking/kpirow";
import TableGrid from "../../../components/Reservation/Statustracking/tablegrid";


function StatusTracking(){
    
    return(
    <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
   
  <Buttons />
   <ButtonsRow />
   <Kpirow />
   <TableGrid />
   
  </div>
   );
}

export default StatusTracking;