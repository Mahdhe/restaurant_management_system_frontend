import {FileCheck } from "lucide-react";
import { Check } from "lucide-react";

function Customerdetail({Title,items=[],showLastBorder = false}){


    return(
  <div className="flex flex-col min-w-0  gap-[10px] justify-center">
    <div className="flex min-w-0 h-[27px] border-b-[2px] border-[#FFFFFF14] pb-[10px] gap-[10px] items-center">
   <FileCheck
                 size={18}
                 strokeWidth={2}
                className="shrink-0 text-[#E67E22]" 
                />

                <span className="font-dm leading-none text-[13px] tracking-normal text-[#E67E22]">
                   {Title} 
                </span>
  </div>

<div className="flex flex-col min-w-0 gap-[10px]">
{items.map((item,index)=>(
<div 
key={index}
className={`flex min-w-0 h-[34px] pb-[10px] gap-[10px] border-b border-[#5560700F] items-center
  ${
    index === items.length - 1
                    ? showLastBorder
                      ? "border-b-[2px] border-[#5560700F]"
                      : "border-b-0"
                  : "border-b border-[#5560700F]"

}`}
  >
  
    <div className="flex w-[18px] min-w-0 h-[18px]  gap-[10px] items-center justify-center bg-[#E67E22]">
         <Check
                 size={14}
                 strokeWidth={3}
                className="text-black" 
                />
</div>
                <span className="whitespace-nowrap font-dm font-[600]  text-[#F0F4F8] leading-none text-[13px] tracking-normal">
                   {item} 
                </span>
    
 </div>

))}
  </div>
  </div>
    );
}
 export default Customerdetail;