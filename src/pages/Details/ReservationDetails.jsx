
import ButtonsRow from "../../components/Reservation/Common/buttonrow";
import Tabledetails from "../../components/Reservation/Reservationdetails/tabledetails";
import Pendingapprovals from "../../components/Reservation/Reservationdetails/pendingapprovals";
import Guestinformation from "../../components/Reservation/Reservationdetails/guestinformation";
import Guestnote from "../../components/Reservation/Reservationdetails/guestnotes";
import Heading from "../../components/Reservation/Reservationdetails/title";

function ReservationDetails(){
    return(

        <div className="w-full min-w-0 bg-[#0F1923]  p-6">  
          <Heading />
        <ButtonsRow />

{/*         
        <Tabledetails />
        <Pendingapprovals /> */}
<section className="grid w-full min-w-0 grid-cols-1 gap-[24px] lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
  
  {/* Left column */}
  <div className="flex w-full  min-w-0 flex-col gap-[16px]">
  
    <Tabledetails />
    <Guestinformation />
    <Guestnote />
  </div>

  {/* Right column */}
  <div className="flex w-full min-w-0 flex-col gap-[16px]">
    <Pendingapprovals />
  </div>

</section>
    </div>
    );
}

export default ReservationDetails;