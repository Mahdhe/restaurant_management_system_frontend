function DirectoryTable({ name, job,nameicon,users,date,description,status,button1,button2,button3 }) {
    return (
        <tr className="h-[91px] border-b border-[#FFFFFF14]">
            
        {/* Role name */}
        <td className="w-[190px] p-0 align-middle">
            <div className="flex items-center gap-[6px]">

          <div className="flex min-w-[36px] min-h-[36px] bg-[#8E44AD1F] items-center justify-center rounded-full font-dm font-bold leading-[14px] tracking-[1.12px] text-center align-middle"
          style={{
            backgroundColor:nameicon.bg,
            border: nameicon.border,
            color: nameicon.color
          }}>
            {nameicon.text}
          </div>

            {/* Name and job */}
            <div className="flex flex-col min-w-0 items-start"> 
            <span className="font-dm font-semibold text-[14px] leading-[24px] tracking-[1.12px]  text-[#FFFFFF]">
              {name}
            </span>

            <span className="font-dm font-normal text-[12px] leading-[18px] tracking-[1.12px] text-[#8A9BB0] whitespace-nowrap">
                {job}
            </span>
            </div>
            </div>
        </td>

        {/* description */}
        <td className="w-[100px] px-0 text-left align-middle">
            <span className="block whitespace-pre-line w-[120px] min-h-[51px] 
             font-dm font-normal text-[13px] leading-[18px] tracking-[1.12px]  text-[#556070]">
                {description}
            </span>
         </td>

        {/* users */}
        <td className="w-[80px] px-0">
            <span 
            className="inline-flex gap-[10px] items-center bg-[#8E44AD1F] font-dm font-semibold text-[11px] leading-[18px] tracking-[1.12px] text-center align-middle rounded-full px-[9px] py-[4px] whitespace-nowrap"
                style={{
                    backgroundColor:users.bg,
                    border: `1px solid ${users.border}`,
                    color: users.color
                }}
                >
                {users.text}
            </span>
        </td>

        <td className="w-[110px] px-0 items-start">
            <span className="min-h-[18px] 
             font-dm font-[600] text-[14px] leading-[18px] tracking-[1.12px] text-center align-middle text-[#F0F4F8]">
                {date}
            </span>
         </td>  

         <td className="w-[53px] px-0 align-middle">
            <span 
            className="inline-flex min-h-[24px] rounded-full border border-[#27AE601F] px-[9px] py-[4px]
             font-dm font-semibold text-[11px] leading-[18px] tracking-[1.12px] text-center align-middle"
            style={{
                backgroundColor:
                status==="Active"?"#27AE601F":status==="Inactive"?"#5560701F":"#F2994A1F",
                border: status==="Active"?"1px solid #27AE604D":status==="Inactive"?"1px solid #5560704D":"1px solid #F2994A",
                color: status==="Active"?"#27AE60":status==="Inactive"?"#556070":"#F2994A"
            }}
            >
                {status}
            </span>
         </td>
        

        <td className="w-[203px] px-0">
        <div className="flex gap-[8px] items-center whitespace-nowrap">

            <button
            type="button"
            className="flex min-h-[32px] min-w-[53px]  justify-center items-center border border-[#FFFFFF24] py-[6px] px-[12px] bg-[#243447]
            opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[12px] leading-none tracking-normal cursor-pointer whitespace-nowrap 
            ">
            {button1}
            </button>


              <button
            type="button"
            className="flex min-h-[32px] min-w-[53px]  justify-center items-center border border-[#FFFFFF24] py-[6px] px-[12px] bg-[#243447]
            opacity-100 rounded-[10px] text-[#F0F4F8] font-dm font-[600] text-[12px] leading-none tracking-normal cursor-pointer whitespace-nowrap 
            ">
            {button2}
            </button>


        <button
            type="button"
            className="flex min-h-[32px] min-w-[53px]  justify-center items-center border border-[#E74C3C26] py-[6px] px-[12px] bg-[#E74C3C1F]
            opacity-100 rounded-[10px] text-[#E74C3C] font-dm font-[600] text-[12px] leading-none tracking-normal cursor-pointer whitespace-nowrap 
            ">
            {button3}
            </button>
 </div>
 </td>
        
        </tr>
    );
}

export default DirectoryTable;