import { useState } from "react";



function ButtonsRow(){
     const filltervalues= ["Dashboard","Reservation List","Details","Assign Table","Status Tracking"];
    const[activeFilter,setActiveFilter]=useState("Dashboard");

    return(
        <div className="flex w-full min-h-[60px] gap-[10px] max-w-[591px] border p-[10px] mt-[16px]  border-[#FFFFFF14] rounded-[14px] bg-[#1C2A38]">
 {filltervalues.map((value)=>{
    const isActive = activeFilter===value;

    return(
        <button
         key={value}
         type="button"
        onClick={()=> setActiveFilter(value)}
        className={`flex shrink-0 min-h-[40px] items-center justify-center rounded-[10px] font-dm text-[14px] font-[600] whs\
         cursor-pointer transition-colors
         ${isActive  
         ? "h-[40px] px-[16px] py-[8px] gap-[8px] bg-[#E67E22] text-[#F0F4F8]"

         : "h-[40px] px-[10px] py-[10px] gap-[10px] bg-transparent text-[#8A9BB0]"

                
            }
        `}
        
        >
            {value}
        </button>
    )
 })}
        </div>
    );
}

export default ButtonsRow;