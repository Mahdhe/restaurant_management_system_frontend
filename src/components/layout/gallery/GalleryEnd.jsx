import React from 'react'

const GalleryEnd = () => {
    return (
        <section className="w-full py-12 md:py-[72px] px-4 sm:px-8 md:px-[120px] flex flex-col gap-[10px] bg-[#0F1923]" >

            <div className="w-full max-w-[1400px] mx-auto rounded-[20px] border-[1px] border-[#E67E22] py-10 md:py-[72px] px-4 flex flex-col gap-[30px]"
                style={{
                     background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(56,84,130,0.35), transparent 70%)'
                }}
            >

                <div className="font-[Playfair_Display] font-semibold text-[26px] sm:text-[32px] md:text-[40px] leading-tight md:leading-[50px] tracking-[0%] text-center flex flex-col justify-center items-center text-[#FFFFFF]">
                    <h1 className="">Seen enough?</h1>
                    <h1 className="">Come experience it.</h1>
                </div>

                <div className="font-[DM Sans] text-[16px] sm:text-[19px] md:text-[22px] leading-snug md:leading-[25px] tracking-[0%] text-center flex flex-col justify-center items-center text-[#8A9BB0]">
                    <p className="">Photographs only tell half of the story - the rest is meant to be</p>
                    <p className="">tasted.</p>
                </div>


                <div className="flex justify-center ">
                    <button className="font-[DM Sans] font-bold text-[14px] leading-[100%] tracking-[0%] text-[#F0F4F8] bg-[#E67E22] p-4 rounded-xl">Reserve a Table</button>
                </div>

            </div>
        </section>
    )
}

export default GalleryEnd