import React from 'react'
import { useSearchParams } from 'react-router-dom'

import MenuBrowse from './order_ManagementPages/MenuBrowse'
import OrderBuild from './order_ManagementPages/OrderBuild'
import OrderSummary from './order_ManagementPages/OrderSummary'
import OrderHistory from './order_ManagementPages/OrderHistory'
import OrderDetail from './order_ManagementPages/OrderDetail'

const pages = {
  'menu-browse': MenuBrowse,
  'order-build': OrderBuild,
  'order-summary': OrderSummary,
  'order-history': OrderHistory,
  'order-detail': OrderDetail,
}

const Order_ManagementMain = () => {
  const [params] = useSearchParams()
  const Page = pages[params.get('page')] ?? MenuBrowse

  return (
    <div>
      <Page />
    </div>
  )
}

export default Order_ManagementMain