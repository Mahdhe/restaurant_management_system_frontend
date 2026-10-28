import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CustomerDashboard from './crm_pages/CustomerDashboard'
import CustomerList from './crm_pages/CustomerList'
import CustomerProfile from './crm_pages/CustomerProfile'
import CustomerHistory from './crm_pages/CustomerHistory'
import CustomerLoyaltyProgram from './crm_pages/CustomerLoyaltyProgram'
import FrequentCustomerTracking from './crm_pages/FrequentCustomerTracking'

const CRM_Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/CRM-management/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/CRM-management/customer-list" element={<CustomerList />} />
        <Route path="/CRM-management/customer-profile" element={<CustomerProfile />} />
        <Route path="/CRM-management/order-history" element={<CustomerHistory />} />
        <Route path="/CRM-management/loyalty-program" element={<CustomerLoyaltyProgram />} />
        <Route path="/CRM-management/frequent-customer-tracking" element={<FrequentCustomerTracking />} />

        {/* default */}
        <Route path="*" element={<Navigate to="/CRM-management/customer-dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default CRM_Main