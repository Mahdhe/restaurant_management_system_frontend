import React from 'react'
import Topbar from '../../../components/orderManagement/common/Topbar'
import Menubar from '../../../components/orderManagement/common/Menubar'
import ReservationList from '../../../components/orderManagement/orderDetail/ReservationList'
import OrderBreakdown from '../../../components/orderManagement/orderDetail/OrderBreakdown'
import StatusTimeline from '../../../components/orderManagement/orderDetail/StatusTimeline'
import OrderInfo from '../../../components/orderManagement/orderDetail/OrderInfo'
import PaymentInfo from '../../../components/orderManagement/orderDetail/PaymentInfo'
import Actions from '../../../components/orderManagement/orderDetail/Actions'

const OrderDetail = () => {
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

export default OrderDetail
