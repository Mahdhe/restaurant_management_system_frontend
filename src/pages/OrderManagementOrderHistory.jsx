import React from 'react'
import Topbar from '../components/commonOM/Topbar'
import Menubar from '../components/commonOM/Menubar'
import KPIrow from '../components/orderHistoryOM/KPIrow'
import ReservationList from '../components/orderHistoryOM/ReservationList'
import RecentOrderCard from '../components/orderHistoryOM/RecentOrderCard'

const OrderManagementOrderHistory = () => {
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

export default OrderManagementOrderHistory
