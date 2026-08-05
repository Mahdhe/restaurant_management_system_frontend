import React from "react";


{/* fourth section map */}
function ReserveTable(){

    return( 
<section
className="
relative
w-full
h-auto
min-h-105
lg:min-h-124.5
px-4
md:px-10
py-10
md:py-12
lg:py-18
gap-2.5
bg-main-gradient
overflow-hidden

"
>

{/* inner frame */}
<div
className="
relative
w-full
mx-auto

min-h-88.5
px-4
sm:px-6
lg:px-10
py-10
md:py-12
lg:py-18
flex
flex-col
gap-7.5
rounded-[20px]
border
border-[#E67E22]
overflow-hidden

"

style={{
    background:`
    radial-gradient(
    ellipse 70% 60% at center,
    rgba(41,128,185,0.12) 0%,
      rgba(41,128,185,0.05) 65%,
    transparent 100%
    )
   
    `,
}}
>
    <h1 className="
    w-full
    max-w-300
    h-auto
    mx-auto
    font-playfair
    font-semibold
    text-[28px]
    sm:text-[32px]
    lg:text-[40px]
    leading-9
    sm:leading-10.5
    lg:leading-12.5
    text-center
    text-white
    "
    >
Ready for an unforgettable dining experience?
    </h1>

    <p className="
    w-full
    max-w-163.5
    h-auto
    mx-auto
    font-dm
    font-normal
    text-[16px]
    sm:text-[18px]
    lg:text-[22px]
   leading-6
   sm:leading-7
   lg:leading-6.25
   text-center
   text-[#8A9BB0]

    "
    >  Reserve your table today and enjoy freshly prepared meals with 
exceptional service </p>



<div className="
w-full
max-w-148
h-auto
min-h-11
mx-auto
flex
flex-col
sm:flex-row
items-center
justify-center
gap-2.5
flex-wrap
"
> 
{/* buttons */}
<button
className="
w-32.75
h-11
px-4.5
py-2.5
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

"> Reserve </button>

<button
className="
w-27.75
h-11
px-4.5
py-2.5
 bg-[#243447]
 border
 border-[#FFFFFF24]
flex
 items-center
justify-center
gap-2
rounded-[10px]
 text-white
 text-[14px]
font-semibold 
hover:bg-[#2D4055] 
transition-colors
  "
>
  Cancel
</button>
</div>
</div>
</section>
    );
}

export default ReserveTable;