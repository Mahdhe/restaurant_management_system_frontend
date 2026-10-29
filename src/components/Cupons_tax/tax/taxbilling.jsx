import Graph from "../Common/statsgrapg";

function Cupon({title,value,valueColor="text-[#F0F4F8]",noBorder=false,boldTitle=false}){
    return(
        <div className={`flex min-w-0 min-h-[36px] py-[10px] gap-[10px] items-center justify-between last:[&>span]:text-[16px]
            ${noBorder ? "":"border-b border-[#FFFFFF14]"}
        `}
        >
            <h3 className={`font-dm  text-[13px] leading-none tracking-normal text-[#8A9BB0]
            ${boldTitle ? "font-semibold text-[#F0F4F8]" : "font-[400] text-[#8A9BB0]"}
            `}
            >
                {title}
            </h3>

            <span className="shrink-0 text-right font-dm font-semibold text-[13px] leading-none tracking-normal"
                style={{color:valueColor}}
                >
                {value}
            </span>
        </div>
    );
}


function BillingReview(){
    return(
        <div className="w-full min-w-0">
 <div className="w-full min-w-0 mt-[16px] min-h-[359px] bg-[#1C2A38] border border-[#FFFFFF14] rounded-[14px]">

<div className="min-w-0 min-h-[53px] rounded-t-[14px] pt-[20px] pb-[10px] px-[20px] gap-[10px] border border-[#FFFFFF14]">
<h2 className="font-dm font-bold leading-none tracking-normal text-[18px] text-[#FFFFFF]">
Billing Preview
</h2>
</div>

<div className="min-h-[306px] p-[20px] gap-[10px]">
  
   <div className="min-h-[59px] gap-[10px]">
    <h2 className="font-dm font-medium text-[13px] leading-none tracking-normal text-[#8A9BB0]">
      SAMPLE SUBTOTAL  
    </h2>

    <div className="min-w-0 mt-[8px] bg-[#243447] border border-[#FFFFFF14] gap-[10px] py-[3px] px-[10px] rounded-[10px]">
        <span className="font-dm font-normal text-[14px] tracking-normal leading-none text-[#FFFFFF]">
          FAMILY500 
        </span>
    </div>
    </div> 

    <div className="min-w-0 h-[197px] gap-[10px] p-[10px] border border-[#FFFFFF14] bg-[#243447] rounded-[10px]">

<Cupon title="Food Subtotal" value="LKR 4,990" valueColor="#F0F4F8" noBorder/>
<Cupon title="Tax" value="LKR 499" valueColor="#F0F4F8"/>
<Cupon title="Service" value="LKR 250" valueColor="#F0F4F8"/>
<Cupon title="Coupon Discount" value="-LKR 500" valueColor="#3BB273"/>
<Cupon title="Total" value="LKR 5,239" valueColor="#E67E22" noBorder boldTitle/>

</div>

</div>
 </div>



{/* Tax trend graph */}
<div className="flex flex-col  gap-[20px] w-full min-w-0 mt-[16px] min-h-[351px] bg-[#1C2A38] border border-[#FFFFFF14] rounded-[14px] pt-[20px] pb-[20px] px-[40px]">

    <div className="flex h-[35px] w-full min-w-0 shrink-0 items-center border-b border-[#FFFFFF14] px-[5px]">
        <h2 className="font-dm font-[600] text-[18px] leading-none tracking-normal text-[#F0F4F8]">
            Tax Trend
        </h2>
    </div>

<div className="w-full min-w-0 overflow-x-auto">

    <div className="flex items-end min-w-[256px] justify-center h-[256px] bg-[#243447] border border-[#FFFFFF14] rounded-[14px] pt-[20px] pb-[20px] px-[40px] gap-[10px]">

 <div className="flex items-end justify-center  gap-[10px] w-full">

        <Graph width="30px" height="149px" title="mon" />
        <Graph width="30px" height="124px" title="tue" />
        <Graph width="30px" height="138px" title="wed" />
        <Graph width="30px" height="112px" title="thu" />
        <Graph width="30px" height="149px" title="fri" />

    </div>
</div>
</div>
 </div>
<div className="w-full min-w-0 mt-[16px] min-h-[169px] bg-[#1C2A38] border border-[#FFFFFF14] rounded-[14px]">

<div className="min-w-0 min-h-[53px] rounded-t-[14px] border-b border-[#FFFFFF14] px-[20px] pt-[20px] pb-[10px] gap-[10px]">
    <h2 className="font-dm font-bold leading-none tracking-normal text-[18px] text-[#FFFFFF]">
      Customer Copy
    </h2>
</div>

<div className="min-w-0 h-[116px] gap-[10px] py-[12px] px-[20px]">

<Cupon title="Email" value="Optional" valueColor="#F0F4F8"/>
<Cupon title="SMS Receipt" value="Sent" valueColor="#27AE60"/>


</div>
</div>
 </div>


    );
}

export default BillingReview;