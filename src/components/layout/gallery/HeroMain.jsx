import React from 'react'
import bg from '../../../assets/galleryBG.jpg'

const HeroMain = () => {
  return (
    
    <section className="w-full py-12 md:py-[72px] px-4 sm:px-8 md:px-[120px] flex flex-col gap-[10px] bg-[#0F1923]" >

            <div className="w-full max-w-[1400px] h-[400px] sm:h-[473px] mx-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="w-full h-full bg-[#0F1923CC] mx-auto flex flex-col items-center justify-center">

                    <div className="w-full max-w-[1200px] flex flex-col items-center gap-[16px] px-4 sm:px-8 md:px-[40px]">

                        <p className="font-[DM_Sans] font-extrabold text-[16px] sm:text-[22px] leading-[18px] tracking-[0%] text-center text-[#E67E22]" >THE GALLERY</p>

                        <h1 className="font-[Playfair_Display] font-semibold text-[32px] sm:text-[42px] md:text-[56px] leading-tight md:leading-[80px] tracking-[0%] text-[#FFFFFF] text-center">Every Tables tells a Story</h1>

                        <p className="font-[Playfair_Display] font-bold text-[16px] sm:text-[20px] md:text-[24px] leading-snug md:leading-[20px] tracking-[0%] text-center text-[#F0F4F8]">A few details, and your evening at Versailles is set</p>

                    </div>
                </div>

            </div>
        </section>

  )
}

export default HeroMain