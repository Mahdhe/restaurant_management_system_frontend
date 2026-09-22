


{/* third section map */}
function ContactMap(){

    return(    
<section
className="
w-full
 px-6
 md:px-10
 lg:px-[120px]

pt-10
pb-10
lg:pt-[72px]
lg:pb-[120px]

flex
flex-col
gap-2.5
bg-main-gradient
"
>

<div className="
w-full
h-70
sm:h-90
lg:h-[455px]
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