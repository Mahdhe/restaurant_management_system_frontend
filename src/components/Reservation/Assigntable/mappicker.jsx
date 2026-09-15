const tablecolors={
    green:"border-[#27AE6073] bg-[#27AE601F] text-[#27AE60]",
    yellow:"border-[#F39C1273] bg-[#F39C121F] text-[#F39C12]",
    red:"border-[#E74C3C73] bg-[#E74C3C1F] text-[#E74C3C]",
    
};


function Tablebox({ tablename,status,color="green"}) {
    return(
        <div className={`flex h-[70px] w-[70px] flex-col items-center shrink-0 justify-center gap-[4px] rounded-[18px] border p-[10px] ${tablecolors[color]}`}
        >
            <span className="font-dm font-bold tracking-[0.08em] leading-none text-[17px]">
                {tablename}
            </span>

            <span className="font-dm font-bold tracking-[0.08em] leading-none text-[11px]">
                {status}</span>
        </div>
    );
}


function Mapcard({children,className=""}) {
    return(
        <div className={` relative w-full sm:w-[319px] min-w-0 min-h-[269px] rounded-[12px] bg-[#1C2A38] border border-[#FFFFFF14] pt-[55px] pl-[21px]  ${className}`}
        > {children} </div>
    );
}




function Mappicker(){
    return(
    <section className="w-full min-w-0 min-h-[736px] items-center justify-between border border-[#FFFFFF14] rounded-[14px] p-[20px] gap-[16px] bg-[#1C2A38] ">

<div className="flex w-full min-w-0 min-h-[29px] py-[3px] gap-[10px]">
    <h2 className="text-[18px] flex-1 min-w-0 font-bold font-dm tracking-normal leading-none text-[#F0F4F8]">
Floor Map Picker
    </h2>
    <span className="font-dm font-semibold text-[14px] tracking-normal leading-none text-[#556070] whitespace-nowrap">
Select a suitable frame
    </span>

</div>


<div className="flex flex-wrap w-full max-w-[697px] min-w-0 items-start content-start gap-[14px] min-h-[651px] bg-[#12202D] rounded-[14px] border border-[#FFFFFF24] border-dashed  py-[16px] px-[21px] mt-[16px]">
<Mapcard>
   <h3 className="absolute left-[24px] top-[22px] h-[14px] w-[58px] whitespace-nowrap font-dm font-semibold text-[11px] tracking-[0.08em] leading-none text-[#556070]">
        SECTION A
      </h3>

    <div className="flex flex-wrap gap-[4px]">
        <Tablebox 
        tablename="T01"
        status="2 seats"
        color="green"
        />
    
        <Tablebox 
        tablename="T02"
        status="38 min"
        color="red"
        />

        
        <Tablebox 
        tablename="T03"
        status="2 seats"
        color="yellow"
        />
    </div>
</Mapcard>

<Mapcard>
   <h3 className="absolute left-[24px] top-[22px] h-[14px] w-[58px] whitespace-nowrap font-dm font-semibold text-[11px] tracking-[0.08em] leading-none text-[#556070]">
        SECTION B
      </h3>

     <div className="flex flex-wrap gap-[4px]">
        <Tablebox 
        tablename="T01"
        status="2 seats"
        color="green"
        />
    
        <Tablebox 
        tablename="T02"
        status="38 min"
        color="red"
        />

        
        <Tablebox 
        tablename="T03"
        status="2 seats"
        color="yellow"
        />
    </div>
</Mapcard>

<div className="w-full min-w-0 relative min-h-[270px] border border-[#FFFFFF14] bg-[#1C2A38] rounded-[12px] px-[21px] pt-[55px] gap-[14px]">
 <h3 className="absolute left-[24px] top-[22px] h-[14px] w-[58px] whitespace-nowrap font-dm font-semibold text-[11px] tracking-[0.08em] leading-none text-[#556070]">
       OUTDOOR / SECTION C
      </h3>

 <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-[12px] sm:gap-[4px]">
        <Tablebox 
        tablename="T08"
        status="6 useats"
        color="green"
        />
    
        <Tablebox 
        tablename="T09"
        status="2 seats"
        color="yellow"
        />

        
        <Tablebox 
        tablename="T10"
        status="38 min"
        color="red"
        />

        <Tablebox 
        tablename="T11"
        status="2 seats"
        color="green"
        />

        <Tablebox 
        tablename="T12"
        status="2 seats"
        color="yellow"
        />
    </div>

</div>

</div>
    </section>
    );
}

export default Mappicker;

