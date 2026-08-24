function Pendingapprovals(){
    return(
       
<section className="w-full mt-[16px] min-h-[929px] gap-[20px] ">
    <div className="flex flex-col min-h-[268px] rounded-[14px] gap-[16px]  p-[20px] bg-[#1C2A38] border border-[#FFFFFF14]">
  
  {/* first box */}
  <div className="flex w-full justify-between items-center min-h-[27px] pt-[3px] gap-[10px]">
     <span className="font-dm  flex-1 font-bold text-[18px] leading-none tracking-normal text-[#F0F4F8]">
        Pending Approvals
     </span>
     <span className="ml-auto flex items-center justify-center  shrink-0 px-[9px] min-h-[24px] w-[42px] rounded-full py-[4px] text-[#2980B9] border border-[#2980B94D]
     text-[11px] font-dm leading-[18px] font-[600] tracking-[0.08em]">
        T04
     </span>
  </div>

  <div className="flex w-full  border-b border-[#FFFFFF14] pt-[3px] pb-[3px] gap-[10px]">
    <span className="flex-1 h-[16px] font-dm text-[12px] tracking-normal leading-none text-[#556070] font-[400]">
       Recommended 
    </span>
    <span className="w-[51px] h-[16px] font-dm text-[12px] tracking-normal leading-none text-[#F0F4F8] font-[600]">
       T05/T09 </span>
  </div>

<div className="w-full flex flex-col min-h-[134px] gap-[16px]">
    <span className="w-full min-h-[78px] rounded-[12px] border border-[#F39C1240] bg-[#F39C121F] p-[12px]
     font-dm font-normal tracking-normal leading-[18px] text-[#F39C12]">
        T04 supports 4 guests, but reservation note mentions possible 6 guests.

    </span>

    <button className="w-full min-h-[40px] rounded-[10px] gap-[8px] bg-[#E67E22]
    font-dm font-bold text-[14px] text-[#F0F4F8] tracking-normal leading-none">
      Open Floor Picker  
    </button>
</div>

 </div> 
  

{/* second box */}
<div className="min-h-[178px] mt-[16px] rounded-[14px] p-[20px]  bg-[#1C2A38] border border-[#FFFFFF14]">

  <div className="flex flex-col  w-full min-h-[27px] pt-[3px] gap-[10px]">
     <span className="font-dm font-bold text-[18px] leading-none tracking-normal text-[#F0F4F8]">
       Approval Actions
     </span>
   
   <div className="flex flex-col min-h-[92px] gap-[12px] pt-[3px]">
   
   <div className="w-full grid grid-cols-2 min-h-[40px] gap-[8px] items-center">
     <button className="min-h-[40px] w-full rounded-[10px] border border-[#27AE6026]  py-[8px] bg-[#27AE6026] text-[#27AE60]
    font-dm font-semibold tracking-normal leading-none text-[14px]">
        Approve 
    </button>

     <button className="min-h-[40px] w-full rounded-[10px] border border-[#E74C3C26] py-[8px] bg-[#E74C3C1F] text-[#E74C3C]
    font-dm font-semibold tracking-normal leading-none text-[14px]">
       Reject
    </button>
   </div>
   

   <div className="flex w-full min-h-[40px] rounded-[10px] px-[16px] py-[8px] gap-[8px] bg-[#243447] pt-[3px] items-center justify-center">   
<button className="
text-[14px] text-[#F0F4F8] font-semibold items-center"> 
Send Message
</button>
   </div>
   
</div>  
</div>
</div>


{/* third box */}
<div className="h-[128px] mt-[16px] rounded-[14px] p-[20px]  bg-[#1C2A38] border border-[#FFFFFF14]">

<div className="flex flex-col  w-full min-h-[128px] pt-[3px] gap-[14px]">
     <span className="font-dm font-bold text-[18px] leading-none tracking-normal text-[#F0F4F8]">
       Approval Actions
     </span>

<span className="w-full h-[42px] p-[12px] mt-[4px] border border-[#E74C3C] rounded-[12px] gap-[10px] bg-[#E74C3C1F]">
    <p className="font-dm  h-[18px] font-bold text-[13px] tracking-normal leading-none text-[#E74C3C]">
        Reservation conflicts with T07 at 8:30 PM.
    </p>
</span>
</div>
</div>
</section>
    );
}

export default Pendingapprovals;