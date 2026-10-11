import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// import MenuManagementMenubar from '../../components/menuManagement/commonMM/RedirectingButtons' // path adjust பண்ணுங்க

import MenuItemsList from './menu_ManagementPages/MenuItemsList'
import AddEditItems from './menu_ManagementPages/AddEditItems'
import CategoryManagement from './menu_ManagementPages/CategoryManagement'
import LastPage from './menu_ManagementPages/LastPage'

const Menu_ManagementMain = () => {
  return (
    <div>
      {/* <MenuManagementMenubar /> */}

      <Routes>
        <Route path="/menu-management/items-list" element={<MenuItemsList />} />
        <Route path="/menu-management/add-edit-items" element={<AddEditItems />} />
        <Route path="/menu-management/category-management" element={<CategoryManagement />} />
        <Route path="/menu-management/last-page" element={<LastPage />} />
        {/* default */}
        <Route path="*" element={<Navigate to="/menu-management/items-list" replace />} />
      </Routes>
    </div>
  )
}

export default Menu_ManagementMain