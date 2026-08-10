import React from "react";

function Herosection(){
    return(
        <section
        className="
        w-full
        min-h-[617px]
        px:6 
        md:px-10
         lg:px-[120px]
        py-10
        md:py-12
        lg:py-[72px]
        bg-main-gradient
        "
        >
    <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[473px] overflow-hidden"> 
        <img src="/menuimages/menubanner.jpg" alt="menu banner" 
        className="absolute inset-0 w-full h-full object-cover"
            />
        
        <div
  style={{
    position: "absolute",
    inset: 0,
    background: "rgba(15, 25, 35, 0.8)",
  }}
/>

{/* titles frame */}
<div className="absolute z-10 top-8 sm:top-12 md:top-16 lg:top-[116px] left-0 w-full
px-4 sm:px-6 md:px-8 lg:px-[40px] flex flex-col gap-4">

    <h2 className="w-full max-w-[1120px] h-auto text-lg md:text-xl lg:text-[22px] leading-[18px]  font-dm font-semibold tracking-[0] text-[#E67E22]">
OUR MENU
    </h2>
    <p className="w-full max-w-280 h-auto text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[57px] tracking-normal font-playfair font-[600] text-[#FFFFFF]">
        Seasonal, considered, <br />
served with care.
    </p>
</div>
 </div>       
        </section>
    )
}


export default Herosection;