import React from "react";
import {Check} from "lucide-react";

function OrderSetp({ title,description,time}){
    return(
        <div  className="
        flex min-h-[45px] items-center w-full justify-between gap-4">
            <div className="min-w-0 flex-1">
            <h3 className="w-full min-h-[25px] font-dm font-[600] text-[18px] leading-[25px] tracking-normal text-[#FFFFFF]">
               {title}
                </h3>    
           
            <p className="w-full min-h-[20px] font-dm font-[400] text-[12px] leading-[20px] tracking-normal text-[#8A9BB0]">
           {description}
            </p>
        </div>
<span className="
lg:-mr-[70px] font-dm font-[400] text-[12px] leading-[20px] tracking-normal text-[#8A9BB0]">
    {time}
</span>

     </div>
    );
}


function Detailsrow({label,price,quantity,isTotal=false}){
    return(
        <div className="flex min-h-[36px] w-full justify-between gap-[10px] border-b border-[#FFFFFF14] py-[10px] last:border-b-0">
        
        <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
        <span className="font-dm text-[13px] font-normal leading-none tracking-normal text-[#F0F4F8] whitespace-nowrap">
            {label}
        </span>
  <span className="shrink-0 font-dm text-[13px] text-[#8A9BB0]">
    {quantity}
  </span>
  </div>
   <span className={`ml-auto shrink-0 font-playfair text-[12px] font-semibold leading-none tracking-normal text-[#E67E22] whitespace-nowrap
   ${isTotal ? "text-[14px]" : "text-[12px]"}`}
   >
    {price}
   </span>
   </div>
   
    );
}


function Orderdetails(){
    return(
   
   <section className="w-full min-h-[610px] px-6 md:px-10 lg:px-[120px] py-10 flex flex-col gap-[48px] opacity-100 md:py-12 lg:py-[72px] bg-[#1A2535] lg:flex-row ">

{/* left side */}
<div className="flex w-full min-h-[466px] flex-col gap-4 mx-auto lg:gap-5">
<div className="flex mx-auto w-full min-h-[59px] flex-col gap-4">
    <div className="flex w-full mx-auto min-h-[18px] flex-col gap-4">
<h2 className="ml-10 w-full  min-h-[18px] font-dm font-[800] text-[18px] sm:text-[20px] lg:text-[22px] leading-[18px] tracking-[0.04em] text-[#E67E22]">
              ORDER VRS-10234
</h2>

<div className="flex w-full  min-h-[25px] gap-[10px] justify-between">
    <h2 className="w-full min-w-0  min-h-[25px] font-playfair font-[600] text-[18px] sm:text-[20px] lg:text-[22px] leading-[25px] tracking-[0.08em] text-[#F0F4F8]">
        On its way to you.
    </h2>

<button type="button" 
className="flex min-h-[24px]  w-full max-w-[119px] items-center justify-center gap-[10px] rounded-full border border-[#27AE604D] bg-[#27AE601F] px-[9px] py-1 font-dm text-[11px] font-semibold leading-[18px] text-[#27AE60] whitespace-nowrap">
OUT FOR DELIVERY
</button>
</div>
</div>
</div>

{/* tracking step */}
<div className="flex w-full max-w-[720px] min-h-[387px]">
    
    {/* vertical */}
<div className="w-full max-w-[92px] min-h-[385px] px-[26px] py-[24px] gap-[10px]">
   
   {/* vertical pill */}
    <div className="relative flex flex-col justify-between overflow-visible h-[337px] w-[40px] rounded-full sm:h-[280px] sm:w-9 lg:h-[337px] lg:w-10">
        
        <div className="absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-[#556070]"/>
        {/* green circle 1*/}
        <div className="relative z-10 flex shrink-0  flex-col h-10 w-10 items-center justify-center rounded-full bg-[#27AE60]">
         
    <Check 
    className="h-[14px] w-[18px]  text-white"
  strokeWidth={2}
/>
</div>

 {/* green circle 2*/}
        <div className="relative z-10 flex shrink-0  flex-col h-10 w-10 items-center justify-center rounded-full bg-[#27AE60]">
         
    <Check 
    className="h-[14px] w-[18px]  text-white"
  strokeWidth={2}
/>
</div>

 {/* orange circle - 3*/}
        <div className="relative z-10 flex shrink-0  flex-col h-10 w-10 items-center justify-center rounded-full bg-[#E67E22]">
         
    <div className="font-dm font-[500] text-[22px] leading-[18px] tracking-[0.04em] text-[#FFFFFF]">
       3 
    </div>
</div>

{/* black circel -4 */}
 <div className="relative z-10 flex shrink-0  flex-col h-10 w-10 items-center justify-center rounded-full bg-[#0F1923] border border-[#FFFFFF14]">
         
    <div className="font-dm font-[500] text-[22px] leading-[18px] tracking-[0.04em] text-[#FFFFFF]">
       4 
    </div>
</div>
</div>
</div>

{/* details */}
<div className="min-w-0 flex-1 py-6">
<div className="flex min-h-[337px] flex-col w-full gap-[49px] justify-between">
<OrderSetp
title="Order Placed"
description="No. 24, Dehiwala ,Colombo 11  . Open Mon-sun, 8AM - 12PM."
time="7:42 PM"
/> 

<OrderSetp
title="Preparing in Kitchen"
description="Our chefs are preparing your order fresh."
time="7:48 PM"
/>  

<OrderSetp
title="Out for Delivery"
description="Your order is on its way - 4 Stops ahead of you."
time="Now"
/> 

<OrderSetp
title="Delivered"
description="Estimated arrival by 8:35 PM."
time="Est. 8:35 PM"
/>
 
</div>
</div>
</div>
</div>


   


   {/* Right side */}
<div className="flex w-full min-h-[455px] flex-col gap-4 max-w-[432px] lg:gap-5">
<div className="w-full  min-h-[250px] px-[10px] py-[20px] rounded-[14px] border border-[#FFFFFF14] bg-[#0F1923]">
    <div className="flex min-h-[44px] gap-[10px] px-5 py-[10px]">
        <h3 className="font-playfair font-[700] text-[18px] leading-none tracking-normal text-white">
            Order Summary
        </h3>
    </div>

<div className="w-full  min-h-[166px] px-[20px] py-[10px] gap-[10px]">
    <div className="w-full min-h-[92px] max-w-[372px]">
<Detailsrow label="Duck a’l’Orange "
 quantity="x1"
 price="LKR 6,800" />

 <Detailsrow label="Wild Mushroom Risotto"
 quantity="x1"
 price="LKR 4,200" />

 <Detailsrow label="Valhrhona Tart   x2"
 quantity="x2"
 price="LKR 5,900" />

  <Detailsrow label="Total"
 price="LKR 17,500" 
 isTotal/>
    </div>
</div>


</div>



<div className="w-full flex flex-col  gap-[10px] min-h-[185px] px-[30px] py-[40px] rounded-[14px] border border-[#FFFFFF14]">
    <div className="w-full min-h-[44px] py-[10px] gap-[10px]">
        <h2 className="font-playfair font-[700] text-[18px] tracking-normal leading-none text-[#F0F4F8] text-center">
          Need Help?  
        </h2> 
        </div>

        <div className="w-full min-h-[20px] ">
        <p className="font-dm font-[400] text-[13px] leading-[20px] tracking-normal text-center text-[#8A9BB0]">
            Something wrong with your order? Our team is here to help.
        </p>
     </div>

  <div className="w-full min-h-[21px]">
    <p className="font-dm font-[600] text-[16px] leading-none tracking-normal text-center text-[#F39C12] underline"> 
Call +9477 123 4567  </p>
  </div>

</div>
</div>
 </section>

            );
  }

  export default Orderdetails;