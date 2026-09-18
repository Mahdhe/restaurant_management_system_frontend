import React from 'react'
import Topbar from '../../../components/orderManagement/common/Topbar'
import Menubar from '../../../components/orderManagement/common/Menubar'
import KPIrow from '../../../components/orderManagement/orderHistory/KPIrow'
import ReservationList from '../../../components/orderManagement/orderHistory/ReservationList'
import RecentOrderCard from '../../../components/orderManagement/orderHistory/RecentOrderCard'

const OrderHistory = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]">

                    <Topbar></Topbar>

                    <Menubar></Menubar>

                    <KPIrow></KPIrow>
                    <ReservationList></ReservationList>

                    <RecentOrderCard></RecentOrderCard>

                </section>

            </section>
        </>
    )
}

export default OrderHistory
