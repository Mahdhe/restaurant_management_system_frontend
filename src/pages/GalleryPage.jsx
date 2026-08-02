import React from 'react'

import GalleryBg from '../assets/galleryBG.jpg'

const GalleryPage = () => {

  return (

    <>
      <section className="w-[1440px] h-[3140px] bg-[#0F1923]">

        {/* Navbar */}

        <div className="w-[1440px] h-[617px] py-[72px] px-[120px] flex flex-col gap-[10px]">

            <div className="w-[1200px] h-[473px] text-[#0F1923] border-2 border-white bg-cover bg-center flex items-center justify-center"
             style={{ backgroundImage: 'url(${GalleryBg})' }}
             >

                <div className="w-[1200px] h-[473px] text-[#0F1923CC] flex items-center justify-center">

                    <div className="w-[1200px] h-[150px] pr-[40px] pl-[40px] flex flex-col gap-[16px] justify-center items-center">

                        <p className="w-[1120px] h-[18px] font-[DM_Sans] font-extrabold text-[22px] leading-[18px] text-[#E67E22] text-center">THE GALLERY</p>
                        <h1 className="w-[1120px] h-[80px] font-[Playfair_Display] font-semibold text-[56px] leading-[80px] text-center text-[#FFFFFF]">Every Tables tells a Story</h1>
                        <p className="w-[1120px] h-[20px] font-[Playfair_Display] font-bold text-[24px] leading-[20px] text-center text-[#F0F4F8]">Afew details, and your evening at Versailles is set</p>
                    </div>
                </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default GalleryPage
