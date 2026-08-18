
function Alertbanner(){
    return(
        <section className="flex min-w-0 min-h-[64px] items-center gap-3 rounded-[14px] border border-[#F39C1273] bg-[#F39C1214] px-[20px] py-[16px] mt-[16px] md:flex-row sm:gap-4 md:gap-[24px]">

<div className="flex min-h-[38px] min-w-0 flex-1 items-center gap-[10px] p-[10px]">
    <h2 className="font-dm font-[600] text-[14px] text-[#F39C12] leading-none tracking-normal">
       <span className="text-[16px] min-h-[16px] max-w-[14px]"> ⚠ </span> 3 reservations need table assignment before 8:30 PM.
    </h2>
</div>

<button className="flex min-h-[40px] items-center shrink-0 justify-center rounded-[10px] border border-[#556070] sm:w-[110px]
font-dm font-semibold text-[14px] tracking-normal leading-none text-[#556070] gap-[8px]">
Assign Now
</button>
        </section>
    );
}

export default Alertbanner;