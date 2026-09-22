import React from 'react'
import MenuBrowse from './order_ManagementPages/MenuBrowse'
import OrderBuild from './order_ManagementPages/OrderBuild'
import OrderSummary from './order_ManagementPages/OrderSummary'
import OrderHistory from './order_ManagementPages/OrderHistory'
import OrderDetail from './order_ManagementPages/OrderDetail'

const Order_ManagementMain = () => {
  return (
    <div>

        <MenuBrowse></MenuBrowse>
        <OrderBuild></OrderBuild>
        <OrderSummary></OrderSummary>
        <OrderHistory></OrderHistory>
        <OrderDetail></OrderDetail>

    </div>
  )
}

export default Order_ManagementMain
