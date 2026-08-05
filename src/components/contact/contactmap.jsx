import React from "react";


{/* third section map */}
function ContactMap(){

    return(    
<section
className="
w-full
 px-4
 md:px-10
min-h-150
py-10
lg:py-18
flex
flex-col
gap-2.5
bg-main-gradient
"
>

<div className="
w-full
mx-auto
px-4
md:px-10
h-70
sm:h-90
lg:h-113.75

flex
flex-col
gap-7.5
rounded-[20px]
overflow-hidden
 bg-cover
 bg-center
 bg-no-repeat
"

 style={{
    backgroundImage: "url('/images/map.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

</div>  

    </section>
    );
}
export default ContactMap;