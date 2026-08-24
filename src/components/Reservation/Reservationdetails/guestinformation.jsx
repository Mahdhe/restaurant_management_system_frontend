const rows=[
    {label:"Phone", value:"+94 76 177 8321"},
     {label:"Email", value:" fathima@example.com"},
      {label:"Occasion", value:"Birthday dinner"},
       {label:"Preferred Area", value:"Section B / Window"},

];



function Guestinformation(){
    return(
        <section className="min-w-0 p-[20px]  min-h-[299px] rounded-[14px] gap-[16px] border border-[#FFFFFF14] bg-[#1C2A38]">
<div className="flex flex-col h-[43px] w-[676px] py-[10px] gap-[10px]">
    <h2 className="font-dm font-bold leading-none tracking-normal text-[18px] text-[#F0F4F8]">
      
Guest Information
    </h2>
</div>

<div className="flex flex-col min-w-0 min-h-[200px] max-w-[720px] py-[10px] gap-[12px] justify-between">
{rows.map((row)=>(
    <div 
    key={row.label}
    className="flex max-w-[720px] min-h-[36px] border-b border-[#FFFFFF14] py-[10px] gap-[10px] justify-between"
    >
    <span className="font-dm font-[400] leading-none tracking-normal text-[13px] h-[17px] text-[#8A9BB0]">
   {row.label}
    </span>

    <span className="font-dm text-right whitespace-nowrap font-semibold leading-none tracking-normal text-[13px] h-[17px] text-[#F0F4F8]">
   {row.value}
    </span>
</div>
))}
</div> </section>
    );
}

export default Guestinformation;