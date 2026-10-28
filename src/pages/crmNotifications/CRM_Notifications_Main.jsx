
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NotificationPage01 from './crmNotifications_pages/NotificationPage01'
import NotificationPage02 from './crmNotifications_pages/NotificationPage02'

const CRM_Notifications_Main = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to="notification-center" replace />}
      />

      <Route
        path="notification-center"
        element={<NotificationPage01 />}
      />

      <Route
        path="real-time-alerts"
        element={<NotificationPage02 />}
      />

      <Route
        path="*"
        element={<Navigate to="/admin/notifications" replace />}
      />
    </Routes>
  )
}

export default CRM_Notifications_Main
