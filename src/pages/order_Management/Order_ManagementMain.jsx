import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Menubar from '../../components/orderManagement/common/Menubar' // உங்க actual path-க்கு adjust பண்ணுங்க

import MenuBrowse from './order_ManagementPages/MenuBrowse'
import OrderBuild from './order_ManagementPages/OrderBuild'
import OrderSummary from './order_ManagementPages/OrderSummary'
import OrderHistory from './order_ManagementPages/OrderHistory'
import OrderDetail from './order_ManagementPages/OrderDetail'

const Order_ManagementMain = () => {
  return (
    <div>
      <Menubar />

      <Routes>
        <Route path="/order-management/menu-browse" element={<MenuBrowse />} />
        <Route path="/order-management/order-build" element={<OrderBuild />} />
        <Route path="/order-management/order-summary" element={<OrderSummary />} />
        <Route path="/order-management/order-history" element={<OrderHistory />} />
        <Route path="/order-management/order-detail" element={<OrderDetail />} />
        {/* default */}
        <Route path="*" element={<Navigate to="/order-management/menu-browse" replace />} />
      </Routes>
    </div>
  )
}

export default Order_ManagementMain