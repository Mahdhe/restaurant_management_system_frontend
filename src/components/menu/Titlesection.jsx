import React from "react";

function Titlesection(){
    const categories =["Mains","Desserts","Drinks"];


    return(
        <section  
        className="relative top-0 z-50 w-full min-h-[120px] pt-[48px] px-6 md:px-10 lg:px-[120px]  bg-main-gradient overflow-hidden">
<div
style={{
    position:"absolute",
    width:"600px",
    height:"600px",
    top:"0",
    right:"-150px",
    borderRadius:"50%",
    background:"rgba(41, 128, 185, 0.24)",
    filter:"blur(180px)",
    pointerEvents:"none",
}}
/>

    
    <div className="w-full  min-h-[72px] flex py-5  items-center gap-[48px]">
<div className=" w-full mx-auto h-8 flex items-center gap-2 opacity-100">

{/* chips */}
<button className="inline-flex h-8 w-fit items-center justify-center gap-[10px] rounded-full border border-[#E67E224D] bg-[#E67E224D] px-3 py-0">
<span className="block h-4 w-[46px] whitespace-nowrap font-dm text-xs font-[500] leading-none tracking-normal text-[#E67E22]"> Starters </span>
</button>

{categories.map((category)=> (
    <button 
    key={category}
    type="button"
    className="inline-flex h-8 w-fit min-w-[58px] items-center justify-center gap-[10px] rounded-full border border-[#FFFFFF14] px-3 py-0
    whitespace-nowrap font-dm text-xs font-[500] leading-none tracking-normal text-[#8A9BB0]" >
    {category}
    </button>
))}
</div>
    </div>



</section>
);
}
export default Titlesection;
