import React from "react";

// input field
function InputField({ type="text", placeholder,name}) {
    return(
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-10 w-full rounded-[10px] border border-[#FFFFFF24] gap-[8px] bg-transparent px-3 py-2 font-dm text-[14px] 
  placeholder:font-dm placeholder:text-[14px] placeholder:leading-none placeholder:tracking-normal text-[#8A9BB0]
        "
        />
    );
}


function Orderdetails(){
    return(
        <section className="relative w-full min-h-[436px] px-6 md:px-10 lg:px-[120px] py-10 flex flex-col gap-[48px] opacity-100 md:py-[12] lg:py-[72px] bg-main-gradient overflow-hidden" >
    
    <div
style={{
    position:"absolute",
    width:"600px",
    height:"600px",
    right:"-80px",
    bottom:"-100px",
    borderRadius:"50%",
    background:"rgba(41, 128, 185, 0.30)",
    filter:"blur(200px)",
    pointerEvents:"none",

}}
/>

<div className="w-full min-h-[292px] flex flex-col gap-4 rounded-[14px] border border-[#E67E221F] bg-[#1C2A38] px-5 py-5 sm:px-[30px]">
<div className="w-full min-h-[60px] flex flex-col items-center gap-[10px] opacity-100">
    <h2 className="w-full min-h-[25px] font-playfair font-[600] text-[24px] leading-[25px] tracking-normal sm:text-[28px] lg:text-[32px] text-[#FFFFFF]">
Find Your Order
    </h2>

<p className="w-full min-h-[25px] font-dm text-[14px] font-[400] leading-[25px] tracking-normal  text-[#8A9BB0]">
Enter your order number and phone to view live status - no account required.</p>
</div>

<div className="w-full mx-auto min-h-[176px] gap-[10px] p-[10px] flex flex-col">
    <div className="w-full  min-h-[86px] gap-4 md:flex-row md:gap-3 py-[10px] flex flex-col ">
       

        <div className="flex flex-col w-full md:max-w-[554px] min-h-[66px] gap-[8px]">
<label className="min-h-[18px] w-fit font-dm font-semibold text-[14px] leading-none tracking-normal text-[#F0F4F8]">
    Order Number
</label>
<InputField
placeholder="e.g. VRS-10234"
/>

</div>

    <div className="flex flex-col w-full  min-h-[66px] gap-[8px]">
<label className="min-h-[18px] w-fit font-dm font-semibold text-[14px] leading-none tracking-normal text-[#F0F4F8]">
    Phone Number
</label>
<InputField
placeholder="+94 77 123 4567"
/>

</div>

</div>

{/* button */}
<div className="flex min-h-[60px] flex-col py-[10px]">
    <button
className="
w-full
mx-auto
h-[40px]
px-[16px]
py-[8px]
 bg-[#E67E22]
flex
items-center
justify-center
gap-2
rounded-[10px]
 text-white
 text-[14px]
font-semibold 
hover:bg-[#d96f16] 
transition-colors

"> Track Order </button>
</div>

</div>
</div>


    </section>
    );
}

export default Orderdetails;