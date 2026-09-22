import Commonbutton from "../../Reservation/Common/button";
import Graph from "../Common/statsgrapg";
import CouponList from "./table";
import TableContent from "./tablecontent";


function Cupon({title,value}){
    return(
        <div className="flex min-w-0 min-h-[36px] border-b border-[#FFFFFF14] py-[10px] gap-[10px] items-center justify-between">
            <h3 className="font-dm font-[400] text-[13px] leading-none tracking-normal text-[#8A9BB0]">
                {title}
            </h3>

            <span className="shrink-0 text-right font-dm font-semibold text-[13px] leading-none tracking-normal text-[#F0F4F8]">
                {value}
            </span>
        </div>
    );
}


function Management(){
    return(

        <section className="min-h-[919px] w-full min-w-0  gap-[20px] overflow-hidden">

         
            <div className="grid grid-cols-1 lg:grid-cols-[870px_1fr] gap-[20px]">
         
         <div className="min-w-0">
        {/* left side */}
        <div 
        className="rounded-[16px] border border-[#FFFFFF14] px-[20px] py-[10px] bg-[#1C2A38]  mt-[16px] ">
        <div className="min-h-[599px] max-w-[810px] gap-[10px]">


           {/* table title */}
            <div className="flex min-h-[64px] py-[12px] items-center justify-between gap-[10px]">
                <h1 className="font-dm font-bold text-[18px] tracking-normal leading-none text-[#F0F4F8]">
                    Coupons List 
                </h1>
                
               <Commonbutton className="max-w-[128px]  bg-[#E67E22] text-[#F0F4F8]">
                + Add Coupon
               </Commonbutton>
            </div>


       {/* Table */}
     <div className="min-h-[495px] min-w-0 w-full px-[20px]">
        <CouponList />
     </div>
        </div>
</div>

{/* bar graph */}
<div className="w-full min-w-0 h-[351px] border border-[#1C2A38] rounded-[14px] gap-[20px] mt-[16px] p-[20px] bg-[#1C2A38]">
<div className="flex min-h-[35px] w-full min-w-0  py-[6px] gap-[10px] items-center justify-between">
    <h3 className="font-dm font-bold text-[18px] tracking-normal leading-none text-[#F0F4F8]">
        Usage Stats
    </h3>

    <span className="font-dm font-[400] w-[69px] text-[13px] leading-none tracking-normal text-[#556070]">
      Last 5 days  
    </span>
</div>

{/* graph */}
<div className="flex w-full min-w-0 h-[256px] rounded-[14px] border border-[#FFFFFF14] bg-[#243447] px-[25px]  mt-[16px] gap-[20px] overflow-x-auto">
    <div className="flex min-w-0 gap-[20px] items-end pb-[40px] ">
  
<Graph width="138px" height="96px" title="Mon"/>
<Graph width="138px" height="149px" title="Tue"/>
<Graph width="138px" height="128px" title="Wed"/>
<Graph width="138px" height="68px" title="Thu"/>
<Graph width="138px" height="128px" title="Fri"/>
</div>

</div>
 </div>       
  </div>



      {/* Right Side */}
        <div className="min-w-0 flex flex-col mt-[16px]">
         <div className="min-w-0 w-full min-h-[710px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] ">


  <div className="flex min-w-0 h-[54px] px-[20px] pt-[20px] pb-[10px] rounded-t-[14px] gap-[10px]  border border-[#FFFFFF14] items-center justify-between">
    <h2 className="fotn-dm font-bold tracking-normal leading-none text-[18px] text-[#FFFFFF]">
        Add / Edit Coupon
    </h2>

    <span className="w-[44px] min-h-[24px] rounded-full border border-[#8E44AD4D] px-[9px] py-[4px] text-[#8E44AD] 
    font-dm font-semibold text-[12px] leading-[18px] tracking-[0.08em]"> Rule</span>
  </div>

  <div className="min-w-0 p-[20px] gap-[16px] min-h-[656px] flex flex-col">
    <TableContent
        title="COUPON CODE"
        value="FAMILY500"
    />

    <div className="min-w-0 h-[59px] flex flex-col gap-[8px]">
            <span className="font-dm font-semibold text-[13px] leading-[14px] tracking-[0.08em] text-[#8A9BB0]">
              DISCOUNT TYPE
            </span>

            <div className="min-w-0 min-h-[34px] border border-[#FFFFFF14] rounded-[10px] bg-[#243447] px-[10px] py-[3px]">
<select className="w-full bg-[#243447] border-none outline-none font-dm font-medium text-[14px] text-[#F0F4F8]">
<option> Fixed Amount </option>
<option> Percentage</option>
<option> Free item </option>

</select> 
</div>
 </div>

     <TableContent
        title="DISCOUNT VALUE"
        value="LKR 500"
    />

     <TableContent
        title="MINIMUM ORDER"
        value="LKR 5,000"
    />

     <TableContent
        title="START DATE"
        value="20 May 2026"
    />

     <TableContent
        title="END DATE"
        value="30 June 2026"
    />

     <TableContent
        title="USAGE LIMIT"
        value="500"
    />


 <div className="min-w-0 h-[59px] flex flex-col gap-[8px]">
            <span className="font-dm font-semibold text-[13px] leading-[14px] tracking-[0.08em] text-[#8A9BB0]">
              STATUS
            </span>

            <div className="min-w-0 min-h-[34px] border border-[#FFFFFF14] rounded-[10px] bg-[#243447] px-[10px] py-[3px]">
<select className="w-full bg-[#243447] border-none outline-none font-dm font-medium text-[14px] text-[#F0F4F8]">
<option> Active </option>
<option> Scheduled </option>
<option> Expired </option>

</select> 
</div>
 </div>


<div className="flex min-w-0">
  <Commonbutton className="w-full min-h-[40px] text-[#F0F4F8] bg-[#E67E22]">
    Save Coupon
  </Commonbutton>
  </div>
   

  </div>

 </div>

{/* Cupon preview */}
 <div className="min-w-0 min-h-[240px] mt-[16px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38]">
<div className="min-w-0 min-h-[53px] rounded-t-[14px] border-b border-[#FFFFFF14] px-[20px] pt-[20px] pb-[10px] gap-[10px]">
    <h2 className="font-dm font-bold leading-none tracking-normal text-[18px] text-[#FFFFFF]">
      Coupon Preview  
    </h2>
</div>

<div className="min-w-0 min-h-[187px] gap-[10px] p-[20px]">

<Cupon title="Customer sees" value="Checkout"/>
<Cupon title="Most Used" value="WECOME10"/>
<Cupon title="Avg Discount" value="LKR 470"/>

</div>
</div>

 </div>
</div>


        </section>
    );
}

export default Management;