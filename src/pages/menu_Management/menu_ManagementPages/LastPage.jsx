import React from 'react'
import MenuHeader from '../../../components/menuManagement/commonMM/MenuHeader'
import RedirectingButtons from '../../../components/menuManagement/commonMM/RedirectingButtons'
import KPIrow from '../../../components/menuManagement/commonMM/KPIrow'
import AvailabilityScheduler from '../../../components/menuManagement/lastPage/AvailabilityScheduler'
import TimeWindow from '../../../components/menuManagement/lastPage/TimeWindow'
import ImpactPreview from '../../../components/menuManagement/lastPage/ImpactPreview'

const LastPage = () => {
    return (

        <>

            {/* Main-Section */}
            <section className="w-full min-h-screen gap-[20px] flex flex-col" >

                {/* sub-Section */}
                <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]" >

                    <MenuHeader></MenuHeader>
                    <RedirectingButtons></RedirectingButtons>
                    <KPIrow></KPIrow>

                    {/* MainGrid */}
                    <section className="w-[1132px] h-[666px] gap-[20px] flex">

                        {/* LeftBox */}
                        <section className="w-[810px] h-[418px] gap-[20px] flex">

                            <AvailabilityScheduler></AvailabilityScheduler>

                        </section>

                        {/* RightBox */}
                        <section className="w-[302px] h-[666px] gap-[20px] flex flex-col">

                            <TimeWindow></TimeWindow>  
                            <ImpactPreview></ImpactPreview>                          

                        </section>

                    </section>

                </section >

            </section >

        </>

    )
}

export default LastPage
