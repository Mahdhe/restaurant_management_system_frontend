
import React from 'react';

import KPIrowNotifi02 from '../../../components/crmNotifications/notificationsPage02/KPIrowNotifi02';
import LiveAlertFeed from '../../../components/crmNotifications/notificationsPage02/LiveAlertFeed';
import AlertHistory from '../../../components/crmNotifications/notificationsPage02/AlertHistory';
import AlertFrequency from '../../../components/crmNotifications/notificationsPage02/AlertFrequency';
import HeaderButtons from '../../../components/crmNotifications/notificationsPage01/HeaderButtons';
import CriticalAlerts from '../../../components/crmNotifications/notificationsPage02/CriticalAlerts';
import NotificationSettings from '../../../components/crmNotifications/notificationsPage02/NotificationSettings';
import Notifications02RedirectButtons from '../../../components/crmNotifications/commonCRMNotifications/Notifications02RedirectButtons';
import CRM_Notification02_Header from '../../../components/crmNotifications/commonCRMNotifications/CRM_Notification02_Header';

const NotificationPage02 = () => {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#0F1923] text-white">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-3 py-4 sm:gap-6 sm:px-5 sm:py-6 lg:px-8">

        {/* Page Header */}
        <header className="flex w-full min-w-0 flex-col gap-4 sm:gap-5">
          <CRM_Notification02_Header></CRM_Notification02_Header>
          <Notifications02RedirectButtons></Notifications02RedirectButtons>
        </header>

        {/* KPI Cards */}
        <section className="w-full min-w-0">
          <KPIrowNotifi02 />
        </section>

        {/* Main Content: Alert Feed + Sidebar */}
        <section className="grid w-full min-w-0 grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">

          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <LiveAlertFeed />
          </div>

          {/* Right Column */}
          <aside className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <CriticalAlerts />
            <NotificationSettings />
          </aside>

        </section>

        {/* Alert History */}
        <section className="w-full min-w-0">
          <AlertHistory />
        </section>

        {/* Alert Frequency */}
        <section className="w-full min-w-0">
          <AlertFrequency />
        </section>

        {/* Footer Buttons */}
        <footer className="w-full min-w-0">
          <HeaderButtons />
        </footer>

      </div>
    </main>
  );
};

export default NotificationPage02
