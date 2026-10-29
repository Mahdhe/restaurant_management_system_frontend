 function Tableheading({Title}){
    return(
       <span className="min-w-0 min-h-[14px] font-dm font-semibold text-[11px] tracking-[0.08em] leading-none text-[#8A9BB0]">
    {Title}</span>
    );
 }


 function Tabletext({children,className=""}) {
    return(
        <span className={`min-w-0 min-h-[18px] whitespace-normal break-words font-dm font-semibold text-[14px] tracking-[0.08em] leading-none text-[#F0F4F8] ${className}`}
        > {children} 
        </span>
    );

 }


 const reservationdata=[
    {
        code:"FAMILY500",
        type:"Fixed",
         value:"LKR 500",
        min_order:"LKR 5,000",
        valid_until:"30 Jun",
        usage:"126 uses",
         status:"Active",
        action:"Edit"

    },
     {
        
        code:"LUNCH20",
        type:"Percentage",
         value:"20%",
        min_order:"LKR 2,000",
        valid_until:"15 Jul",
        usage:"89 uses",
         status:"Active",
        action:"Edit"
    },
 {
       
        code:"DESSERTFREE",
        type:"Free item",
         value:"Dessert",
        min_order:"6 Guests",
        valid_until:"25 Jun",
        usage:"42 uses",
         status:"Scheduled",
        action:"Edit"

    },
     {
       
        code:"FAMILY500",
        type:"Percentage",
         value:"10%",
        min_order:"Online order",
        valid_until:"Expired",
        usage:"210 uses",
         status:"Expired",
        action:"View"

    },

 ];

 const statusColors={
    Scheduled:"border-[#F39C124D] bg-[#F39C121F] text-[#F39C12]",
    Active:"border-[#27AE604D] bg-[#27AE601F] text-[#27AE60]",
    Expired:"border-[#E74C3C4D] bg-[#E74C3C1F] text-[#E74C3C]",
 };

 function Reservationrow({reservation}) {
    const CurrentstatusColor =
    statusColors[reservation.status] 
 

return(
    <div className="grid grid-cols-8 w-full min-w-[730px] pl-[14px]  min-h-[80px] border-b border-[#FFFFFF14] items-center">
        <Tabletext> {reservation.code} </Tabletext>
        <Tabletext> {reservation.type }</Tabletext>
        <Tabletext> {reservation.value} </Tabletext>
        <Tabletext> {reservation.min_order} </Tabletext>
          <Tabletext> {reservation.valid_until} </Tabletext>
            <Tabletext> {reservation.usage} </Tabletext>


<div className="min-w-0 px-[8px] flex items-center pl-[2px]"> 
    <span className={`inline-flex h-[24px] w-fit rounded-[999px] px-[9px]  gap-[10px] items-center  justify-between ${CurrentstatusColor}`}
        >
             {reservation.status} </span>

        
</div>


<div className="min-w-0 px-[8px] flex items-center">
       <span className="text-[#8A9BB0] h-[40px] flex border border-[#FFFFFF14] rounded-[10px] gap-[6px]  items-center justify-center px-[16px]"
>
        {reservation.action} </span>

</div>
      
    </div>
);

 }

function CouponList() {
    return(
        <section className="w-full min-w-0 flex flex-col gap-[20px] ">


<div className="w-full min-w-0 overflow-x-auto">
<div className="min-w-[730px]"> 
<div className="h-[46px] w-full min-w-0 grid grid-cols-8 items-center pl-4  bg-[#243447] overflow-x-auto">

<Tableheading Title=" CODE" />
<Tableheading Title="TYPE" />
<Tableheading Title="VALUE" />
<Tableheading Title="MIN ORDER" />
<Tableheading Title="VALID UNTIL" />
<Tableheading Title="USAGE" />
<Tableheading Title=" STATUS" />
<Tableheading Title=" ACTIONS" />

</div>



{/* contnet */}
{reservationdata.map((reservation)=>(
    <Reservationrow
    key={reservation.id}
    reservation={reservation}
    />
))}

 </div>
  </div>
        </section>
    );
}

export default CouponList;