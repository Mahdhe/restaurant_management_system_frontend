import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CustomerDashboard from './crm_pages/CustomerDashboard'
import CustomerList from './crm_pages/CustomerList'

const CRM_Main = () => {
  return (
    // <div>
    //   {/* <MenuManagementMenubar /> */}

    //   <Routes>
    //     <Route path="/CRM-management/items-list" element={<CustomerDashboard></CustomerDashboard>} />
    //     <Route path="/menu-management/add-edit-items" element={<AddEditItems />} />
    //     <Route path="/menu-management/category-management" element={<CategoryManagement />} />
    //     <Route path="/menu-management/last-page" element={<LastPage />} />
    //     {/* default */}
    //     <Route path="*" element={<Navigate to="/menu-management/items-list" replace />} />
    //   </Routes>
    // </div>

    // <CustomerDashboard></CustomerDashboard>
    <CustomerList></CustomerList>

  )
}

export default CRM_Main
