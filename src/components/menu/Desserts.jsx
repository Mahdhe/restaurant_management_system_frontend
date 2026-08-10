import React from "react";

function OrangeLine(){
    return (
    <div className="ml-4 h-px w-12 -mb-[4px] border-t border-[#E67E22]" />
    );
}
function MenuFrame({image,title,badge,description,price,children,

}) {
    return(
        <div className="flex min-h-[204px] w-full flex-col gap-8 border-b border-[#FFFFFF1A] pb-6 md:gap-10 lg:gap-[46px] md:flex-row md:items-start">
           <div className="w-full max-w-[190px] shrink-0  overflow-hidden h-[168px]  rounded-xl md:mx-0">
            
            <img src={image} alt={title}
            className="block h-full w-full object-cover object-center"/>
            </div> 

 {/* menu details with price*/}
     <div className="grid min-h-[85px] min-w-0 w-full flex-1 flex-col gap-3 sm:gap-5  grid-cols-[minmax(0,1fr)_auto]"> 
        <div className="flex min-h-[85px] min-w-0 w-full max-w-[833px] flex-1 flex-col items-start gap-5"> 

       {/* title and badge */}
        <div className=" flex min-h-10 max-w-[288px] items-center gap-3 sm:gap-4 lg:gap-5">
<h4 className="text-left mt-0 min-h-[25px] w-fit shrink-0 font-dm  font-[500] leading-[25px] tracking-[0.008em] sm:text-[28px] lg:text-[32px] text-[#FFFFFF] whitespace-normal md:whitespace-nowrap"> 
{title}
</h4>

{badge &&(
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E67E221F] bg-[#E67E220F]">

    <span className="flex min-h-[25px] min-w-[29px] items-center justify-center font-dm text-[22px] font-medium leading-[25px] tracking-[0.008em] text-[#E67E22]">
        
   {badge} 
   </span>
</div>
)}
</div>

{/* description */}
<p className="min-h-[25px] w-full  max-w-[448px] text-left font-dm text-base font-[400] leading-[25px] sm:leading-6 tracking-[0.008em] sm:text-xl lg:text-[22px]
 text-[#8A9BB0] whitespace-normal md:whitespace-nowrap gap-3 sm:gap-6 md:gap-10 lg:gap-[46px]">
{description}
</p>
  {children}
     </div>

   <span className=" m-0 self-center justify-self-end min-h-[25px] w-fit min-w-[111px] whitespace-nowrap text-center font-playfair text-xl font-normal leading-[25px] tracking-[0.008em] text-[#E67E22] md:text-right lg:text-right"> 
  
{price}
</span>
        </div>
        </div>
    );
}


function Desserts(){
    return(

<section className="relative w-full min-h-[747px] flex flex-col gap-10 opacity-100 py-10 px-6 md:px-10 lg:px-[120px] md:gap-12 md:py-14 lg:gap-[65px] lg:py-[72px] bg-main-gradient overflow-hidden"
        >

{/* inner frame first mains title */}
<div className="flex min-h-[106px] w-full flex-col gap-[30px] opacity-100"> 
<h3 className="w-full mt-0 ml-10  h-auto min-h-[18px] gap-[16px] 
font-dm font-[800] text-lg sm:text-xl  lg:text-[22px] leading-[18px] tracking-[0.04em] text-[#E67E22]">   03 - DESSERTS    </h3>

{/* To  begin content */}
<div className="w-full flex flex-col min-h-[58px] gap-[16px]">

    <div className="flex w-fit flex-col">
        <OrangeLine/>
     <h4 className="mt-0 flex h-auto min-h-[25px] w-fit min-w-[90px] whitespace-normal text-left font-playfair text-lg font-semibold
    leading-[25px] tracking-[0.008em] sm:text-xl lg:text-[22px] text-[#F0F4F8]">
To Finish
        </h4> </div>


<p className="min-h-[23px] w-full font-dm text-base font-normal leading-none tracking-[0.008em] opacity-100 sm:text-[17px] text-[#8A9BB0] lg:text-lg">
    Small, considered ways to close the evening. </p>   
</div>
</div>




{/* STARTERS images frame */}
<div className="flex min-h-[66px] w-full  flex-col gap-[24px] opacity-100"> 
   
    <div>
    <MenuFrame
    image="/menuimages/img7.png"
    title="Valrhona Tart"
    description="Dark chocolate, sea salt caramel, gold leaf."
    price="LKR 2,950"
/>
</div> 

<div>
<MenuFrame
    image="/menuimages/img8.png"
    title="Vanilla Bean Creme Brulee"
     badge="GF"
    description="Bone marrow butter, confit shallot, red wine jus."
     price="LKR 12,200"
/>
</div>

     </div>
    
        </section>
    );
}
 
export default Desserts;
 

        