import React from 'react'
import Topbar from '../../../components/orderManagement/common/Topbar'
import Menubar from '../../../components/orderManagement/common/Menubar'
import ReservationList from '../../../components/orderManagement/orderSummary/ReservationList'
import OrderItems from '../../../components/orderManagement/orderSummary/OrderItems'
import StatusTimeline from '../../../components/orderManagement/orderSummary/StatusTimeline'
import TableInfo from '../../../components/orderManagement/orderSummary/TableInfo'
import Actions from '../../../components/orderManagement/orderSummary/Actions'

const OrderSummary = () => {
  return (
    <>
      {/* Main-Section */}
      <section className="w-full min-h-screen gap-[20px] flex flex-col">

        {/* sub-Section */}
        <section className="w-full h-full p-4 sm:p-8 bg-[#0F1923]">

          {/* Topbar-section */}
          <Topbar></Topbar>

          {/* Menubar */}
          <Menubar></Menubar>

          <ReservationList></ReservationList>

          {/* Main_Grid */}
          <section className="flex gap-[20px] w-[1132px] h-[1085px] bg-[#0F1923]">

            {/* Left-content */}
            <div className="w-[782px] h-[1085px] gap-[20px] flex flex-col">

              <OrderItems></OrderItems>
              <StatusTimeline></StatusTimeline>

            </div>

            {/* Right-content */}
            <div className="w-[330p] h-[780px] gap-[16px] flex flex-col">

              <TableInfo></TableInfo>
              <Actions></Actions>
              
            </div>


          </section>

        </section>

      </section>
    </>
  )
}

export default OrderSummary
