import React from 'react'

const MainHero = () => {
    return (
        <section className="w-full bg-[#0F1923] py-16 px-6 sm:px-12 lg:px-[120px]">
            <div className="relative mx-auto overflow-hidden text-center w-full max-w-[1200px] min-h-[356px] p-5 sm:p-10 rounded-xl items-center flex"
                style={{
                    background:
                        "radial-gradient(50% 130% at 15% 50%, rgba(230, 126, 34, 0.18) 0%, rgba(15, 25, 35, 1) 90%, rgba(41, 128, 185, 0.16) 150%)",
                }}
            >


                <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4" >
                    <p className="font-[DM_Sans] text-[22px] leading-[18px] sm:text-base font-extrabold uppercase tracking-[0.25em] text-[#E67E22] tracking-normal">
                        Reservations 
                    </p>

                    <h1 className="font-[Playfair_Display] text-[56px] sm:text-5xl lg:text-[56px] font-semibold leading-[53px] text-[#FFFFFF] tracking-normal">
                        Reserve your Table
                    </h1>

                    <p className="font-[Playfair_Display] text-[24px] sm:text-lg lg:text-[22px] font-bold leading-[20px] text-[#F0F4F8] tracking-[0%] pt-3">
                        A few details, and your evening at Versailles is set
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MainHero