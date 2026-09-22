

function CardItem({ title, number, description,numbercolor }) {
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

      <div className="flex flex-col mt-[8px] h-[56px] gap-[8px]">
        <span className={`font-dm text-[28px] font-bold leading-none ${
          numbercolor 
        }`
      }
      >
          {number}
        </span>

        <p
          className="truncate font-dm text-[12px] font-semibold h-[16px] text-[#F0F4F8]">
         
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
        title="ACTIVE COUPONS"
        number="18"
        description="Currently usable "
        numbercolor= "text-white"
      />

      <CardItem
        title="USED TODAY"
        number="86"
        description="Transactions"
        numbercolor="text-[#F39C12]"
      />

      <CardItem
        title="DISCOUNT GIVEN"
        number="LKR 18K"
        description="LKR 18K"
        numbercolor="text-[#27AE60]"
      />

      <CardItem
        title="EXPIRED"
        number="4"
        description="Need review"
        numbercolor="text-[#E74C3C]"
      />
    </section>
  );
}

export default Kpirow;