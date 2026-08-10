import React from "react";

import locationIcon from "../../assets/icons/Vector.svg";
import Phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg"
import clock from "../../assets/icons/clock.svg";

import Detailsframe  from "./detailsframe";

{/* second section */}
function ContactSection(){
    return(
  <section
    className="
    relative
    w-full
    px-6
    md:px-10
    lg:px-[120px]
    h-auto
    lg:min-h-177.75
    py-10
    lg:py-18
    bg-main-gradient
    isolate
      "
    >

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
    background: "rgba(230, 126, 34, 0.28)",
    filter: "blur(250px)",
    zIndex: 0,
    pointerEvents: "none",
  }}
/>



{/* hero content second*/}
<div
className="
relative
w-full
h-auto
lg:h-full
z-10
flex
flex-col
lg:flex-row
gap-8
lg:gap-12
"
>

 <div
 className="
 w-full
  max-w-156
  h-auto
  min-h-105
  sm:min-h-125
  lg:min-h-141.75
  px-5
  sm:px-6
  lg:px-7.5
  py-5
  flex
  flex-col
  gap-4
  rounded-[14px]
  border
  border-[#E67E22]
  "
>

{/* heading */}
<div 
className="
 w-full
 max-w-141
 h-auto
 min-h-12.75
 px-2.5
 flex
 gap-2.5
 items-center
 justify-center
 "
> 
 <h2 className="
 w-full max-w-113.5 text-[40px] text-white font-playfair leading-[25px] font-semibold  text-center"
 
 >
Send us a message
</h2>
</div>

{/* frame 112 */}
<div className="
w-full
max-w-141
h-auto
min-h-115
p-2.5
flex
flex-col
gap-2.5
"
>  

{/* frame 113 */}
<div className="
w-full
max-w-136
h-auto
py-2.5
flex
flex-col
sm:flex-row
gap-3
"
> 
{/* first name */}
<div className="w-66.5 h-16.5 flex flex-col gap-2">
<label className="w-18.25 h-4.5  text-[14px] text-[#F0F4F8] leading-[100%] font-semibold tracking-[0%]">
First Name
</label>
<input 
type="text"
placeholder="John Doe"
className="
w-66.5
h-10
py-2
px-3
rounded-[10px]
bg-transparent
border
border-[#FFFFFF24]
text-[#F0F4F8]
outline-none


placeholder:text-[#8A9BB0]
placeholder:text-sm
placeholder:font-normal
placeholder:text-[14px]
placeholder:leading-[100%]
placeholder:tracking-[0%]
"
/>
</div>

{/* email */}
<div className="w-66.5 h-16.5 flex gap-2 flex-col">
<label className=" text-sm text-[#FFFFFF] leading-[100%] font-semibold tracking-[0%]">
Email Address
</label>
<input 
type="text"
placeholder="John@example.com"
className="
w-66.5
h-10
py-2
px-3
rounded-[10px]
border
border-[#FFFFFF24]
text-[#F0F4F8]
bg-transparent
outline-none

placeholder:text-[#8A9BB0]
placeholder:text-sm
placeholder:font-normal
placeholder:text-[14px]
placeholder:leading-[100%]
placeholder:tracking-[0%]
"
/>
</div>

 </div>

<div className="
w-full
max-w-136
h-auto
py-2.5
flex
flex-col
sm:flex-row
gap-3
"
> 


{/* Phone Number */}
<div className="w-full h-16.5 flex gap-2 flex-col">
<label className=" text-sm text-[#FFFFFF] leading-[100%] font-semibold tracking-[0%]">
Phone Number
</label>
<input 
type="text"
placeholder="+94 77 123 4567"
className="
w-66.5
h-10
py-2
px-3
rounded-[10px]
border
border-[#FFFFFF24]
text-[#F0F4F8]
bg-transparent
outline-none


placeholder:text-[#8A9BB0]
placeholder:text-sm
placeholder:font-normal
placeholder:text-[14px]
placeholder:leading-[100%]

"
/>
</div>

{/* subject */}
<div className="w-full h-16.5 flex gap-2 flex-col">
<label className="text-sm text-[#F0F4F8] leading-[100%] font-semibold tracking-[0%]">
Subject
</label>
<input 
type="text"
placeholder="Reservation Enquiry"
className="
w-66.5
h-10
py-2
px-3
rounded-[10px]
border
border-[#FFFFFF24]
text-[#F0F4F8]
bg-transparent
outline-none

placeholder:text-[#8A9BB0]
placeholder:text-sm
placeholder:font-normal
placeholder:text-[14px]
placeholder:leading-[100%]
placeholder:tracking-[0%]
"
/>
</div>

</div>

{/* message */}
<div 
className="
w-full
max-w-136
mx-auto
flex
flex-col
gap-2 


" 
>
<label className="text-sm text-[#FFFFFF] leading-[100%] font-semibold">
Message
</label>

<textarea
type="text"
placeholder="Tell us How we can help...."
className="
w-full
max-w-136
h-32
py-2
px-3
rounded-[10px]

border
border-[#FFFFFF24]
text-[#F0F4F8]
bg-transparent
outline-none
resize-none


placeholder:text-[#8A9BB0]
placeholder:text-sm
placeholder:font-normal
placeholder:text-[14px]
placeholder:leading-4.5
"
/>
   </div>


<div 
className="
w-full
max-w-136
min-h-21
flex
gap-2
items-center
sm:gap-2.5
px-4
py-4
sm:px-4
sm:py-5
box-border "
> 


<button className="
w-full
min-h-11
rounded-[10px] 
bg-[#E67E22]
px-4.5
py-2.5
text-sm
flex
items-center
justify-center
gap-2

text-[#F0F4F8]
font-semibold
tracking-normal
leading-none
"
> Send message </button>
</div>
</div>

</div> 



{/* right frame resturant information*/}
  <div className="  
  relative
  w-full
  max-w-132
  h-141.75
  px-5
  py-8
  lg:py-12.5
  lg:px-10
  flex
  flex-col
  gap-5
  border-t
  lg:border-t-0
 border-l
border-l-[#FFFFFF1A]


  ">

    {/* ellipse second */}
    <div 
style={{
  position:"absolute",
  width:"600px",
  height:"600px",
  top:"-100px",
  right:"-80px",
  borderRadius:"50%",
  background:"rgba(41, 128, 185, 0.36)",
  filter:"blur(220px)",
  pointerEvents:"none",
  zIndex:0,
}}
/>
<div className="
w-full
min-h-15
flex
items-center
gap-2.5
py-2.5
"
> 
<h2 className="
w-full
h-10
font-semibold
text-28px
sm:text-[34px]
lg:text-[40px]
leading-tight
text-center
text-[#FFFFFF]
font-playfair
"

 > Restaurant Information </h2> </div>

<div 
className="w-full max-w-md min-h-95.5 flex flex-col gap-2.5">
{/* inner frame */}
<Detailsframe 
icon = {
<img 
src={locationIcon}
alt="location"

/> 
}
title="Address"
value="No. 24, Dehiwala ,Colombo 11  .Open Mon-sun, 8AM - 12PM"
/>

<Detailsframe
icon = {
<img 
src={Phone}
alt="location"

/> 
}
title="Phone"
value="+94 77 123 4567"
/>

<Detailsframe
icon = {
<img 
src={mail}
alt="location"

/> 
}
title="Email"
value="hello@restaurant.com"
/>


<Detailsframe
icon = {
<img 
src={clock}
alt="opening Hours"
/> 
}

title="Opening Hours"

value={
  <>
  <p>Monday - Friday:  11:00 AM - 10:00 PM</p>
<p>Saturday - Sunday: 10:00 AM - 11:PM</p>

</>
}
className="h-auto min-h-25.75  border-b
  border-b-[#FFFFFF1A]"
/>
  </div>
  </div>
 </div>
</section>
);
}
export default ContactSection;