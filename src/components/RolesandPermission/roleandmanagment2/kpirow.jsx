

function CardItem({ title, number, description,descriptionColor }) {
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
        <span className="font-dm text-[28px] font-bold leading-none text-[#F0F4F8]"
        
      >
          {number}
        </span>

         <p
          className={`truncate font-dm text-[12px] font-semibold leading-[16px] ${
            descriptionColor 
          }`}
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
        title="CUSTOM ACCESS"
        number="12"
        description="+3 this week"
        descriptionColor="text-[#3BB273]"
        
      />

      <CardItem
        title="INACTIVE ROLES"
        number="2"
        description="Review needed !"
        descriptionColor="text-[#E74C3C]"
        
      />

      <CardItem
        title="SECURITY ALERTS"
        number="5"
        description="Needs attention"
       descriptionColor="text-[#E74C3C]"
        
      />

      <CardItem
        title="PERMISSION USAGE"
        number="98%"
        description="Optimized"
        descriptionColor="text-[#3BB273]"
        
      />
    </section>
  );
}

export default Kpirow;