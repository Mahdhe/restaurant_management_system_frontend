import Commonbutton from "../../../Reservation/Common/button";

function Data({title,value,pill=false}){
    return(
        <div className="flex min-w-0 min-h-[36px] border-b border-[#FFFFFF14] py-[10px] gap-[10px] items-center justify-between">
            <h3 className="font-dm font-[400] text-[13px] leading-none tracking-normal text-[#8A9BB0]">
                {title}
            </h3>

            <span className={`shrink-0 text-right font-dm font-semibold tracking-[0.08em]
            
              ${pill ? "inline-flex min-h-[24px] gap-[10px] px-[9px] py-[4px] bg-[#F39C121F] border border-[#F39C124D]  font-dm font-semibold text-[11px] text-[#F39C12] leading-[11px]  items-center justify-center rounded-full"
               :"text-[14px] leading-none tracking-[0.08em] text-[#F0F4F8]"
               }`}
               >
              
                {value}
            </span>
        </div>
    );
}






function RoleDetails() {
  return (
    <div className="w-full min-w-0 h-[706px] bg-[#1C2A38] rounded-[14px] mt-[16px] border border-[#FFFFFF14] gap-[20px]">
       
      <div className="flex flex-col w-full min-w-0 h-[271px]  items-start gap-[10px] px-[20px] pt-[20px] pb-[10px] border-b border-[#FFFFFF14] rounded-t-[14px]">
        <div className="flex h-[38px] min-w-0 items-center gap-[6px]">

   
      <div className="flex w-[36px] h-[36px] bg-[#8E44AD1F] items-center shrink-0 justify-center rounded-full font-dm font-bold leading-[14px] tracking-[1.12px] text-center text-[#8E44AD]">
         SA
      
     </div>

       <div className="flex flex-col min-w-0 items-start">
        <span className="font-dm font-[600] text-[14px] leading-[24px] tracking-[1.12px]  text-[#FFFFFF]">
          Roles Details
        </span>

        <span className="font-dm font-[600] text-[12px] leading-[18px] tracking-[1.12px] text-[#8A9BB0] whitespace-nowrap">
          Editing Chef
        </span>
       </div>
      </div>


<div className="flex flex-col w-full gap-[10px] py-[20px]">
 
 <div className="flex w-full min-w-0 flex-col gap-[8px]">
    <h2 className="font-dm leading-none tracking-normal text-[#8A9BB0] text-[13px] font-[500]">
 Role Name
    </h2>


<div className="w-full flex min-h-[34px] min-w-0 gap-[10px] px-[10px] py-[8px] rounded-[10px] border border-[#FFFFFF14] bg-[#243447]">
    <p className="w-full items-start min-w-0 font-dm font-[400] tracking-[0.08em] leading-none text-[14px] text-[#FFFFFF]">
       Chef
    </p>
</div>
  </div>
  

   <div className="flex w-full min-w-0 flex-col gap-[8px] mt-[4px]">
    <h2 className="font-dm leading-none tracking-normal text-[#8A9BB0] text-[13px] font-[500]">
 Description
    </h2>


<div className="w-full flex min-h-[59px] min-w-0 gap-[10px] px-[10px]  rounded-[10px] border border-[#FFFFFF14] bg-[#243447]">
    <p className="whitespace-pre-line flex w-full items-center min-w-0 font-dm font-[400] tracking-[0.08em] leading-none text-[14px] text-[#FFFFFF]">
       Oversee kitchen operations and
        provide menu input
    </p>
</div>
  </div>
</div>

</div>

<div className="min-w-0 w-full border-b border-[#FFFFFF14] gap-[10px] px-[20px] pt-[20px] pb-8">

<div className="min-w-0 w-full">

<Data title="Assigned users" value="5 users" pill/>
<Data title="Created Date" value="Jan 12, 2024"/>
<Data title="Last Modified" value="Jan 10, 2024"/> 
<Data title="Role Type" value="System Role " pill/> 

</div>
</div>

<div className="min-w-0 h-[103px] border-b border-[#FFFFFF14] px-[20px] py-[20px] gap-[10px] ">
  <div className="min-w-0 h-[27px] pb-[10px] gap-[10px]">
    <h2 className="font-dm font-[400] tracking-normal leading-none text-[#8A9BB0] text-[13px]">
      Status

    </h2>
  </div>

<div className=" flex min-w-0 h-[36px] gap-[10px]  py-[10px] items-center"> 
<button
  type="button"
  className="relative flex h-[28px] w-[54px] items-center rounded-full bg-[#27AE60] px-[4px]"
>
  <span className="absolute left-[34px] h-[16px] w-[16px] rounded-full bg-white" />
</button>
  
  <h2 className="font-dm font-semibold text-[13px] leading-none tracking-normal text-[#F0F4F8]">
   Role Active 
  </h2>
</div>

 <div className="flex flex-col min-w-0 w-full items-center gap-[8px] py-8">
   
               <Commonbutton className="w-full bg-[#E67E22] text-[#F0F4F8]">
               Save changes
               </Commonbutton>

                <Commonbutton className="w-full bg-[#243447] text-[#F0F4F8]">
               View Assigned Users
               </Commonbutton>
            </div>
  </div>

</div>
  );
}

export default RoleDetails;