import React from 'react'

const HeroBottom = () => {
    return (

        <section className="w-full py-4 md:py-0 md:h-[92px] px-4 md:pl-[80px] md:pr-0 flex flex-col gap-[10px] bg-[#0F1923]" >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center">

                <div className="flex flex-wrap gap-[10px] p-[44px] items-center justify-center md:justify-start">

                    <button className="border-[1px] border-[#FFFFFF14] px-2 py-2 rounded-xl text-center font-[DM_Sans font-medium text-[12px] leading-[100%] tracking-[0%] text-[#E67E22]">None</button>
                    <button className="border-[1px] border-[#FFFFFF14] px-2 py-2 rounded-xl text-center font-[DM_Sans font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Birthday</button>
                    <button className="border-[1px] border-[#FFFFFF14] px-2 py-2 rounded-xl text-center font-[DM_Sans font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Anniversary</button>
                    <button className="border-[1px] border-[#FFFFFF14] px-2 py-2 rounded-xl text-center font-[DM_Sans font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Business</button>
                    <button className="border-[1px] border-[#FFFFFF14] px-2 py-2 rounded-xl text-center font-[DM_Sans font-medium text-[12px] leading-[100%] tracking-[0%] text-[#8A9BB0]">Proposal</button>

                </div>

                <div className="hidden md:block w-full h-full"
                  style = { {
                     background: 'radial-gradient(ellipse 80% 130% at 70% 100%, rgba(56,84,130,0.35), transparent 80%)'
                  }}
                >

                </div>

            </div>
        </section>
    )
}

export default HeroBottom