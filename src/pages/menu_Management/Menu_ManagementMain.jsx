import React from 'react'
import { useSearchParams } from 'react-router-dom'

import MenuItemsList from './menu_ManagementPages/MenuItemsList'
import AddEditItems from './menu_ManagementPages/AddEditItems'
import CategoryManagement from './menu_ManagementPages/CategoryManagement'
import LastPage from './menu_ManagementPages/LastPage'

const pages = {
  'items-list': MenuItemsList,
  'add-edit-items': AddEditItems,
  'category-management': CategoryManagement,
  'last-page': LastPage,
}

const Menu_ManagementMain = () => {
  const [params] = useSearchParams()
  const Page = pages[params.get('page')] ?? MenuItemsList

  return (
    <div>
      <Page />
    </div>
  )
}

export default Menu_ManagementMain