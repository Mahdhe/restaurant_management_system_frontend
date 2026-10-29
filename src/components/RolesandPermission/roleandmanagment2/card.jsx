import {Mail,Phone} from "lucide-react"

function Card({name,icon,role,email,phone,iconcolor,iconbg,rolecolor,rolebg,roleborder}){
    return(
        <div className="min-w-[274px] h-[250px] border border-[#FFFFFF14] bg-[#1C2A38] rounded-[14px]">

        <div className="w-full h-[88px] min-w-0 rounded-t-[14px] border-b border-[#FFFFFF14] p-[20px] gap-[10px]">
           <div className="flex h-[48px] min-w-0 items-center gap-[10px] ">

      <div className="flex w-[48px] h-[48px] items-center shrink-0 justify-center rounded-full font-dm font-bold leading-[14px] text-[14px] tracking-[1.12px] text-center align-middle text-[#2980B9] bg-[#2980B91F]"
      style={{
        color:iconcolor,
        backgroundColor:iconbg,

      }}
      >
         {icon}
      
     </div>

       <div className="flex flex-col min-w-0 items-start gap-[4px]">
        <span className="font-dm font-[600] text-[14px] leading-[24px] tracking-[1.12px]  text-[#FFFFFF]">
       {name}
        </span>

        <span className="flex items-center rounded-full py-[4px] px-[9px]  border border-[#2980B94D] bg-[#2980B91F] h-[24px]
        font-dm font-[600] text-[12px] leading-[18px] tracking-normal text-[#2980B9] whitespace-nowrap "
        style={{
            color:rolecolor,
            borderColor:roleborder,
            backgroundColor:rolebg

        }}
        >
         {role}
        </span>
       </div>
      </div> 
        </div>

        <div className="min-w-0 h-[162px] gap-[10px] p-[20px]">
            <div className="flex flex-col min-w-0 h-[60px] border-b border-[#FFFFFF14] gap-[10px]">

                <div className="flex min-w-0 h-[17px] gap-[8px]">
                <Mail
                 size={18}
                 strokeWidth={2}
                className="shrink-0 text-[#E67E22]" 
                />

                <span className="font-dm text-[#8A9BB0] leading-none text-[13px] tracking-normal">
                   {email} 
                </span>

                </div>

                  <div className="flex min-w-0 h-[17px] gap-[8px]">
                <Phone
                 size={18}
                 strokeWidth={2}
                className="shrink-0 text-[#E67E22]" 
                />

                <span className="font-dm text-[#8A9BB0] leading-none text-[13px] tracking-normal">
                   {phone} 
                </span>

                </div>
            </div>
            
    
        <div className="flex min-w-0 h-[24px] py-6 justify-between gap-[10px]">
         <span className="flex rounded-full py-[4px] px-[9px] gap-[10px] border border-[#27AE604D] bg-[#27AE601F] h-[24px]
        font-dm font-[600] text-[11px] leading-[18px] tracking-[1.12px] text-[#27AE60] whitespace-nowrap items-center">
        Active
        </span>

        <span className="flex  rounded-[6px] py-[6px] px-[12px] gap-[8px] border border-[#FFFFFF24] bg-[#243447] h-[32px]
        font-dm font-[600] text-[12px] leading-[18px] tracking-[1.12px] text-[#F0F4F8] whitespace-nowrap items-center">
       View Access
        </span>

        </div>
        </div>
    </div>
    );
}

export default Card;