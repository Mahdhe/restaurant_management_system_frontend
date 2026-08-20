import { useState } from "react";

const chipNames =[
    "All",
    "Pending",
    "Approved",
    "Rejected",
    "Seated",
    "Completed",
    "Today",
    "This Week"
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

        className={`flex min-w-[41px] min-h-[32px] items-center justify-center bg-[#E67E2214] border rounded-[999px] px-[12px]
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
        <div className="min-w-0 flex min-h-[128px] mt-[16px] rounded-[14px] gap-[16px] flex-col border border-[#FFFFFF14] bg-[#1C2A38] p-[20px]">

  {/* filter group */}
  <div className="w-full max-w-[1092px] min-h-[32px] rounded-[14px] gap-[10px]">
  <Statuschips/>
  </div>


{/* input field */}
<input type="text"
placeholder="Search guests name, phone, date/time"
className="h-[40px] w-full min-w-0 rounded-[14px] hover:border-[#E67E224D]  focus:outline-none focus:right-0 border border-[#FFFFFF24]  px-[12px] py-[8px] font-dm text-[14px] text-[#F0F4F8] bg-[#243447]
placeholder:text-[#556070] placeholder:font-[400]"
/>
        </div>
    );
}

export default Filtercard;