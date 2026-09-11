function Summaryrow({label , value , valuecolor="text-[#8A9BB0]"}) {
    return(
        <div className="flex h-[36px] w-full items-center justify-between gap-[10px] border-b border-[#FFFFFF14] py-[10px]">

            <span className="font-dm  w-full  text-[13px] font-normal leading-none tracking-normal text-[#8A9BB0] ">
                {label}
            </span>

            <span className={`text-right  w-fit inline-flex font-dm text-[13px] font-semibold leading-none tracking-normal px-[9px] whitespace-nowrap ${valuecolor}`}>
                {value}
            </span>
        </div>
    );
}




function Reservationsummary() {
    return(
        <div className="w-full h-[362px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[20px] gap-[16px]">

<div className="flex justify-between w-full min-h-[30px] pt-[3px] pb-[3px] gap-[10px]">
    <h1 className="font-dm  h-[23px] font-bold leading-none tracking-normal text-[#F0F4F8]">
       Reservation Summary 
    </h1>


<span className="h-[24px] w-fit inline-flex rounded-full px-[9px] py-[4px] bg-[#F39C121F] text-[#F39C12] border border-[#F39C124D] shrink-0
 font-dm font-semibold text-[11px] tracking-[0.08em] leading-none items-center justify-center">Pending</span>
</div>


{/* summary rows */}
<div className="flex flex-col w-full h-[200px] mt-[16px] py-[10px] gap-[10px]">
<Summaryrow label="Guest" value="Fathima S."  />
<Summaryrow label="Date / Time" value=" 26 May . 8.30 PM"  />
<Summaryrow label="Guests" value="4" />
<Summaryrow label="Selected Table" value="T04" valuecolor="text-[#F39C12] " />


<div className="w-full mt-[16px] min-h-[60px] rounded-[12px] gap-[10px] bg-[#3BB2731F] border border-[#27AE60] p-[12px]">
    <p className="font-dm font-bold text-[13px] tracking-normal leading-[18px] text-[#27AE60]">

T04 can support this reservation if guest count remains 4.</p>

</div>
</div>
</div>



    );
}

export default  Reservationsummary;