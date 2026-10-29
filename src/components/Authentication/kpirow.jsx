

function CardItem({ title, number, description,progress,barColor}) {
  return (
    <div
      className="
        flex w-full min-w-0 min-h-[120px]
        flex-col
        rounded-[14px]
        border border-[#FFFFFF14]
        bg-[#1C2A38]
        p-[16px]
      "
    >
      <h3 className="font-dm text-[11px] font-semibold leading-[14px] min-h-[14px] tracking-[0.08em] text-[#8A9BB0]">
        {title}
      </h3>

      <div className="flex flex-col mt-[8px] min-h-[70px] gap-[12px]">
        <span className="font-dm text-[28px] font-bold leading-none text-[#F0F4F8]">
      
          {number}
        </span>

        <p
          className="truncate font-dm text-[12px] font-semibold h-[16px] text-[#556070]">
         
          {description}
        </p>

        {/* Progress Bar */}
        <div className="min-h-[10px] w-full overflow-hidden rounded-full bg-[#5560704D]">
          <div
           className={`h-full  rounded-full ${barColor}`}
           style={{width:`${progress}%`}}
            />
          </div>
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
        title="TOTAL LOGIN ATTEMPTS"
        number="2, 456"
        description="Across all branches this week"
        numbercolor= "text-[#27AE60]"
        barColor="bg-[#E67E22]"
        progress={80}
      />

      <CardItem
        title="FAILED LOGINS"
        number="24"
        description="Security review recommended"
        numbercolor="text-[#E67E22]"
        barColor="bg-[#E74C3C]"
        progress={40}
      />

      <CardItem
        title="ACTIVE SESSIONS"
        number="86"
        description="Currently online across branches"
        numbercolor="text-[#F0F4F8]"
        barColor="bg-[#3BB273]"
        progress={80}
      />

      <CardItem
        title="LOCKED ACCOUNTS"
        number="3"
        description="Awaiting admin unlock"
        numbercolor="text-[#E74C3C]"
        barColor="bg-[#E67E22]"
        progress={20}
      />
    </section>
  );
}

export default Kpirow;