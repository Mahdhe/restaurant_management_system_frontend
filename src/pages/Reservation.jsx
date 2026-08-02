import React from 'react'

const Reservation = () => {
    return (

        <>

            <section className="w-[1440px] h-[500px] bg-[#0F1923] py-[72px] px-[120px] sm:px-8">

                <div className="relative mx-auto overflow-hidden text-center w-[1200px] h-[356px] p-[20px] bg-[#0F1923]"

                    // style={{
                    //   background: "radial-gradient(120% 140% at 12% 25%, rgba(230, 126, 34, 0.18) 0%, rgba(15, 25, 35, 1)42%, rgba(41, 128, 185, 0.16) 75%)",
                    // }}

                    style={{
                        background: "radial-gradient(50% 130% at 12% 50%, rgba(230, 126, 34, 0.18) 0%, rgba(15, 25, 35, 1)90%, rgba(41, 128, 185, 0.16) 150%)",
                    }}

                >

                    {/* subtle vignette / border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />

                    <div className="flex items-center justify-center">
                        <div className="w-[1160px] h-[162px] gap-4 flex flex-col items-center justify-center text-center">

                            <p className="relative font-[DM_Sans] text-[22px] font-extrabold leading-[18px] text-[#E67E22]">
                                RESERVATIONS
                            </p>

                            <h1 className="relative font-[Playfair_Display] text-[56px] font-semibold text-[#FFFFFF] leading-[53px] sm:text-5xl">
                                Reserve your Table
                            </h1>

                            <p className="relative mt-4 font-[Playfair_Display] font-bold text-[24px] text-[#F0F4F8] leading-[20px] sm:text-base">
                                A few details, and your evening at Versailles is set
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            {/* 2nd Hero */}

            <section className="flex w-[1440px] h-[916px] bg-[#0F1923] gap-[10px] sm:px-8" >

                <div className="grid grid-cols-3 w-[1440px] h-[916px] pl-[95px] pr-[150px] py-[72px] gap-5 ">

                    <div className="col-span-2 bg-[#1C2A38] rounded-xl p-3">

                        <h1 className="font-[Playfair_Display] text-[#FFFFFF] text-[32px] font-semibold ledding-[25px] ">Book Your table</h1>

                        <p className="text-[#8A9BB0] text-[14px] ledding-[25px]">No account needed - confirmation is sent directly to you phone</p>

                        <div className="flex gap-1 py-[5px] ">

                            <div className="bg-[#F39C12] h-[4px] w-1/3 rounded"></div>
                            <div className="bg-[#F39C12] h-[4px] w-1/3 rounded"></div>
                            <div className="bg-[#8A9BB0] h-[4px] w-1/3 rounded"></div>

                        </div>

                        <div className="flex justify-between w-Fill h-[86px] py-[10px] gap-[12px]">

                            <div className="w-Fill h-Hug gap-[8px] flex-row">
                                <h1 className="w-[32px] h-[18px] text-[#F0F4F8] text-[14px] font-semibold ledding-[100%]">Date</h1>
                                <input type="date" className="w-Fill h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex text-[#FFFFFF24]" />
                            </div>

                            <div className="w-Fill h-Hug gap-[8px] flex-row">
                                <h1 className="w-[32px] h-[18px] text-[#F0F4F8] text-[14px] font-semibold ledding-[100%]">Time</h1>
                                <input type="dropdown" className="w-Fill h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex text-[#FFFFFF24]" />
                            </div>

                            <div className="w-Fill h-Hug gap-[8px] flex-row">
                                <h1 className="w-[32px] h-[18px] text-[#F0F4F8] text-[14px] font-semibold ledding-[100%]">Guests</h1>
                                <input type="dropdown" className="w-Fill h-[40px] rounded-[10px] border-[1px] py-[8px] px-[12px] gap-[8px] flex text-[#FFFFFF24]" />
                            </div>


                        </div>

                        <div className="w-[640px] h-[60px] flex-rows gap-[10px]">

                            <h1 className="w-[151px] h-[18px] font-semibold text-[14px] ledding-[100%] text-[#FFFFFF]">Occasion  (OPTIONAL) </h1>

                            <div className="flex flex-wrap w-[398px] h-[32px] gap-[8px]">

                                <button className="border rounded-2xl px-2 py-1">hjgasds</button>
                                <button className="border rounded-2xl px-2 py-1">hjgasds</button>
                                <button className="border rounded-2xl px-2 py-1">hjgasds</button>
                                <button className="border rounded-2xl px-2 py-1">hjgasds</button>
                                <button className="border rounded-2xl px-2 py-1">hjgasds</button>

                            </div>
                        </div>

                        <form action="">

                            <div className="flex gap-[12px] justify-between w-[640px] h-[86px] py-[10px]">

                                <div className="w-[314px] h-[66px] gap-[8px]">
                                    <h1 className="w-[67px] h-[18px] font-semibold text-[14px] ledding-[100%] text-[#F0F4F8]">Full Name</h1>
                                    <input type="text" className="w-[314px] h-[40px] border-[1px] rounded-[10px] py-[8px] px-[12px] border-[#FFFFFF24]" placeholder='Your name' />
                                </div>

                                <div className="w-[314px] h-[66px] gap-[8px]">
                                    <h1 className="w-[100px] h-[18px] font-semibold text-[14px] ledding-[100%] text-[#F0F4F8]">Phone Number</h1>
                                    <input type="text" className="w-[314px] h-[40px] border-[1px] rounded-[10px] py-[8px] px-[12px] border-[#FFFFFF24]" placeholder='+94 77 123 4567' />
                                </div>



                            </div>

                            <div className="w-[640px] h-[86px] py-[10px] flex flex-col gap-[12px] ">
                                <h1 className="w-[96px] h-[18px] font-[DM_Sans] font-[semibold] text-[14px] leading-[100%] text-[#F0F4F8]">Email Address</h1>
                                <input type="email" className="w-[640px] h-[40px] rounded-[10p] border-[1px] py-[8px] px-[12px] flex flex-col gap-[8px] text-[#FFFFFF24]" placeholder='Your@example.com' />
                            </div>

                            <div className="w-[640px] h-[154px] flex flex-col gap-[8px]">
                                <h1 className="w-[299px] h-[18px] font-[DM_Sans] font-semibold text-[14px] leading-[100%] text-[#F0F4F8]" >Special Requests (OPTIONAL)</h1>
                                <input type="email" className="w-[640px] h-[128px] rounded-[10p] border-[1px] py-[8px] px-[12px] flex flex-col gap-[8px] text-[#FFFFFF24]" placeholder='Dietary needs, Seating preferences, celebrations details.....' />
                            </div>

                            <div className="">
                                <button className="">gghfdhf</button>
                            </div>


                        </form>

                    </div>

                    <div className="span-col-1 grid grid-rows-3 w-[432px] h-[772px] gap-[20px]">

                        <div className="span-row-1 p-3 rounded-lg bg-[#0F1923] border">

                            <h1 className="pb-3">hfjbhvh</h1>

                            <div className="">
                                <div className="flex justify-between">
                                    <h1 className="">jnfvbhsjdb</h1>
                                    <p className="">kjnfdvd</p>
                                </div>

                                <hr className='my-1' />

                                <div className="flex justify-between">
                                    <h1 className="">jnfvbhsjdb</h1>
                                    <p className="">kjnfdvd</p>
                                </div>

                                <hr className='my-1' />

                                <div className="flex justify-between">
                                    <h1 className="">jnfvbhsjdb</h1>
                                    <p className="">kjnfdvd</p>
                                </div>

                                <hr className='my-1' />

                                <div className="flex justify-between">
                                    <h1 className="">jnfvbhsjdb</h1>
                                    <p className="">kjnfdvd</p>
                                </div>


                            </div>

                        </div>

                        <div className="span-row-1 bg-blue-400">hgyft</div>

                        <div className="span-row-1 bg-blue-400">jkgjf</div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Reservation
