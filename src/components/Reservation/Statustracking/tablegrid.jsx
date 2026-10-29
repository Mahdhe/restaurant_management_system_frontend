import Commonbutton from "../Common/button";


function Summaryrow({label , value , valuecolor="text-[#8A9BB0]"}) {
    return(
        <div className="flex min-h-[36px] w-full items-center justify-between gap-[10px] border-b border-[#FFFFFF14] py-[10px]">

            <span className="font-dm  w-full  text-[13px] font-normal leading-none tracking-normal text-[#8A9BB0] ">
                {label}
            </span>

            <span className={`text-right  w-fit inline-flex font-dm text-[13px] font-semibold leading-none tracking-normal px-[9px] break-words ${valuecolor}`}>
                {value}
            </span>
        </div>
    );
}






function Timeline({time,title,description}) {
    return (
       <div className="flex min-w-0 w-full gap-[10px] rounded-[14px] border border-[#FFFFFF14] p-[12px] mt-[16px] lg:h-[86px] bg-[#243447]">

    {/* left */}
    <div className="flex  w-[66px] shrink-0 items-center justify-center gap-[10px] pt-[12px] pb-[29px]">
        <span className="font-dm leading-[17px] text-[13px] font-semibold  text-[#FFFFFF]">
{time}
</span>
        </div>

{/* right */}
    <div className="flex flex-1 flex-col gap-[4px] p-[12px]">
<span className="font-dm  text-[14px] font-semibold leading-none text-[#F0F4F8]">
{title}
</span>

<span className="font-dm text-[12px] font-[400px] leading-none text-[#8A9BB0]">
{description}
</span>
</div>

</div>
    );
}



function TableGrid(){
    return (
    <section className="grid  grid-cols-1 gap-[16px] lg:grid-cols-[737px_475px] w-full min-w-0 mt-[16px] ">

<div className="min-w-0 w-full min-h-[743px] border border-[#FFFFFF14] bg-[#1C2A38] rounded-[14px] p-[20px]">

    <div className="flex items-center justify-between min-w-0">
<h2 className="font-dm font-bold text-[#F0F4F8] text-[18px] leading-none tracking-normal">Reservation Timeline</h2>

<span className="flex font-dm font-semibold text-[11px] leading-[18px] tracking-[0.08em] h-[24px] px-[9px] w-fit items-center rounded-full border border-[#27AE604D] bg-[#27AE601F] text-[#27AE60] gap-[10px]">  Approved </span>

</div>

<Timeline
time="5.10 PM" title="Reservation Request Received" description="Guest submitted booking for 4 guests at 8:30 PM." />

<Timeline
time="5.18 PM" title="Reservation Request Received" description="Reservation approved and confirmation sent to guest." />

<Timeline
time="5.21 PM" title="Approved by Admin " description="Table T04 assigned from Section B." />

<Timeline
time="8.30 PM" title="Awaiting Guest Arrival" description="Next step: mark seated when guest arrives." />


</div>



{/* Right side */}
<div className="flex flex-col min-w-0 min-h-[743px] gap-[16px]">

 <div className="min-w-0 min-h-[294px] border border-[#FFFFFF14] bg-[#1C2A38] rounded-[14px]">
  <div className="flex items-center justify-between min-w-0 p-[20px]">
<h2 className="font-dm font-bold text-[#F0F4F8] text-[18px] leading-none tracking-normal">Current Status</h2>

<span className="flex font-dm font-semibold text-[11px] leading-[18px] tracking-[0.08em] h-[24px] px-[9px] py-[4px] w-fit items-center rounded-full border border-[#2980B94D] bg-[#2980B91F] text-[#2980B9] gap-[10px]">  Assigned </span>

</div>


{/* summary rows */}
<div className="flex flex-col w-full min-h-[152px] mt-[16px] py-[10px] p-[20px] gap-[12px]">
<Summaryrow label="Guest" value="Fathima S."  />
<Summaryrow label="Table" value=" T04"  />
<Summaryrow label="Time" value="8.30 PM" />

<div className="flex w-full justify-center mt-[2px]">
<Commonbutton className="w-full bg-[#E67E22] text-[#F0F4F8] ">
    Mark as Seated
</Commonbutton>
</div>
</div>
</div>


<div className="min-w-0 min-h-[230px] border border-[#FFFFFF14] bg-[#1C2A38] rounded-[14px] p-[20px]">
<div className="h-[38px]  gap-[10px] w-full">
    <h2 className="font-dm font-bold text-[#FFFFFF] text-[18px] leading-[18px] tracking-normal"> Next Actions </h2>
</div>

<div className="flex flex-col w-full min-h-[136px] gap-[8px]">
    <Commonbutton className="w-full bg-[#243447] border border-[#FFFFFF24] text-[#F0F4F8]">
      Call Guest
    </Commonbutton>

    <Commonbutton className="w-full bg-[#243447] border border-[#FFFFFF24] text-[#F0F4F8]">
     Change Table
    </Commonbutton>

    <Commonbutton className="w-full bg-[#E74C3C1F] border border-[#FFFFFF24] text-[#E74C3C]">
         Cancel Reservation
         </Commonbutton>

</div>
</div>
    </div>
    </section>


);

}

export default TableGrid;