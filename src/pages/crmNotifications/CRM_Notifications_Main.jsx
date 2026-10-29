import React from 'react'
import { useSearchParams } from 'react-router-dom'

import NotificationPage01 from './crmNotifications_pages/NotificationPage01'
import NotificationPage02 from './crmNotifications_pages/NotificationPage02'

const pages = {
  'notification-center': NotificationPage01,
  'real-time-alerts': NotificationPage02,
}

const CRM_Notifications_Main = () => {
  const [params] = useSearchParams()
  const Page = pages[params.get('page')] ?? NotificationPage01

  return <Page />
}

export default CRM_Notifications_Main