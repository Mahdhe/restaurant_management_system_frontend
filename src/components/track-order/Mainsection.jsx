import React from "react";

function Mainsection(){
    return(
        <section className="w-full min-h-[372px] px-6 md:px-10 lg:px-[120px] py-10 flex flex-col gap-[10px] opacity-100 md:py-[12] lg:py-[72px] bg-main-gradient" >
 <div className="relative w-full min-h-[228px] p-5  flex flex-col opacity-100 overflow-hidden"
 style={{
    background:`
    linear-gradient(
    180deg,
    rgba(15,25,35,0.2) 0%,
    rgba(16,29,41,0.2) 100%
    ),
    linear-gradient(
    0deg,
    var(--bg,#0F1923),
    var(--bg,#0F1923)
    )
    `,
 }}
 >

{/* ellipse one */}
<div 
style={{
    position:"absolute",
    width:"486px",
    height:"300px",
    top:"-80px",
    left:"50px",
    borderRadius:"50%",
    background:"rgba(230, 126, 34, 0.20)",
    filter:"blur(120px)",
    pointerEvents:"none",

}}
/>

<div
style={{
    position:"absolute",
    width:"415px",
    height:"275px",
    right:"-80px",
    bottom:"-100px",
    borderRadius:"50%",
    background:"rgba(41, 128, 185, 0.20)",
    filter:"blur(120px)",
    pointerEvents:"none",

}}
/>
<div className="relative z-10 w-full min-h-[162px] flex flex-col gap-[16px] opacity-100"> 
    <h2 className="mx-auto w-full max-w-[246px] min-h-[18px] font-dm font-[800] text-[22px] sm:text-[20px] lg:tetx-[22px] leading-[18px] tracking-0 text-center text-[#E67E22]">
        TRACK ORDER
    </h2>
<p className="mx-auto w-full max-w-[1160px] min-h-[81px] font-playfair font-[600] text-[32px] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[49px] lg:text-[56px] lg:leading-[53px] leading-[36px] tracking-normal text-center capitalize text-[#FFFFFF]">
    where’s your order?
</p>
</div>
</div>

        </section>
    );
}
export default Mainsection;
