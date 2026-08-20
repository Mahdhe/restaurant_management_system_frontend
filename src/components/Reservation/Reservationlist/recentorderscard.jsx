 function Tableheading({Title}){
    return(
       <span className="w-[172px] min-h-[14px] font-dm font-semibold text-[11px] tracking-[0.08em] leading-none text-[#8A9BB0]">
    {Title}</span>
    );
 }


 function Tabletext({children,className=""}) {
    return(
        <span className={`w-[172px] min-h-[18px] font-dm font-semibold text-[14px] tracking-[0.08em] leading-none text-[#F0F4F8] ${className}`}
        > {children} 
        </span>
    );

 }


 const reservationdata=[
    {
        name:"Fathima S.",
        date:"18 May · 8:30 PM",
        id:"2",
        table:"T04",
        status:"Pending",
        action:"View"

    },
     {
        name:"Ahamed R.",
        date:"18 May · 7:30 PM",
        id:"4",
        table:"Unassigned",
        status:"Approved",
        action:"Assign"

    },
 {
        name:"Nimal P.",
        date:"18 May · 6:45 PM",
        id:"6",
        table:"T01",
        status:"Seated",
        action:"Track"

    },
     {
        name:"Dilan K.",
        date:"18 May · 6:30 PM",
        id:"8",
        table:"-",
        status:"Rejected",
        action:"Review"

    },

 ];

 const statusColors={
    Pending:"border-[#F39C124D] bg-[#F39C121F] text-[#F39C12]",
    Approved:"border-[#27AE604D] bg-[#27AE601F] text-[#27AE60]",
    Seated:"border-[#27AE604D] bg-[#27AE601F] text-[#27AE60]",
    Rejected:"border-[#E74C3C4D] bg-[#E74C3C1F] text-[#E74C3C]",
 };

 function Reservationrow({reservation}) {
    const CurrentstatusColor =
    statusColors[reservation.status] 
 

return(
    <div className="grid grid-cols-6 min-h-[64px] border-b border-[#FFFFFF14] p-[16px]">
        <Tabletext> {reservation.name} </Tabletext>
        <Tabletext> {reservation.date }</Tabletext>
        <Tabletext> {reservation.id} </Tabletext>
        <Tabletext> {reservation.table} </Tabletext>

<div className="flex w-[172px] items-center"> 
    <span className={`inline-flex min-h-[24px] w-fit rounded-[999px] px-[9px] py-[4px] gap-[10px] items-center justify-between ${CurrentstatusColor}`}
        >
             {reservation.status} </span>
</div>
        
<div className="flex w-[172px] items-center"> 
       <span className="text-[#8A9BB0] flex border border-[#FFFFFF14] rounded-[10px] gap-[8px] h-[40px] items-center justify-center px-[16px] py-[8px] "
>
        {reservation.action} </span>
</div>
      
    </div>
);

 }

function Recentorder() {
    return(
        <section className="w-full min-w-0 flex flex-col min-h-[433px] p-[20px] gap-[20px] border border-[#FFFFFF14] rounded-[14px] bg-[#1C2A38] mt-[16px] ">
<div className="min-w-0 flex w-full items-center flex-row  justify-between min-h-[43px] gap-[10px]">
<h2 className="max-w-[967px] min-h-[23px] text-[18px] font-dm font-bold text-[#F0F4F8] tracking-normal leading-none">
    Reservations
</h2>
<span className="min-h-[16px] shrink-0 font-dm font-[400] text-[12px] tracking-normal leading-none text-[#556070]">
    48 Total Record
</span>
</div>

{/* live orders table */}
<div className="w-full min-w-0 min-h-[332px] p-[10px]">

{/* headings */}
<div className="min-h-[46px] grid grid-cols-6 items-center  rounded-[10px] p-[16px] bg-[#243447]">

<Tableheading Title=" GUEST NAME" />
<Tableheading Title="DATE/ TIME" />
<Tableheading Title="GUESTS" />
<Tableheading Title=" TABLE" />
<Tableheading Title=" STATUS" />
<Tableheading Title=" ACTION" />

</div>


{/* contnet */}
{reservationdata.map((reservation)=>(
    <Reservationrow
    key={reservation.id}
    reservation={reservation}
    />
))}
</div>
        </section>
    );
}

export default Recentorder;