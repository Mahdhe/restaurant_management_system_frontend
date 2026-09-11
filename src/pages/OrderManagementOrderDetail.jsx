import React from 'react'
import Topbar from '../components/commonOM/Topbar'
import Menubar from '../components/commonOM/Menubar'
import ReservationList from '../components/orderDetailOM/ReservationList'
import OrderBreakdown from '../components/orderDetailOM/OrderBreakdown'
import StatusTimeline from '../components/orderDetailOM/StatusTimeline'
import OrderInfo from '../components/orderDetailOM/OrderInfo'
import PaymentInfo from '../components/orderDetailOM/PaymentInfo'
import Actions from '../components/orderDetailOM/Actions'

const OrderManagementOrderDetail = () => {
    return (
        <>
            {/* Main-Section */}
            <section className="w-full min-h-screen gap-[20px] flex flex-col">

                {/* sub-Section */}
                <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]">

                    <Topbar></Topbar>

                    <Menubar></Menubar>

                    <ReservationList></ReservationList>

                    {/* Main-Grid */}
                    <section className="w-[1132px] h-[999px] gap-[20px] flex">

                        {/* Left-Box */}
                        <section className="w-[782px] h-[849px] gap-[20px] flex flex-col">
                            <OrderBreakdown></OrderBreakdown>
                            <StatusTimeline></StatusTimeline>
                            
                        </section>

                        {/* Right-Box */}
                        <section className="w-[330px] h-[999px] gap-[20px] flex flex-col">

                            <OrderInfo></OrderInfo>
                            <PaymentInfo></PaymentInfo>
                            <Actions></Actions>

                        </section>

                        


                    </section>

                </section>

            </section>

        </>

    )
}

export default OrderManagementOrderDetail
