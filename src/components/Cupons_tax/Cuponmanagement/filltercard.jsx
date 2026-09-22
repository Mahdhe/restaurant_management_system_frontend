import { useState } from "react";

const chipNames =[
    "All Copons",
    "Active",
    "Scheduled",
    "Expired",
    "Fixed",
    "Percentage",
    "Online Only",
    
];

function Statuschips(){
    const[activechip,setActivechip] = useState("ALL");
    
return(
<div className="flex w-full flex-wrap items-center gap-[10px]">
    {chipNames.map((name)=>{
        const isActive = activechip === name;
    
        return(
            <button
        key={name}
        type="button"
        onClick={()=>setActivechip(name)}

        className={`flex min-w-[85px] min-h-[32px] items-center justify-center bg-[#E67E2214] border rounded-[999px] px-[12px]
       font-dm font-[500] text-[12px] whitespace-nowrap
       ${
      isActive
       ? "border-[#E67E224D] bg-[#E67E2214] text-[#E67E22]"
       : "border-[#FFFFFF14]  !bg-[#243447] text-[#8A9BB0]"
        }
       `}
       >
        {name}
       </button>
        );
    })}
</div>
);
}



function Filtercard(){

    return(
        <div className="min-w-0 w-full flex min-h-[50px] mt-[16px] gap-[10px] flex-col">

  {/* filter group */}
  <div className="w-full min-w-0 max-w-[1092px] min-h-[32px] rounded-[14px] gap-[8px] mt-[16px]">
  <Statuschips/>
  </div>

  </div>
    );
}
export default Filtercard;