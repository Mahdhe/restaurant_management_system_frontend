// import React from "react";

// function Cartitems({title,number,description,numbercolor}){
//     return(
//         <div className="flex w-full min-w-0 min-h-[120px] flex-col gap-[8px] rounded-[14px] border border-[#FFFFFF14] bg-[#1C2A38] p-[16px]">
// <div className="w-full min-h-[14px] gap-[10px]">
//     <h3 className="text-[11px] font-dm font-[600] leading-none tracking-[0.08em] text-[#8A9BB0]">
//         {title}
//     </h3>
// 
// <div className="flex min-w-0 flex-col justify-end gap-[4px]">
//     <div className="font-dm font-[700] text-[28px] leading-none tracking-[0.08em] text-[#F0F4F8]">
//         {number}
//     </div>
// <p className="font-dm font-[600] text-[12px] leading-none tracking-[0.08em] text-[#2980B9] whitespace-nowrap">
// {description}
// </p>
// </div>
//         </div>
//     );
// }


// function Kpirow(){
//     return(
//         <section 
//         className="flex w-full min-h-[120px] rounded-[14px]  py-5 border border-[#0F1923] gap-2 sm:gap-3 md:gap-4 justify-between">
// <Cartitems
// title="TOTAL TODAY"
// number="32"
// description="18 Seated / Upcoming"
// />

// <Cartitems
// title="TOTAL TODAY"
// number="32"
// description="18 Seated / Upcoming"
// />
// <Cartitems
// title="TOTAL TODAY"
// number="32"
// description="18 Seated / Upcoming"
// />
// <Cartitems
// title="TOTAL TODAY"
// number="32"
// description="18 Seated / Upcoming"
// />
//         </section>
//     );
// }

// export default Kpirow;


import React from "react";

function CardItem({ title, number, description, descriptionColor,numbercolor }) {
  return (
    <div
      className="
        flex w-full min-w-0 min-h-[120px]
        flex-col gap-[8px]
        rounded-[14px]
        border border-[#FFFFFF14]
        bg-[#1C2A38]
        p-[16px]
      "
    >
      <h3 className="font-dm text-[11px] font-semibold leading-[14px] tracking-[0.08em] text-[#8A9BB0]">
        {title}
      </h3>

      <div className="flex min-w-0 flex-1 flex-col justify-end gap-[4px]">
        <span className={`font-dm text-[28px] font-bold leading-none ${
          numbercolor
        }`
      }
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
        title="TOTAL TODAY"
        number="32"
        description="18 Seated / Upcoming"
        descriptionColor="text-[#2980B9]"
        numbercolor= "text-white"
      />

      <CardItem
        title="PENDING"
        number="6"
        description="Need approval"
        descriptionColor="text-[#F39C12]"
        numbercolor="text-[#F39C12]"
      />

      <CardItem
        title="APPROVED"
        number="22"
        description="Tables Ready"
        descriptionColor="text-[#27AE60]"
        numbercolor="text-[#27AE60]"
      />

      <CardItem
        title="REJECTED TODAY"
        number="4"
        description="Capacity conflict"
        descriptionColor="text-[#E74C3C]"
        numbercolor="text-[#E74C3C]"
      />
    </section>
  );
}

export default Kpirow;