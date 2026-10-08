

function CardItem({ title, number, description}) {
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

      <div className="flex flex-col mt-[8px] h-[56px] gap-[12px]">
        <span className="font-dm text-[28px] font-bold leading-none text-[#F0F4F8]">
      
          {number}
        </span>

        <p
          className="truncate font-dm text-[12px] font-semibold h-[16px] text-[#3BB273]">
         
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
        title="TOTAL ROLES"
        number="7"
        description="2 custom roles"
        numbercolor= "text-[#27AE60]"
      />

      <CardItem
        title="ACTIVE USERS"
        number="48"
        description="+4 this month"
        numbercolor="text-[#E67E22]"
      />

      <CardItem
        title="ADMIN USERS"
        number="3"
        description="All active"
        numbercolor="text-[#F0F4F8]"
      />

      <CardItem
        title="CUSTOM ROLES"
        number="2"
        description="+ Add more"
        numbercolor="text-[#E74C3C]"
      />
    </section>
  );
}

export default Kpirow;