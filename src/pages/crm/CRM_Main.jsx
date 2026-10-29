import React from 'react'
import { useSearchParams } from 'react-router-dom'
import CustomerDashboard from './crm_pages/CustomerDashboard'
import CustomerList from './crm_pages/CustomerList'
import CustomerProfile from './crm_pages/CustomerProfile'
import CustomerHistory from './crm_pages/CustomerHistory'
import CustomerLoyaltyProgram from './crm_pages/CustomerLoyaltyProgram'
import FrequentCustomerTracking from './crm_pages/FrequentCustomerTracking'

const pages = {
  'customer-dashboard': CustomerDashboard,
  'customer-list': CustomerList,
  'customer-profile': CustomerProfile,
  'order-history': CustomerHistory,
  'loyalty-program': CustomerLoyaltyProgram,
  'frequent-customer-tracking': FrequentCustomerTracking,
}

const CRM_Main = () => {
  const [params] = useSearchParams()
  const Page = pages[params.get('page')] ?? CustomerDashboard

  return (
    <div>
      <Page />
    </div>
  )
}

export default CRM_Main