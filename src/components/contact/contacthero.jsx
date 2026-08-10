import React  from "react";

function ContactHero(){
    return(
        
          <section

className="
relative
w-full
px-6
md:px-10
lg:px-[120px]
min-h-125
md:h-151.75
overflow-hidden
bg-main-gradient

">


  {/* ellipse one */}
  <div
  style={{
    position: "absolute",
    width: "623px",
    height: "651px",
    top: "-300px",
    left: "20%",
    transform: "translate(-50%,50%)",
    borderRadius: "50%",
    background: "rgba(230, 126, 34, 0.18)",
    filter: "blur(220px)",
    zIndex: 0,
    pointerEvents: "none",
  }}
/>

  {/* ellipse two */}
  <div
    style={{
      position: "absolute",
      width: "600px",
      height: "600px",
      top: "-100px",
      left: "840px",
      borderRadius: "50%",
      background: "rgba(41, 128, 185, 0.14)",
      filter: "blur(260px)",
      pointerEvents: "none",
    }}
  />


  <div
  className="
  relative
  z-10
  w-full
  min-h-125
  lg:h-147
  lg:py-18
  pt-20
  sm:pt-24
  lg:pt-18
  pb-10
  lg:pb-18
  flex
  flex-col
  items-center
  gap-8
  lg:gap-12
  
  ">
            
<div
  className="
    relative
    z-10
    w-full
    
    h-auto
    sm:h-95
    lg:h-125.75

    lg:pt-18
    bg-cover
    bg-center

    flex
    flex-col
    items-center
    gap-4
    lg:gap-2.5
    overflow-hidden
  
  " 
  
    
  style={{
    backgroundImage: `
      linear-gradient(
      0deg,
        rgba(15,25,35,0.8),
        rgba(15,25,35,0.8)
      ),
      

      url('/images/suggest 2.png')
 
   `,
   

  }}
>


   

<div className="
flex flex-col gap-4 lg:gap-5 w-full">


  <h1 className="w-full  text-[#F0F4F8]  text-3xl sm:text-4xl lg:text-[56px] leading-tight lg:leading-[80px] font-extrabold text-center tracking-[0.008em]"
  style={{
    fontFamily:"Playfair-Display",
  }}

  >
    Get In Touch
  </h1>

  <p className="w-full  text-[#FFFFFF] text-base sm:text-xl lg:text-[24px] leading-6 lg:leading-[26px] font-bold text-center tracking-[0.008em] px-2"
    style={{
    fontFamily:"Playfair-Display",
  }}
  >
We’d love to hear from you. Reserve a table, ask a question, or 
simply say hello.
  </p>
</div>
</div>
</div>    
 </section>
    );
}
export default ContactHero;
