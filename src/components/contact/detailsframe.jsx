import React from "react";

function Detailsframe({ icon, title , value,className=""}) {
    return(

  <div className={`
  w-full
  max-w-md
  h-auto
  md:h-20.75
  flex
  items-start
  gap-5
  px-3
  pt-3
  pb-5
  border-b
  border-b-[#FFFFFF1A]
  ${className} `}
  >

    {/* icon */}
    <div className="w-10 h-10 rounded-lg bg-[#E67E221F] flex items-center justify-center shrink-0">
      {icon}
    </div>
    
    <div className="flex flex-col gap-1.5 w-full max-w-81 min-h-12.75">
      <h3 className="w-full max-w-81 h-6.25 font-playfair font-semibold text-[18px] leading-6.25 text-white
      "
      > {title} </h3>
      <p className="font-dm font-normal text-[12px] leading-5 text-[#8A9BB0]">
        {value}
      </p>
    </div>
  </div>


);
}
export default Detailsframe;