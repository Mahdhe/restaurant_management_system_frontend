

function Heading(){


    return(
        <section
         className=" flex w-full min-w-0 min-h-[61px] flex-col  md:flex-row md:items-center md:justify-between gap-[16px] md:gap-[24px]">
        
            <div className="flex w-full min-h-[61px] flex-col gap-[4px]">
                <h2 className="w-full min-h-[36px] font-dm font-[600] text-[22px] sm:text-[24px] lg:text-[28px] text-[#F0F4F8] tracking-normal leading-none">
                    Reservation
                </h2>
                <p className="w-full min-h-[21px] font-dm font-[400] text-[16px] leading-none tracking-normal text-[#556070] ">
                    Manage guest reservations, table assignments, approvals, and booking status.
                </p>
            </div>

{/* buttons  */}
        <div className="flex w-full shrink-0 items-center gap-[12px] min-h-[40px] sm:w-auto">
        <button
        type="button"
         className="flex flex-1 max-w-[75px] min-h-[40px] gap-[8px] bg-[#E74C3C1F] justify-center items-center border border-[#E74C3C26] px-[16px] py-[8px] 
         opacity-100 rounded-[10px]  font-dm text-[#E74C3C] font-[600] text-[14px] leading-none tracking-normal cursor-pointer
         ">
           Reject
        </button>
      

        
        <button
        type="button"
         className="ml-auto flex min-h-[40px] gap-[8px] px-[16px] bg-[#27AE6026] justify-center items-center border border-[#27AE6026] py-[8px]
         opacity-100 rounded-[10px] text-[#27AE60] font-dm font-[600] text-[14px] leading-none tracking-normal cursor-pointer whitespace-nowrap
         ">
       Approve
        </button>
        </div>
       
        </section>
    );
}

export default Heading;