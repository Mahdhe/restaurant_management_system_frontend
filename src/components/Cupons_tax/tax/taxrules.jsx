 import  TableContent from "./tablecontent";

 function TaxConfiguration(){

 return(

 <section className="min-h-[919px] w-full min-w-0  gap-[20px] overflow-hidden">

         
            <div className="grid grid-cols-1 lg:grid-cols-[820px_1fr] gap-[8px]">

      <div className="min-w-0 min-h-[919px] mt-[16px] rounded-[16px] px-[20px] py-[10px] gap-[20px] bg-[#1C2A38] border border-[#1C2A38]">
        <div className="flex min-h-[48px] w-full min-w-0  py-[12px] gap-[10px] items-center justify-between">
    <h3 className="font-dm font-bold text-[18px] tracking-normal leading-none text-[#F0F4F8]">
       Tax Rules by Category
    </h3>

    <span className="h-[24px] w-auto shrink-0 rounded-full px-[9px] py-[4px] bg-[#2980B91F] border border-[#2980B94D] font-dm font-semibold text-[11px] leading-[18px] tracking-[0.08em] text-[#2980B9] whitespace-nowrap">
      Tax Config
    </span>
</div>

{/* table */}
<div className="min-w-0 w-full min-h-[362px] overflow-x-auto">
   
    <div className="min-w-[740px]"> 
    {/* <div className="w-full min-w-0"> */}
    <div className="flex min-w-0 min-h-[62px] border-b border-[#FFFFFF14] gap-[10px]">
      
      <div className="flex min-w-[320px] min-h-[41px] items-center p-[10px]">
        <h2 className="font-dm font-bold tracking-normal text-[16px] leading-none text-[#FFFFFF]">
          Category  
        </h2>
      </div>

      <div className="flex min-w-[420px] justify-between min-h-[41px] gap-[10px] items-center p-[10px] px-12">
       
        <div className="flex w-[92.5px]  shrink-0 items-center">
        <h2 className="font-dm font-bold tracking-normal text-[16px] leading-none text-[#FFFFFF]">
          Tax % 
        </h2> </div>

         <div className="flex w-[92.5px] shrink-0 items-center">
         <h2 className="font-dm font-bold tracking-normal text-[16px] leading-none text-[#FFFFFF]">
          Apply Service
        </h2> </div>

         <div className="flex w-[92.5px]  shrink-0 items-center">
         <h2 className="font-dm font-bold tracking-normal text-[16px] leading-none text-[#FFFFFF]">
         Status
        </h2> </div>

         <div className="flex  w-[92.5px]  shrink-0 items-center ">
         <h2 className="font-dm font-bold tracking-normal text-[16px] leading-none text-[#FFFFFF]">
         Toggle
        </h2> </div>
 
      </div>

    </div>

    <TableContent
    category="Food Items"
    tax="10%"
    service="Yes"
    status="Active"
    toggle={true}
    /> 

 <TableContent
    category="Drinks"
    tax="8%"
    service="Yes"
    status="Active"
    toggle={true}
    /> 

 <TableContent
    category="Desserts"
    tax="5%"
    service="no"
    status="Active"
    toggle={true}
    /> 

 <TableContent
    category="Takeway"
    tax="0%"
    service="no"
    status="Inactive"
    toggle={false}
    /> 

   </div>
    </div>

<div className="min-w-0 pt-0"> 
<div className="min-h-[288px]  min-w-0 bg-[#243447] border border-[#FFFFFF14]  rounded-[14px] p-[20px] gap-[16px]">

    <div className="flex min-h-[48px] w-full min-w-0  py-[12px] gap-[10px] items-center justify-between">
    <h3 className="font-dm font-bold text-[18px] tracking-normal leading-none text-[#F0F4F8]">
       Tax Rules by Category
    </h3>

    <span className="h-[24px] w-auto shrink-0 rounded-full px-[9px] py-[4px] bg-[#2980B91F] border border-[#2980B94D] font-dm font-semibold text-[11px] leading-[18px] tracking-[0.08em] text-[#2980B9] whitespace-nowrap">
      Tax Config
    </span>
</div>
</div>
 </div>  
    </div>
   
    
  
  </div>
    
    </section>
 
 );
 }
 
 export default TaxConfiguration;