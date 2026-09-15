import Button from "../../components/Reservation/Assigntable/title";
import ButtonsRow from "../../components/Reservation/Common/buttonrow";
import Mappicker from "../../components/Reservation/Assigntable/mappicker";
import Reservationsummary from "../../components/Reservation/Assigntable/reservationsummary";
import Confirm from "../../components/Reservation/Assigntable/confirm";



function Assigntable(){
    return(
   <div className="w-full min-w-0 min-h-[1158px] bg-[#0F1923]  p-6">
   <Button/>
   <ButtonsRow />


<section className="mt-[16px] mx-auto grid grid-cols-1 gap-[16px] lg:grid-cols-[minmax(0,770px)_minmax(0,450px)] lg:items-start">
    
    <div className="flex w-full min-w-0 flex-col">
  <Mappicker/>
      </div>

 <div className="flex w-full min-w-0 flex-col">
 <Reservationsummary />
 <Confirm />
      </div>


</section>

   </div>
    );
}
   export default Assigntable;