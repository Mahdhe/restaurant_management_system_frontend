

function CardItem({ description,title }) {
  return (
    <div
      className="
        relative flex w-full min-w-0 min-h-[146px]
        flex-col gap-[16px]
        rounded-[14px]
        border border-[#27AE60]
        bg-[#27AE601F]
        p-[20px]
      "
    >

      {/* box1-tick */}
      <div className="flex top-[12px] items-center justify-center left-[12px] w-[40px] h-[40px] rounded-full bg-[#3BB273]">
        <span className="text-[#FFFFFF] text-[18px] leading-none font-bold "> ✓ </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-end gap-[4px]">
        <span className="font-dm text-[20px] font-bold leading-[28px] tracking-[0.08em] text-[#FFFFFF] "
       
      >
          {title}
        </span>

        <p
          className="truncate font-dm text-[13px] font-semibold tracking-[0.08em] leading-[18px] text-[#556070]"
          
        >
          {description}
        </p>
      </div>
    </div>
   
  );
}


function CardItem2({boxnumber1,title,description,boxcolor}){
  return (
    <div className="flex min-w-0 items-start gap-[12px] flex-col">
    <div className={`flex top-[12px] items-center justify-center left-[12px] w-[40px] h-[40px] rounded-full ${boxcolor}`}>
        <span className="text-[18px] leading-none font-bold text-[#FFFFFF]">
          {boxnumber1}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-end gap-[4px]">
        <span className="font-dm text-[20px] font-bold leading-[28px] tracking-[0.08em] text-[#FFFFFF] "
       
      >
          {title}
        </span>

        <p
          className="truncate font-dm text-[13px] font-semibold tracking-[0.08em] leading-[18px] text-[#556070]"
          
        >
          {description}
        </p>
      </div>
</div>
  );
}



function Kpirow() {
  return (
    <section
      className="
        grid w-full min-w-0
        grid-cols-1 gap-[16px]
        sm:grid-cols-2
        xl:grid-cols-4 mt-[16px]
      "
    >
      <CardItem
        
        title="Pending"
        description="Request Received"
      />

      <CardItem
       
       title="Approved"
        description="Reservation Approved"
      />


 <div
      className="
        relative flex w-full min-w-0 min-h-[146px]
        flex-col gap-[16px]
        rounded-[14px]
        border border-[#F39C12]
        bg-[#F39C121F]
        p-[20px]
      "
    >

      <CardItem2

        boxnumber1="3"
        title="Seated"
        description="Waiting for Arrival"
        boxcolor="bg-[#F39C12]"
      />
      </div>


 <div
      className="
        relative flex w-full min-w-0 min-h-[146px]
        flex-col gap-[16px]
        rounded-[14px]
        border border-[#FFFFFF14]
        bg-[#243447]
        p-[20px]
      "
    >

      <CardItem2
       
        boxnumber1="4"
        title="Completed"
        description="After Dining ends"
        boxcolor="bg-[#1C2A38]"
       
      />
      </div>
    </section>
  );
}

export default Kpirow;