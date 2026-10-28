import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import AvailabilityScheduler from '../../../components/menuManagement/lastPage/AvailabilityScheduler'
import TimeWindow from '../../../components/menuManagement/lastPage/TimeWindow'
import ImpactPreview from '../../../components/menuManagement/lastPage/ImpactPreview'
import KPILastpage from '../../../components/menuManagement/lastPage/KPILastpage'

const LastPage = () => {
    return (

        <>

            {/* Main-Section */}
            <section className="w-full min-w-0 min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full min-w-0 h-full flex-1 p-4 sm:p-8 gap-[12px] flex flex-col bg-[#0F1923] box-border">

                    <MenuHeader />
                    <RedirectingButtons />
                    <KPILastpage />

                    {/* MainGrid */}
                    <section className="w-[1200px] max-w-full min-w-0 h-[666px] max-[1439px]:h-auto gap-[20px] flex max-[1439px]:flex-col items-start">

                        {/* LeftBox */}
                        <section className="w-[880px] max-w-full min-w-0 h-[418px] max-[1439px]:h-auto gap-[20px] flex">

                            <AvailabilityScheduler />

                        </section>

                        {/* RightBox */}
                        <section className="w-[310px] max-w-full shrink-0 h-[666px] max-[1439px]:h-auto gap-[20px] flex flex-col">

                            <TimeWindow />
                            <ImpactPreview />

                        </section>

                    </section>

                </section>

            </section>

        </>

    )
}

export default LastPage